const {Discord, MessageEmbed} = require('discord.js');
module.exports = {
    name: "mute",
    category: "admin",
    description: "Turpa kiinni!",
    run: async (client, message, args) => {

        message.delete()

        if(message.member.hasPermission('KICK_MEMBERS')){
            if (!args[0]) {
                return message.reply("Ketä lähtee hiljennykselle?")
                    .then(m => m.delete({timeout: 5000}));
            }

            const toMute = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

            if (!toMute) {
                return message.reply("Niin KETÄ?")
                .then(m => m.delete({timeout: 5000}));
            }

            if (toMute.id === message.author.id) {
                return message.reply("Itsesikö ajattelit heittää hiljennykselle? :joy:")
                .then(m => m.delete({timeout: 5000}));
            }

            const embed = new MessageEmbed()
                .setColor("#FFFF66")
                .setThumbnail(toMute.user.displayAvatarURL())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setTitle(`${message.member.displayName} laitto hiljennystä :mute:`)
                .setDescription(`**Hiljenetty ukko:** ${toMute} 
                **- ID:** ${toMute.id}`);

            message.channel.send(embed);
            toMute.roles.add(toMute.guild.roles.cache.find(i => i.id === '761362208185253898'))

        } else {
            message.channel.send(`${message.author} KWAAK BITCH!`)
            .then(msg => msg.delete({timer: 2500}));

        }

    }
}