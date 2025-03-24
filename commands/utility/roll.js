const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Rolls for attack. [25-50] '),
	async execute(interaction) {
		const min = 25
		const max = 50
		var value = Math.floor(Math.random() * (max+1 - min)) + min
		await interaction.reply(`Rolled a **${value}**.`);
	},
};