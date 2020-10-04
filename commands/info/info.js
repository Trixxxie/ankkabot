const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "info",
    category: "info",
    description: "Infoa käyttäjästä",
    run: async (client, message, args) => {
        message.delete()
        const user = message.member

        if(!args[0]){

            const info = new MessageEmbed()
                .setColor(user.displayColor)
                .setTitle(user.displayName)
                .setTimestamp()
                .setFooter(`Tiedon hakenut ${user.displayName}`)
                .setThumbnail(user.user.displayAvatarURL())
                .setDescription(user.roles.highest)
                .addFields(
                    {name: 'ID', value: user.id},
                    {name: 'Käyttäjä luotu', value: user.user.createdAt},
                    {name: 'Liittynyt Paskakoodi yhteisöön', value: user.joinedAt},
                    {name: 'Viimeisin viesti', value: user.lastMessage},
                    {name: 'Tila', value: user.presence.status}
                );

            message.channel.send(info);
        } else {
            const otherUser = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

            const info = new MessageEmbed()
                .setColor(otherUser.displayColor)
                .setTitle(otherUser.displayName)
                .setTimestamp()
                .setFooter(`Tiedon hakenut ${user.displayName}`)
                .setThumbnail(otherUser.user.displayAvatarURL())
                .setDescription(otherUser.roles.highest)
                .addFields(
                    {name: 'ID', value: otherUser.id},
                    {name: 'Käyttäjä luotu', value: otherUser.user.createdAt},
                    {name: 'Liittynyt Paskakoodi yhteisöön', value: otherUser.joinedAt},
                    {name: 'Viimeisin viesti', value: otherUser.lastMessage},
                    {name: 'Tila', value: otherUser.presence.status}
                );

            message.channel.send(info);
        }
    }
}