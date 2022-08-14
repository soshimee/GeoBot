import fs from "fs/promises";
import log4js from "log4js";
import { Client, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

const config = JSON.parse(await fs.readFile("config.json", "utf8"));
const logger = log4js.getLogger("client");
const rest = new REST({ version: 10 }).setToken(config.token);

logger.level = "debug";

const client = new Client({ intents: [] });

client.once("ready", async () => {
	logger.info("Ready!");
	const commands = [];
	for (const file of await fs.readdir("commands")) {
		const command = (await import("./commands/" + file)).default;
		commands.push(command);
	}
	const slashCommands = commands.map(command => command.slashCommand.toJSON());
	await rest.put(Routes.applicationGuildCommands(client.user.id, "985997942928318474"), { body: slashCommands });
	logger.info("Registered slash commands.")
});

client.on("interactionCreate", async interaction => {
	if (!interaction.isChatInputCommand()) return;

	logger.info(`Execute command ${interaction.commandName} by ${interaction.user.tag}.`);

	const command = (await import("./commands/" + interaction.commandName + ".js")).default;

	await command.execute(interaction);
});

process.on("uncaughtException", error => {
	logger.error(error);
});

client.login(config.token);