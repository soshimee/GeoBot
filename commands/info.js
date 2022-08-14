import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import minecraft from "minecraft-protocol";

export default {
	async execute(interaction) {
		await interaction.deferReply();
		try {
			const result = await minecraft.ping({ host: "mc.geopoliticalsmp.com" });
			await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "🟢 GeopoliticalSMP", fields: [{ name: "Players", value: result.players.online + "/" + result.players.max }] })] });
		} catch (error) {
			await interaction.editReply({ embeds: [new EmbedBuilder({ title: "🔴 GeopoliticalSMP" })] });
		}
	},
	slashCommand: new SlashCommandBuilder().setName("info").setDescription("View server info.")
};