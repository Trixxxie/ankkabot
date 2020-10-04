const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "clear",
    category: "admin",
    description: "Siivous",
    run: async (client, message, args) => {

        message.delete()
        const logChannel = client.channels.cache.get('761621293250379826');
        const badlog = client.channels.cache.get('761729516644728832');

        if(message.member.hasPermission('MANAGE_MESSAGES')){

            if (!args[0]) {
                return message.reply("Niin montako viestiä?")
                    .then(m => m.delete({timeout: 5000}));
            }

            if (!args[1]) {
                return message.reply("Onko tähän syy? :confused:")
                .then(m => m.delete({timeout: 5000}));
            }

            if(args[1] === "-s") {
                message.channel.bulkDelete(args[0])

                const embed = new MessageEmbed()
                .setColor("#DAB855")
                .setThumbnail(message.author.displayAvatarURL())
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()
                .setTitle(`${message.member.displayName} poisti paskoja viestejä salaisesti <:paskaa:761618140068184095>`)
                .setDescription(stripIndents`**Viestien määrä:** ${args[0]} 
                **- Kanava:** ${message.channel}`);

                badlog.send(embed);
            } else {

                message.channel.bulkDelete(args[0])
                .then(messages => message.channel.send(`Poistettiin yhteensä \`${messages.size}\` viestiä.`))
                .then(msg => msg.delete({timeout: 10000}));
                const embed = new MessageEmbed()
                    .setColor("#DAB855")
                    .setThumbnail(message.author.displayAvatarURL())
                    .setFooter(message.member.displayName, message.author.displayAvatarURL())
                    .setTimestamp()
                    .setTitle(`${message.member.displayName} poisti paskoja viestejä <:paskaa:761618140068184095>`)
                    .setDescription(stripIndents`**Viestien määrä:** ${args[0]} 
                    **- Kanava:** ${message.channel}
                    **- Syy:** ${args.slice(1).join(" ")}`);

                logChannel.send(embed);
        }
     } else {
            message.channel.send(`${message.author} mitähän sä äijjä koitat tehdä??`)

            const badlogmsg = new MessageEmbed()
                .setTitle(`Komennon esto [CLEAR]`)
                .setDescription(`**Käyttäjä:** ${message.author}\n**Kanava:** ${message.channel.toString()}\n**Koko viesti:** ${message}`)
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL());
                

            badlog.send(badlogmsg);
        }
    }
}