const {Discord, MessageEmbed} = require('discord.js');
module.exports = {
    name: "help",
    category: "info",
    description: "Infoa botista",
    run: async (client, message, args) => {
        message.delete()
        const embed = new MessageEmbed()
            .setTitle(`Ankka apuja!`)
            .setDescription(`Komentoja kaipaat vai muuten vain infoa botista? Komennolla \`-ankka\` saat tarkempaa infoa ankasta.`)
            .setTimestamp()
            .setColor("#CC9966")
            .setURL("https://paskakoodi.cam/ankka")
            .addField('Lisätietoa komennoista', 'https://paskakoodi.cam/ankka')
            .setFooter(message.member.displayName, message.author.displayAvatarURL());

        message.channel.send(embed);
    }
}