const {Discord, MessageEmbed} = require('discord.js');
module.exports = {
    name: "unmute",
    category: "admin",
    description: "No puhu sitten....",
    run: async (client, message, args) => {

        message.delete()

        if(message.member.hasPermission('KICK_MEMBERS')){
            if (!args[0]) {
                return message.reply("Ketä lähtee hiljennykseltä pois?")
                    .then(m => m.delete({timeout: 5000}));
            }

            const toMute = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

            if (!toMute) {
                return message.reply("Niin KETÄ?")
                .then(m => m.delete({timeout: 5000}));
            }

            const embed = new MessageEmbed()
                .setColor("#FFFF66")
                .setThumbnail(toMute.user.displayAvatarURL())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setTitle(`${message.member.displayName} poisti hiljennyksen :loud_sound:`)
                .setDescription(`**Poistettu hiljennys:** ${toMute} 
                **- ID:** ${toMute.id}`);

            message.channel.send(embed);
            toMute.roles.remove(toMute.guild.roles.cache.find(i => i.id === '761362208185253898'))

        } else {
            message.channel.send(`${message.author} KWAAK BITCH!`)
            .then(msg => msg.delete({timer: 2500}));
        }

    }
}