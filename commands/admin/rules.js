const {Discord, MessageEmbed} = require('discord.js');
module.exports = {
    name: "rules",
    category: "admin",
    description: "Säännöt",
    run: async (client, message, args) => {
        message.delete()

        const badlog = client.channels.cache.get('761729516644728832');
        const rules = new MessageEmbed()
            .setColor('#282828')
            .setTitle('Paskakoodi.cam Discord serverin säännöt <:paskaa:761618140068184095>')
            .setURL('https://paskakoodi.cam')
            .setThumbnail('https://paskakoodi.cam/src/img/paskakoodi_logo.png')
            .addFields(
                { name: ':one: Käytä maalaisjärkeä', value: 'Maalaisjärjen käyttö on suositeltavaa ja melkeinpä pakollista, esimerkiksi jos jotain ei ole kielletty erikseen ei tee siitä sallittua.' },
                { name: ':two: Kunnioita muita käyttäjiä', value: 'Mielipiteitä on yhtä monta kuin on persereikiä, kunnioitetaan kaikkia reikiä!' },
                { name: ':three: Käytä aina oikeaa kanavaa', value: 'Serverillämme on useampia kanavia ihan syystä...'},
                { name: ':four: Omista huumorintajua', value: 'Paska koodi on aina paska koodi, kaikkea ei tarvitse ottaa tosissaan!'},
                { name: ':five: Älä tägäile ylläpitoa', value: 'Voit tägäilä paskoja ylläpitäjiämme mikäli on tulipalokiire asia, joka ei voi odottaa paria minuuttia. Muutoin tägäilystä joutuu katkaisuhoitoon..'},
                { name: ':six: Älä postaa omia tai hoitosi nudeja', value: 'Jos olet oman elämäsi pornotähti niin jaathan nämä kuvat edes oikealle kanavalle 😉'},
            );

        if (message.member.hasPermission('MANAGE_CHANNELS')){
            message.channel.send(rules);
        } else {
            message.channel.send(`${message.author} mitähän sä äijjä koitat tehdä??`)

            const badlogmsg = new MessageEmbed()
                .setTitle(`Komennon esto [RULES]`)
                .setDescription(`**Käyttäjä:** ${message.author}\n**Kanava:** ${message.channel.toString()}\n**Koko viesti:** ${message}`)
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL());
                

            badlog.send(badlogmsg);
        }
    }
}