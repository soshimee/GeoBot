import fs from "fs/promises";
import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import fetch from "node-fetch";

export default {
	async execute(interaction) {
		const config = JSON.parse(await fs.readFile("config.json", "utf8"));
		await interaction.deferReply();
		await fetch(new URL(`/api/client/servers/${config.pterodactyl.serverId}/command`, config.pterodactyl.host), { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${config.pterodactyl.apiKey}` }, body: JSON.stringify({ command: `unban ${interaction.options.getString("player")}` }) });
		await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "", description: "Successfully unbanned!" })] });
	},
	slashCommand: new SlashCommandBuilder().setName("unban").setDescription("Unban people from the Minecraft server.").addStringOption(option => option.setName("player").setDescription("Player to unban.").setRequired(true)).setDefaultMemberPermissions(0)
};