const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "ankka",
    category: "info",
    description: "Infoa ankasta",
    run: async (client, message, args) => {
        message.delete()

        const embed = new MessageEmbed()
            .setTitle("Ankka")
            .setColor("RANDOM")
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`Ankka on suomalainen botti SISULLA varustettuna. Toimii apuna kaikissa discord servereissä "työvälineenä", joka helpoittaa moderointia ja tuo hauskoja ominaisuuksia käyttäjille`)
            .addFields(
                {name: 'Kutsulinkki', value: 'https://shorturl.at/iU258', inline: true},
                {name: 'Lisätietoa', value: 'https://paskakoodi.cam/ankka', inline: true},
                {name: 'Tuki', value: 'https://discord.gg/S3pyydc'}
            )
            .setTimestamp();

        message.channel.send(embed);
        }
}