import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import fetch from "node-fetch";

export default {
	async execute(interaction) {
		await interaction.deferReply();
		let number = "";
		if (interaction.options.getInteger("number")) {
			number = interaction.options.getInteger("number");
		}
		const rory = await (await fetch("https://rory.cat/purr/" + number)).json();
		if (rory.error) await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "Rory", description: rory.error })] });
		else await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "Rory #" + rory.id, image: { url: rory.url } })] });
	},
	slashCommand: new SlashCommandBuilder().setName("rory").setDescription("Rory...?").addIntegerOption(option => option.setName("number").setDescription("Number of Rory"))
};