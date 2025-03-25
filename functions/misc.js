const db = {
	placeholder : {
		atk : 1,
		def : 1,
		max_hp : 111,
		speed : 11,
		eq : 111,
		starting_eq : 1,

		name : "111",
		desc : "11111111111111",
		lore : "3166207930552D5333652A74683135237448334E5F53306D337468314E672C6834532D474F6E332A763372792B5772306E39",
		atk_name : "111111",
		atk_desc : "1111",
		atk_flavortext : ["11111"],
		ability_name : "111111",
		ability_desc : "1111111",
		ability_flavortext : ["1111111"],
		icon_name : "1️⃣",

		extra : {},

		ability_use : () => void 0,
		pre_damage : () => void 0,
		post_damage : () => void 0,
		pre_atkroll : () => void 0,
		post_atkroll : () => void 0,
		pre_onhit : () => void 0,
		post_onhit : () => void 0,
	},
	Conet : {
		atk : 1.4,
		def : 1.3,
		max_hp : 245,
		speed : 12,
		eq : 75,
		starting_eq : 75,

		name : "Conet",
		desc : "A brown radio, though it somehow seems to have grown a consciousness. Or was it born with it? I won't question it...",
		lore : "\
		I am not familiar with these types of modules. Back when I was still mortal, I used to only know the radio through the blurry music that played during long road trips.\
		Though, by all means, this one is different from the ones I've known in my time.\
		I haven't been around it for long, yet once, I found it alone in some isolated corner, listening to loud beepings and static.\
		It's odd, I've been here for what feels like an eternity, yet this place still startles me with new surprises. I wonder what other creatures it to has show me?",
		atk_name : "ShortWave Tide",
		atk_desc : "Conet shoots out intense signals from its antennae.",
		atk_flavortext : [
			"Conet shoots out a signal...\n`'Your frequency varies.'`",
			"Conet shoots out a signal...\n`'I have nothing for you.'`",
			"Conet shoots out a signal...\n`'Your signal is fading.'`"
		],
		ability_name : "Shot in the Dark",
		ability_desc : "Reroll base attack damage and add an additional **10%** to it.",
		ability_flavortext : [
			"Conet tries again...\n`'Is this reaching you...?'`",
			"Conet tries again...\n`'Is my signal fading...?'`",
			"Conet tries again...\n`'Why aren't you answering...?'`"
		],
		icon_name : "📻",
		color : 0x804e41
	}
}

function get_embed(data = {}) {
	return {
		color: data.color ?? 0x000000,
		title: data.name ?? "",
		author: {
			name: "Carder's Legacy",
			icon_url: 'https://github.com/AlexSC750/cl-bot/blob/main/assets/cl_icon.png',
		},
		description: `\`${data.desc}\`` ?? "",
		fields: [
			{
				name: '',
				value: data.lore ?? "",
			},
			{
				name: '==== STATS ====',
				value: 
				`**HP**: ${data.max_hp ?? NaN}
				**ATK**: ${data.atk ?? NaN}
				**DEF**: ${data.def ?? NaN}
				**SPD**: ${data.speed ?? NaN}
				**EQ**: ${data.eq ?? NaN}
				`,
				inline: true,
			},
			{
				name: '==== ABILITY ====',
				value: `
				**${data.ability_name} :**
				${data.ability_desc}
				`,
				inline: true,
			},
		],
	};
}

class Card {
	constructor(data = {}) {
		for (const key in Object.keys(db.placeholder)) {
			this[key] = data[key] ?? db.placeholder[key]
		}
		this.hp = this.max_hp ?? 111
		this.status = "None"
	}
}

module.exports = {db, Card, get_embed}