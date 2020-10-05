const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
module.exports = {
    name: "warn",
    category: "admin",
    description: "Viimeinen varoitus!!",
    run: async (client, message, args) => {

        message.delete()

        if(message.member.hasPermission('BAN_MEMBERS')){

            if (!args[0]) {
                return message.reply("Kelle annetaan varotusta?")
                    .then(m => m.delete({timeout: 5000}));
            }

            if (!args[1]) {
                return message.reply("Onko tähän syy? :confused:")
                .then(m => m.delete({timeout: 5000}));
            }

            const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

            if (!toBan) {
                return message.reply("Niin KETÄ?")
                .then(m => m.delete({timeout: 5000}));
            }

            if(!message.member.guild.channels.cache.find(ch => ch.name === 'ankkaloki')){
                const jatkossa = new MessageEmbed()
                    .setColor("RED")
                    .setThumbnail(client.user.displayAvatarURL())
                    .setFooter(message.member.displayName, message.author.displayAvatarURL())
                    .setTimestamp()
                    .setTitle(`Ankkalokit puuttuvat!?`)
                    .setDescription(`Jos haluat jatkossa saada viestit lokeina piiloon bänneistä, varoituksista, hiljennyksistä ja muista moderaatio toimista niin pistä **Ankkalokit** järjestykseen! Ne saat nopeasti tehtyä käyttämällä komennon \`-ankkalokit\``)
                message.author.send(jatkossa)

                const embed = new MessageEmbed()
                .setColor("#682A43")
                .setThumbnail(toBan.user.displayAvatarURL())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setTitle(`${message.member.displayName} lähetti kiukkuisen viestin :anger:`)
                .setDescription(stripIndents`**Kiukkuisen viestin saaja:** ${toBan} 
                **- ID:** ${toBan.id}
                **- Syy:** ${args.slice(1).join(" ")}`);

                message.channel.send(embed);
            } else {
                const ankkaloki = message.member.guild.channels.cache.find(ch => ch.name === 'ankkaloki')
                const embed = new MessageEmbed()
                .setColor("#682A43")
                .setThumbnail(toBan.user.displayAvatarURL())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setTitle(`${message.member.displayName} lähetti kiukkuisen viestin :anger:`)
                .setDescription(stripIndents`**Kiukkuisen viestin saaja:** ${toBan} 
                **- ID:** ${toBan.id}
                **- Syy:** ${args.slice(1).join(" ")}`);

                ankkaloki.send(embed);
            }

            const warning = new MessageEmbed()
                .setColor("#682A43")
                .setThumbnail(toBan.user.displayAvatarURL())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setTitle(`${message.member.displayName} lähetti kiukkuisen viestin __SINULLE__ :anger:`)
                .setDescription(stripIndents`**Kiukkuisen viestin saaja:** **__SINÄ__** 
                **- Syy:** ${args.slice(1).join(" ")}`);

                toBan.user.send(warning);
        } else {
            message.channel.send(`${message.author} KWAAK BITCH!`)
            .then(msg => msg.delete({timer: 2500}));
        }
    }
}