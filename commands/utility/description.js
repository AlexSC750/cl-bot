const { SlashCommandBuilder } = require('discord.js');
const {db,Card} = require("../../functions/misc.js")

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
			option.setName('category')
				.setDescription('The gif category')
				.setRequired(true)
				.addChoices(
					{ name: 'Funny', value: 'gif_funny' },
					{ name: 'Meme', value: 'gif_meme' },
					{ name: 'Movie', value: 'gif_movie' },
				)),
	async execute(interaction) {

	},
};