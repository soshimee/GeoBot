import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import fs from "fs/promises";

export default {
	async execute(interaction) {
		await interaction.deferReply();
		const fields = [];
		for (const file of await fs.readdir("commands")) {
			const command = (await import("./" + file)).default.slashCommand;
			fields.push({ name: "/" + command.name, value: command.description })
		}
		await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "🌎 GeoBot Help", fields })] });
	},
	slashCommand: new SlashCommandBuilder().setName("help").setDescription("View bot help.")
};