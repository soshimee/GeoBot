import { SlashCommandBuilder, EmbedBuilder } from "discord.js";

export default {
	async execute(interaction) {
		await interaction.deferReply();
		const teds = ["https://cdn.discordapp.com/attachments/986134821162078219/1008323737306804255/125316D9-49A1-4881-935E-DD3510C3F51A.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008323737864634448/5EF568D7-9A78-4BCC-851B-456511508FB3.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008323738661564526/8B91F103-A38F-4C28-8171-F84DBCA499CF.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008323739269746728/43555719-052C-4C73-BD66-4FE869ECE002.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008323739575922768/BD57C28E-C5A0-49F7-B75A-E2C82CA7CA54.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335739332866078/image0.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335820580728843/IMG_7377.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335820819796038/IMG_7383.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335821163745290/IMG_7446.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335821637693481/IMG_7454.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335821876756480/IMG_2938.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335822308790352/IMG_7939.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335822669496390/IMG_8016.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335823021801562/a7c32fa2-3ac1-4775-a9d9-3c4f6d010e7f.jpg", "https://cdn.discordapp.com/attachments/986134821162078219/1008335823365754930/IMG_8113.jpg"];
		let number = Math.floor(Math.random() * teds.length);
		if (interaction.options.getInteger("number")) {
			number = interaction.options.getInteger("number") - 1;
		}
		await interaction.editReply({ embeds: [new EmbedBuilder({ color: 0x0000a5, title: "Ted #" + (number + 1), image: { url: teds[number] } })] });
	},
	slashCommand: new SlashCommandBuilder().setName("ted").setDescription("Ted...?").addIntegerOption(option => option.setName("number").setDescription("Number of Ted").setMinValue(1).setMaxValue(15))
};