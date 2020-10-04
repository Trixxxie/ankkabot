const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "css",
    category: "languages",
    description: "CSS-kuvauskieli",
    run: async (client, message, args) => {
        message.delete()

        if(!args[0]){

            const css = new MessageEmbed()
                .setColor("#3B60E9")
                .setTitle("Cascading Style Sheets (CSS)")
                .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/250px-CSS3_logo_and_wordmark.svg.png")
                .setDescription("CSS on erityisesti WWW-dokumenteille kehitetty tyyliohjeiden laji. CSS:ssä dokumentille voi määritellä useita tyyliohjeita, jotka yhdistetään tietyllä tavalla yhdeksi säännöstöksi. CSS-tiedostojen pääte on yleensä `.css` *-Wikipedia*")
                .addFields(
                    { name: '**Vaikeustaso:** Helppo', value: 'CSS käyttö on erittäin helpooa, varsinkin jos opettelun yhdistää samaan syssyyn HTML kanssa.' },
                    { name: '**Peruskoodipätkiä**', value: '```css\nbody {\nbackground-color: #3B60E9;\n}\n```' }
                );

            message.channel.send(css);
        }
    }
}