import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
	async execute(interaction, extras) {
		await interaction.deferReply();
		const fields = [];
		extras.commandList.forEach(command => fields.push({ name: "/" + command.name, value: command.description }));
		await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "🌎 GeoBot Help", fields })] });
	},
	slashCommand: new SlashCommandBuilder().setName("help").setDescription("View bot help.")
};