import fs from "fs/promises";
import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import fetch from "node-fetch";

export default {
	async execute(interaction) {
		const config = JSON.parse(await fs.readFile("config.json", "utf8"));
		await interaction.deferReply();
		await fetch(new URL(`/api/client/servers/${config.pterodactyl.serverId}/command`, config.pterodactyl.host), { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${config.pterodactyl.apiKey}` }, body: JSON.stringify({ command: `kick ${interaction.options.getString("player")} ${interaction.options.getString("reason")}` }) });
		await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "", description: "Successfully kicked!" })] });
	},
	slashCommand: new SlashCommandBuilder().setName("kick").setDescription("Kick people from the Minecraft server.").addStringOption(option => option.setName("player").setDescription("Player to kick.").setRequired(true)).addStringOption(option => option.setName("reason").setDescription("Reason for the kick.").setRequired(true)).setDefaultMemberPermissions(0)
};