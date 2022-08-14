import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
	async execute(interaction) {
		const t1 = process.hrtime.bigint();
		await interaction.deferReply();
		const t2 = process.hrtime.bigint();
		await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "Ping", description: t2 - t1 + "ns" })] });
	},
	slashCommand: new SlashCommandBuilder().setName("ping").setDescription("Is the bot lagging?")
};