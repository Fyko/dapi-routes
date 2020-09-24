export const routes = {/** https://discord.dev/resource */ getGuildAuditLog:(guildId: string): string => `/guilds/${guildId}/audit-logs`,/** https://discord.dev/resource */ getChannel:(channelId: string): string => `/channels/${channelId}`,/** https://discord.dev/resource */ delete/closeChannel:(channelId: string): string => `/channels/${channelId}`,/** https://discord.dev/resource */ getChannelMessages:(channelId: string): string => `/channels/${channelId}/messages`,/** https://discord.dev/resource */ getChannelMessage:(channelId: string, messageId: string): string => `/channels/${channelId}/messages/${messageId}`,/** https://discord.dev/resource */ createMessage:(channelId: string): string => `/channels/${channelId}/messages`,/** https://discord.dev/resource */ crosspostMessage:(channelId: string, messageId: string): string => `/channels/${channelId}/messages/${messageId}/crosspost`,/** https://discord.dev/resource */ createReaction:(channelId: string, messageId: string, emoji: string): string => `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`,/** https://discord.dev/resource */ deleteOwnReaction:(channelId: string, messageId: string, emoji: string): string => `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/@me`,/** https://discord.dev/resource */ deleteUserReaction:(channelId: string, messageId: string, emoji: string, userId: string): string => `/channels/${channelId}/messages/${messageId}/reactions/${emoji}/${userId}`,/** https://discord.dev/resource */ getReactions:(channelId: string, messageId: string, emoji: string): string => `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`,/** https://discord.dev/resource */ deleteAllReactions:(channelId: string, messageId: string): string => `/channels/${channelId}/messages/${messageId}/reactions`,/** https://discord.dev/resource */ deleteAllReactionsForEmoji:(channelId: string, messageId: string, emoji: string): string => `/channels/${channelId}/messages/${messageId}/reactions/${emoji}`,/** https://discord.dev/resource */ deleteMessage:(channelId: string, messageId: string): string => `/channels/${channelId}/messages/${messageId}`,/** https://discord.dev/resource */ bulkDeleteMessages:(channelId: string): string => `/channels/${channelId}/messages/bulk-delete`,/** https://discord.dev/resource */ editChannelPermissions:(channelId: string, overwriteId: string): string => `/channels/${channelId}/permissions/${overwriteId}`,/** https://discord.dev/resource */ getChannelInvites:(channelId: string): string => `/channels/${channelId}/invites`,/** https://discord.dev/resource */ createChannelInvite:(channelId: string): string => `/channels/${channelId}/invites`,/** https://discord.dev/resource */ deleteChannelPermission:(channelId: string, overwriteId: string): string => `/channels/${channelId}/permissions/${overwriteId}`,/** https://discord.dev/resource */ followNewsChannel:(channelId: string): string => `/channels/${channelId}/followers`,/** https://discord.dev/resource */ triggerTypingIndicator:(channelId: string): string => `/channels/${channelId}/typing`,/** https://discord.dev/resource */ getPinnedMessages:(channelId: string): string => `/channels/${channelId}/pins`,/** https://discord.dev/resource */ addPinnedChannelMessage:(channelId: string, messageId: string): string => `/channels/${channelId}/pins/${messageId}`,/** https://discord.dev/resource */ deletePinnedChannelMessage:(channelId: string, messageId: string): string => `/channels/${channelId}/pins/${messageId}`,/** https://discord.dev/resource */ groupDmAddRecipient:(channelId: string, userId: string): string => `/channels/${channelId}/recipients/${userId}`,/** https://discord.dev/resource */ groupDmRemoveRecipient:(channelId: string, userId: string): string => `/channels/${channelId}/recipients/${userId}`,/** https://discord.dev/resource */ listGuildEmojis:(guildId: string): string => `/guilds/${guildId}/emojis`,/** https://discord.dev/resource */ getGuildEmoji:(guildId: string, emojiId: string): string => `/guilds/${guildId}/emojis/${emojiId}`,/** https://discord.dev/resource */ createGuildEmoji:(guildId: string): string => `/guilds/${guildId}/emojis`,/** https://discord.dev/resource */ deleteGuildEmoji:(guildId: string, emojiId: string): string => `/guilds/${guildId}/emojis/${emojiId}`,/** https://discord.dev/resource */ createGuild:(): string => `/guilds`,/** https://discord.dev/resource */ getGuild:(guildId: string): string => `/guilds/${guildId}`,/** https://discord.dev/resource */ getGuildPreview:(guildId: string): string => `/guilds/${guildId}/preview`,/** https://discord.dev/resource */ deleteGuild:(guildId: string): string => `/guilds/${guildId}`,/** https://discord.dev/resource */ getGuildChannels:(guildId: string): string => `/guilds/${guildId}/channels`,/** https://discord.dev/resource */ createGuildChannel:(guildId: string): string => `/guilds/${guildId}/channels`,/** https://discord.dev/resource */ getGuildMember:(guildId: string, userId: string): string => `/guilds/${guildId}/members/${userId}`,/** https://discord.dev/resource */ listGuildMembers:(guildId: string): string => `/guilds/${guildId}/members`,/** https://discord.dev/resource */ addGuildMember:(guildId: string, userId: string): string => `/guilds/${guildId}/members/${userId}`,/** https://discord.dev/resource */ addGuildMemberRole:(guildId: string, userId: string, roleId: string): string => `/guilds/${guildId}/members/${userId}/roles/${roleId}`,/** https://discord.dev/resource */ removeGuildMemberRole:(guildId: string, userId: string, roleId: string): string => `/guilds/${guildId}/members/${userId}/roles/${roleId}`,/** https://discord.dev/resource */ removeGuildMember:(guildId: string, userId: string): string => `/guilds/${guildId}/members/${userId}`,/** https://discord.dev/resource */ getGuildBans:(guildId: string): string => `/guilds/${guildId}/bans`,/** https://discord.dev/resource */ getGuildBan:(guildId: string, userId: string): string => `/guilds/${guildId}/bans/${userId}`,/** https://discord.dev/resource */ createGuildBan:(guildId: string, userId: string): string => `/guilds/${guildId}/bans/${userId}`,/** https://discord.dev/resource */ removeGuildBan:(guildId: string, userId: string): string => `/guilds/${guildId}/bans/${userId}`,/** https://discord.dev/resource */ getGuildRoles:(guildId: string): string => `/guilds/${guildId}/roles`,/** https://discord.dev/resource */ createGuildRole:(guildId: string): string => `/guilds/${guildId}/roles`,/** https://discord.dev/resource */ deleteGuildRole:(guildId: string, roleId: string): string => `/guilds/${guildId}/roles/${roleId}`,/** https://discord.dev/resource */ getGuildPruneCount:(guildId: string): string => `/guilds/${guildId}/prune`,/** https://discord.dev/resource */ beginGuildPrune:(guildId: string): string => `/guilds/${guildId}/prune`,/** https://discord.dev/resource */ getGuildVoiceRegions:(guildId: string): string => `/guilds/${guildId}/regions`,/** https://discord.dev/resource */ getGuildInvites:(guildId: string): string => `/guilds/${guildId}/invites`,/** https://discord.dev/resource */ getGuildIntegrations:(guildId: string): string => `/guilds/${guildId}/integrations`,/** https://discord.dev/resource */ createGuildIntegration:(guildId: string): string => `/guilds/${guildId}/integrations`,/** https://discord.dev/resource */ deleteGuildIntegration:(guildId: string, integrationId: string): string => `/guilds/${guildId}/integrations/${integrationId}`,/** https://discord.dev/resource */ syncGuildIntegration:(guildId: string, integrationId: string): string => `/guilds/${guildId}/integrations/${integrationId}/sync`,/** https://discord.dev/resource */ getGuildWidget:(guildId: string): string => `/guilds/${guildId}/widget`,/** https://discord.dev/resource */ getGuildEmbed:(guildId: string): string => `/guilds/${guildId}/embed`,/** https://discord.dev/resource */ getGuildVanityUrl:(guildId: string): string => `/guilds/${guildId}/vanity-url`,/** https://discord.dev/resource */ getGuildWidgetImage:(guildId: string): string => `/guilds/${guildId}/widget.png`,/** https://discord.dev/resource */ getInvite:(inviteCode: string): string => `/invites/${inviteCode}`,/** https://discord.dev/resource */ deleteInvite:(inviteCode: string): string => `/invites/${inviteCode}`,/** https://discord.dev/resource */ getCurrentUser:(): string => `/users/@me`,/** https://discord.dev/resource */ getUser:(userId: string): string => `/users/${userId}`,/** https://discord.dev/resource */ getCurrentUserGuilds:(): string => `/users/@me/guilds`,/** https://discord.dev/resource */ leaveGuild:(guildId: string): string => `/users/@me/guilds/${guildId}`,/** https://discord.dev/resource */ getUserDMs:(): string => `/users/@me/channels`,/** https://discord.dev/resource */ createDm:(): string => `/users/@me/channels`,/** https://discord.dev/resource */ createGroupDm:(): string => `/users/@me/channels`,/** https://discord.dev/resource */ getUserConnections:(): string => `/users/@me/connections`,/** https://discord.dev/resource */ listVoiceRegions:(): string => `/voice/regions`,/** https://discord.dev/resource */ createWebhook:(channelId: string): string => `/channels/${channelId}/webhooks`,/** https://discord.dev/resource */ getChannelWebhooks:(channelId: string): string => `/channels/${channelId}/webhooks`,/** https://discord.dev/resource */ getGuildWebhooks:(guildId: string): string => `/guilds/${guildId}/webhooks`,/** https://discord.dev/resource */ getWebhook:(webhookId: string): string => `/webhooks/${webhookId}`,/** https://discord.dev/resource */ getWebhookWithToken:(webhookId: string, webhookToken: string): string => `/webhooks/${webhookId}/${webhookToken}`,/** https://discord.dev/resource */ deleteWebhook:(webhookId: string): string => `/webhooks/${webhookId}`,/** https://discord.dev/resource */ deleteWebhookWithToken:(webhookId: string, webhookToken: string): string => `/webhooks/${webhookId}/${webhookToken}`,/** https://discord.dev/resource */ executeWebhook:(webhookId: string, webhookToken: string): string => `/webhooks/${webhookId}/${webhookToken}`,/** https://discord.dev/resource */ executeSlackCompatibleWebhook:(webhookId: string, webhookToken: string): string => `/webhooks/${webhookId}/${webhookToken}/slack`,/** https://discord.dev/resource */ executeGitHubCompatibleWebhook:(webhookId: string, webhookToken: string): string => `/webhooks/${webhookId}/${webhookToken}/github`}