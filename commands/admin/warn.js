const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");
module.exports = {
    name: "warn",
    category: "admin",
    description: "Viimeinen varoitus!!",
    run: async (client, message, args) => {

        message.delete()
        const logChannel = client.channels.cache.get('761621293250379826');
        const badlog = client.channels.cache.get('761729516644728832');

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

            const embed = new MessageEmbed()
                .setColor("#682A43")
                .setThumbnail(toBan.user.displayAvatarURL())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setTitle(`${message.member.displayName} lähetti kiukkuisen viestin :anger:`)
                .setDescription(stripIndents`**Kiukkuisen viestin saaja:** ${toBan} 
                **- ID:** ${toBan.id}
                **- Syy:** ${args.slice(1).join(" ")}`);

            const warning = new MessageEmbed()
                .setColor("#682A43")
                .setThumbnail(toBan.user.displayAvatarURL())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setTitle(`${message.member.displayName} lähetti kiukkuisen viestin __SINULLE__ :anger:`)
                .setDescription(stripIndents`**Kiukkuisen viestin saaja:** **__SINÄ__** 
                **- Syy:** ${args.slice(1).join(" ")}`);

                logChannel.send(embed);
                toBan.user.send(warning);
        } else {
            message.channel.send(`${message.author} mitähän sä äijjä koitat tehdä??`)

            const badlogmsg = new MessageEmbed()
                .setTitle(`Komennon esto [WARN]`)
                .setDescription(`**Käyttäjä:** ${message.author}\n**Kanava:** ${message.channel.toString()}\n**Koko viesti:** ${message}`)
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL());
                

            badlog.send(badlogmsg);
        }
    }
}