const { SlashCommandBuilder } = require('discord.js');
const {db, get_embed} = require("../../functions/misc.js")

var table = {}
for (const key in db) {
	if (key != "placeholder") {
		table[db[key]?.name] = db[key]
	}
}

module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('description')
		.setDescription('Show the description of a card.')
		.addStringOption(option =>
			option.setName('card')
				.setDescription('The card you wish to see.')
				.setRequired(true)
				.addChoices(
					{ name: 'Conet', value: 'Conet' },
					{ name: 'temp', value: 'placeholder' },
				)),
	async execute(interaction) {
		const target = interaction.options.getString("card")
		try {
			await interaction.reply({embeds: [get_embed(db[target])]})
		} catch (error) {
			console.error(error);
			await interaction.reply("Something broke (error)")
		}
	},
};