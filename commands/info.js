import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
	async execute(interaction) {
		await interaction.deferReply();
		const soshimee = await interaction.client.users.fetch("420064845694631955");
		await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "🌎 GeoBot Info", fields: [{ name: "Version", value: "v1.1.1 (Beta)" }], author: { name: soshimee.tag, iconURL: soshimee.avatarURL() } })] });
	},
	slashCommand: new SlashCommandBuilder().setName("info").setDescription("View bot info.")
};