const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
module.exports = {
    name: "ankkaloki",
    category: "admin",
    description: "Loki juttuja",
    run: async (client, message, args) => {
        message.delete()
        const everyone = message.guild.roles.cache.find(role => role.name === "@everyone");
        if(message.member.hasPermission("MANAGE_SERVER")){
            if(!message.member.guild.channels.cache.find(ch => ch.name === 'ankkaloki')){
                message.member.guild.channels.create('ankkaloki', {
                    type: 'text',
                    topic: 'Ethän vaihda kanavan nimeä!!',
                    permissionOverwrites: [
                        {
                            id: message.author.id,
                            allow: ['VIEW_CHANNEL'],
                        },
                        {
                            id: client.user.id,
                            allow: ['VIEW_CHANNEL'],
                        },
                        {
                            id: everyone,
                            deny: ['VIEW_CHANNEL'],
                        }
                    ],
                }).then(channel => message.channel.send(`:white_check_mark: **Valmista tuli!** ${channel}`));
            }
        }
    }
}