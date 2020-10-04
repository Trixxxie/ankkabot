const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
module.exports = {
    name: "ban",
    category: "admin",
    description: "Banaania pöksyihin!",
    run: async (client, message, args) => {

        message.delete()

        if(message.member.hasPermission('BAN_MEMBERS')){

            if (!args[0]) {
                return message.reply("Kelle annetaan kenkää?")
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

            if (toBan.id === message.author.id) {
                return message.reply("Itsesikö ajattelit heittää veks? :joy:")
                .then(m => m.delete({timeout: 5000}));
            }

            if (!toBan.bannable) {
                return message.reply("En pysty tuota ukkoa heittää jäähylle :sob:")
                .then(m => m.delete({timeout: 5000}));
            }

            const embed = new MessageEmbed()
                .setColor("#ff0000")
                .setThumbnail(toBan.user.displayAvatarURL())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setTitle(`${message.member.displayName} pisti paskat nippuun <:paskaa:761618140068184095>`)
                .setDescription(stripIndents`**Paska ukko:** ${toBan} 
                **- ID:** ${toBan.id}
                **- Syy:** ${args.slice(1).join(" ")}`);

            const promptEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`Heitetäänkö ${toBan} veks oikeasti?`)

            await message.channel.send(promptEmbed).then(async msg => {

            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuff
                if (emoji === "✅") {
                    msg.delete();

                    toBan.ban({ reason: args.slice(1).join(" ")})
                        .catch(err => {
                            if (err) return message.channel.send(`<:paskaa:761618140068184095> Nyt meni joku puihin tässäkin paskassa koodissa ${err}`)
                        });

                    message.channel.send(embed);
                } else if (emoji === "❌") {
                    msg.delete();

                    message.reply(`:eyes: Ok sitten...`)
                        .then(m => m.delete({timeout: 5000}));
                }
            });
        } else {
            message.channel.send(`${message.author} KWAAK BITCH!`)
            .then(msg => msg.delete({timer: 2500}))
        }
    }
}