const {Discord, MessageEmbed} = require('discord.js');
module.exports = {
    name: "unmute",
    category: "admin",
    description: "No puhu sitten....",
    run: async (client, message, args) => {

        message.delete()
        const logChannel = client.channels.cache.get('761621293250379826');
        const badlog = client.channels.cache.get('761729516644728832');

        if(message.member.hasPermission('KICK_MEMBERS')){
            if (!args[0]) {
                return message.reply("Ketä lähtee katkasulta kotiin?")
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
                .setTitle(`${message.member.displayName} lopetti katkaisuhoidon :loud_sound:`)
                .setDescription(`**Poistettu hiljennys:** ${toMute} 
                **- ID:** ${toMute.id}`);

            logChannel.send(embed);
            toMute.roles.remove(toMute.guild.roles.cache.find(i => i.id === '761362208185253898'))

        } else {
            message.channel.send(`${message.author} mitähän sä äijjä koitat tehdä??`)

            const badlogmsg = new MessageEmbed()
                .setTitle(`Komennon esto [UNMUTE]`)
                .setDescription(`**Käyttäjä:** ${message.author}\n**Kanava:** ${message.channel.toString()}\n**Koko viesti:** ${message}`)
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL());
                

            badlog.send(badlogmsg);
        }

    }
}