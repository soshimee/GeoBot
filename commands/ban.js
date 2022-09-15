import fs from "fs/promises";
import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import fetch from "node-fetch";

export default {
	async execute(interaction) {
		const config = JSON.parse(await fs.readFile("config.json", "utf8"));
		await interaction.deferReply();
		if (interaction.options.getString("duration")) {
			await fetch(new URL(`/api/client/servers/${config.pterodactyl.serverId}/command`, config.pterodactyl.host), { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${config.pterodactyl.apiKey}` }, body: JSON.stringify({ command: `tempban ${interaction.options.getString("player")} ${interaction.options.getString("duration")} ${interaction.options.getString("reason")}` }) });
		} else {
			await fetch(new URL(`/api/client/servers/${config.pterodactyl.serverId}/command`, config.pterodactyl.host), { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${config.pterodactyl.apiKey}` }, body: JSON.stringify({ command: `ban ${interaction.options.getString("player")} ${interaction.options.getString("reason")}` }) });
		}
		await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "", description: "Successfully banned!" })] });
	},
	slashCommand: new SlashCommandBuilder().setName("ban").setDescription("Ban people from the Minecraft server.").addStringOption(option => option.setName("player").setDescription("Player to ban.").setRequired(true)).addStringOption(option => option.setName("reason").setDescription("Reason for the ban.").setRequired(true)).addStringOption(option => option.setName("duration").setDescription("Duration of the ban.")).setDefaultMemberPermissions(0)
};