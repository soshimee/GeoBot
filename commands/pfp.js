import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
	async execute(interaction) {
		await interaction.deferReply();
		await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "Profile Picture", description: interaction.options.getUser("user").tag, image: { url: interaction.options.getUser("user").avatarURL({ size: 4096 }) } })] });
	},
	slashCommand: new SlashCommandBuilder().setName("pfp").setDescription("Get someone's profile picture.").addUserOption(option => option.setName("user").setDescription("The user to get the profile picture from.").setRequired(true))
};