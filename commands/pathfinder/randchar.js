const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "randchar",
    category: "pathfinder",
    description: "Luo hahmon statsit",
    run: async (client, message, args) => {
        message.delete()

        var dicegroup1 = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        var dicegroup2 = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        var dicegroup3 = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        var dicegroup4 = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        var dicegroup5 = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
        var dicegroup6 = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];

        const valmis1 = removeSmallest(dicegroup1)
        const valmis2 = removeSmallest(dicegroup2)
        const valmis3 = removeSmallest(dicegroup3)
        const valmis4 = removeSmallest(dicegroup4)
        const valmis5 = removeSmallest(dicegroup5)
        const valmis6 = removeSmallest(dicegroup6)

        const embed = new MessageEmbed()
            .setTitle(`${message.member.displayName} generoi statit (4d6)`)
            .setColor(message.member.displayColor)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
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

function removeSmallest(numbers) {
    const smallest = Math.min.apply(null, numbers);
    const pos = numbers.indexOf(smallest);
    return numbers.slice(0, pos).concat(numbers.slice(pos + 1));
};