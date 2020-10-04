const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "html",
    category: "languages",
    description: "HTML-ohjelmointikieli",
    run: async (client, message, args) => {
        message.delete()

        if(!args[0]){

            const html = new MessageEmbed()
                .setColor("#E33617")
                .setTitle("Hypertext Markup Language (HTML)")
                .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png")
                .setDescription("HTML eli Hypertext Markup Language on avoimesti standardoitu kuvauskieli, jolla voidaan kuvata hyperlinkkejä sisältävää tekstiä eli hypertekstiä. HTML:llä voidaan myös merkitä tekstin rakenne eli esimerkiksi, mikä osa tekstistä on otsikkoa ja mikä leipätekstiä. HTML tunnetaan erityisesti kielenä, jolla internetsivut on kirjoitettu. *-Wikipedia*")
                .addFields(
                    { name: '**Vaikeustaso:** Helppo', value: 'HTML aloittaminen on erittäin helppoa, tällä saat perussivustoja koodailtua ilman suurempia ominaisuuksia.' },
                    { name: '**Peruskoodipätkiä**', value: '```html\n<p>liirum laarum perus paragraph</p>\n<b>tämä on lihavoitu teksti</b>\n```' }
                );

            message.channel.send(html);
        }
    }
}