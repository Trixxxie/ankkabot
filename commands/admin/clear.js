const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "clear",
    category: "admin",
    description: "Siivous",
    run: async (client, message, args) => {

        message.delete()

        if(message.member.hasPermission('MANAGE_MESSAGES')){

            if (!args[0]) {
                return message.reply("Niin montako viestiä?")
                    .then(m => m.delete({timeout: 5000}));
            } else {

                message.channel.bulkDelete(args[0])
                .then(messages => message.channel.send(`Poistettiin yhteensä \`${messages.size}\` viestiä.`))
                .then(msg => msg.delete({timeout: 10000}));
            }
        } else {
            message.channel.send(`${message.author} KWAAK BITCH!`)
            .then(msg => msg.delete({timer: 2500}));
        }
    }
};