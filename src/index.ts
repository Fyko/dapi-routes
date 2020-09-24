/* eslint-disable @typescript-eslint/naming-convention */
import camelcase from 'camelcase';
import { writeFileSync } from 'fs';
import fetch from 'node-fetch';
import { join } from 'path';
import { format } from 'prettier';
import signale from 'signale';

const RESOURCES = 'https://api.github.com/repos/discord/discord-api-docs/contents/docs/resources';
const ROUTE_REGEX = /## (?<name>.*?) % (?<method>POST|GET|PUT|DELETE) (?<route>\/.*)/g;
const DOCS_PARAM_REGEX = /{(?<param>.*?)#(?<docs>.*?\/.*?)}/g;
const PARAM_REGEX = /\${(?<param>.*?)}/g;

const includeDocs = process.argv.includes('--docs');
const path = process.argv[2] ?? join(process.cwd(), 'Routes.ts');

interface ResourceLinks {
	self: string;
	git: string;
	html: string;
}

interface Resource {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	html_url: string;
	git_url: string;
	download_url: string;
	type: 'file';
	_links: ResourceLinks;
}

async function run() {
	signale.info(`Starting Discord API route parser...`);
	const resources: Resource[] = await (await fetch(RESOURCES)).json();
	signale.info(`Fetched ${resources.length} files located within docs/resources`);

	const docLinks: Map<string, string> = new Map();

	let matchedRoutes: RegExpExecArray[] = [];
	for (const resource of resources) {
		const content = await (await fetch(resource.download_url)).text();
		const routes = content.match(ROUTE_REGEX);
		signale.info(`Parsed ${routes?.length ?? 0} routes within ${resource.path}`);
		if (routes) {
			const ranRoutes = routes.map((r: string) => new RegExp(ROUTE_REGEX).exec(r)!);
			matchedRoutes = matchedRoutes.concat(ranRoutes);

			for (const route of ranRoutes) docLinks.set(route.groups!.name, resource.name);
		}
	}
	console.log(docLinks);

	const routes: Record<string, string> = {};
	// eslint-disable-next-line
	for (const [_, name, __, route] of matchedRoutes.filter((r) => r != null).values() as IterableIterator<
		RegExpExecArray
	>) {
		if (name.includes('(deprecated)')) continue;

		const resource = docLinks.get(name);
		const slug = resource
			? `/${resource.split('.')[0].toLowerCase().replace('_', '-')}#${name
					.split(' ')
					.join('-')
					.toLowerCase()
					.replace('/', '')}`
			: '';
		const docLink = `https://discord.dev/resources${slug}`;

		const camelName = camelcase(name.replace('/', ' '));

		const routeReplacer = (_: string, param: string): string => {
			const camelParam = camelcase(param.split('.'));
			return `\$\{${camelParam}\}`;
		};

		const cleanRoute = route.replace(DOCS_PARAM_REGEX, routeReplacer);
		const matchedParams = cleanRoute.match(new RegExp(PARAM_REGEX));
		const params = matchedParams?.length
			? matchedParams
					.map((p) => {
						const ran = new RegExp(PARAM_REGEX).exec(p);
						return `${ran!.groups!.param}: string`;
					})
					.join(', ')
			: '';

		const fn = `(${params}): string => \`${cleanRoute}\``;

		const key = `${includeDocs ? `/** ${docLink} */ ` : ''}${camelName}`;
		routes[key] = fn;

		signale.info(`Successfully created route ${camelName} (${name})`);
	}

	const routeContent = `export const routes = ${JSON.stringify(routes)}`.replace(/\"/g, '');

	writeFileSync(path, format(routeContent, { parser: 'typescript' }));
	signale.info(`Successfully wrote all ${matchedRoutes.length} to ${path}`);
}

void run();
