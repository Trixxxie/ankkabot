const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "trumpchar",
    category: "pathfinder",
    description: "Luo hahmon statsit (Trumpukun)",
    run: async (client, message, args) => {
        message.delete();
        if(!message.member.roles.cache.find(r => r.id ==="532991808112689152") || !message.member.roles.cache.find(r => r.id ==="545978914707734529")){
            message.reply("https://tenor.com/YUlz.gif");
        } else {

        //SUPER RUMA KOODI HYI HELVETTI -Trixxie

        var dicegroup1 = [5, 4, 5, 6];
        var dicegroup2 = [6, 6, 6, 6];
        var dicegroup3 = [5, 4, 5, 5];
        var dicegroup4 = [6, 5, 6, 6];
        var dicegroup5 = [5, 5, 6, 5];
        var dicegroup6 = [6, 6, 6, 4];


        const valmis1 = removeSmallest(dicegroup1)
        const valmis2 = removeSmallest(dicegroup2)
        const valmis3 = removeSmallest(dicegroup3)
        const valmis4 = removeSmallest(dicegroup4)
        const valmis5 = removeSmallest(dicegroup5)
        const valmis6 = removeSmallest(dicegroup6)

        const embed = new MessageEmbed()
            .setTitle(`${message.member.displayName} generoi statit (4d6)`)
            .setColor("#CC9966")
            .setFooter(`${message.member.displayName} #TrumpuKunStyle`, message.author.displayAvatarURL())
            .setTimestamp()
            .setDescription(stripIndents`\`${valmis1[0]}\` \`${valmis1[1]}\` \`${valmis1[2]}\` \`Yhteensä ${valmis1[0] + valmis1[1] + valmis1[2]}\`
                                        \`${valmis2[0]}\` \`${valmis2[1]}\` \`${valmis2[2]}\` \`Yhteensä ${valmis2[0] + valmis2[1] + valmis2[2]}\`
                                        \`${valmis3[0]}\` \`${valmis3[1]}\` \`${valmis3[2]}\` \`Yhteensä ${valmis3[0] + valmis3[1] + valmis3[2]}\`
                                        \`${valmis4[0]}\` \`${valmis4[1]}\` \`${valmis4[2]}\` \`Yhteensä ${valmis4[0] + valmis4[1] + valmis4[2]}\`
                                        \`${valmis5[0]}\` \`${valmis5[1]}\` \`${valmis5[2]}\` \`Yhteensä ${valmis5[0] + valmis5[1] + valmis5[2]}\`
                                        \`${valmis6[0]}\` \`${valmis6[1]}\` \`${valmis6[2]}\` \`Yhteensä ${valmis6[0] + valmis6[1] + valmis6[2]}\``);
        
        message.channel.send(embed);
        }
    }
}

function removeSmallest(numbers) {
    const smallest = Math.min.apply(null, numbers);
    const pos = numbers.indexOf(smallest);
    return numbers.slice(0, pos).concat(numbers.slice(pos + 1));
};