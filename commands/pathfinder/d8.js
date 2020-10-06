const {Discord, MessageEmbed} = require('discord.js');
const dice = require("d20");
module.exports = {
    name: "d8",
    category: "info",
    description: "Infoa ankasta",
    run: async (client, message, args) => {
        message.delete()

        if(!args[0]) {

            const embed = new MessageEmbed()
                .setTitle(`${message.member.displayName} heitti 1d8`)
                .setDescription(`Tulos:  \`${dice.roll('8')}\``)
                .setTimestamp()
                .setFooter(message.member.displayName, message.author.displayAvatarURL());

            message.channel.send(embed);
        } else if(!isNaN(args[0])){
            const embed = new MessageEmbed()
                .setTitle(`${message.member.displayName} heitti ${args[0]}d8`)
                .setDescription(`Tulos:  \`${dice.roll(`${args[0]}d8`)}\``)
                .setTimestamp()
                .setFooter(message.member.displayName, message.author.displayAvatarURL());

            message.channel.send(embed);
        } else {
            message.reply(`${args[0]} ei ole numero! Oikea käyttö on \`-d8 (määrä)\``)
            .then(m => m.delete({timeout: 10000}));
        }
    }
}