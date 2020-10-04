const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "php",
    category: "languages",
    description: "PHP-ohjelmointikieli",
    run: async (client, message, args) => {
        message.delete()

        if(!args[0]){

            const php = new MessageEmbed()
                .setColor("#4c7978")
                .setTitle("Hypertext Preprocessor (PHP)")
                .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/250px-PHP-logo.svg.png")
                .setDescription("käytetään erityisesti web-palvelinympäristöissä dynaamisten web-sivujen luonnissa. Ohjelmointikielen lisäksi PHP-ympäristössä on laaja luokkakirjasto. PHP on komentosarjakieli, jossa ohjelmakoodi tulkitaan vasta ohjelman suoritusvaiheessa. PHP:tä voidaan käyttää useilla eri alustoilla ja käyttöjärjestelmillä. *-Wikipedia*")
                .addFields(
                    { name: '**Vaikeustaso:** Keskivaikea', value: 'PHP peruskäyttö on kohtuu helppoa, mutta laajempi opettelu voi viedä aikaa ja hermoja.' },
                    {name: '**Peruskoodipätkiä**', value: '```php\n<?php\n// Molemmat rivit tulostavat saman tekstin\necho \'Huomenta, paskahousut!\';\nprint \'Huomenta, housupaskat!\';\n?>\n```' }
                );

            message.channel.send(php);
        }
    }
}