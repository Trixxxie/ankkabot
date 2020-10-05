const {Discord, MessageEmbed} = require('discord.js');
const { stripIndents } = require("common-tags");
module.exports = {
    name: "randchar",
    category: "pathfinder",
    description: "Luo hahmon statsit",
    run: async (client, message, args) => {
        message.delete()

        //SUPER RUMA KOODI HYI HELVETTI -Trixxie
        
        let dice1 = Math.floor(Math.random()*(6))
        let dice2 = Math.floor(Math.random()*(6))
        let dice3 = Math.floor(Math.random()*(6))
        let dice4 = Math.floor(Math.random()*(6))

        let dice5 = Math.floor(Math.random()*(6))
        let dice6 = Math.floor(Math.random()*(6))
        let dice7 = Math.floor(Math.random()*(6))
        let dice8 = Math.floor(Math.random()*(6))

        let dice9 = Math.floor(Math.random()*(6))
        let dice10 = Math.floor(Math.random()*(6))
        let dice11 = Math.floor(Math.random()*(6))
        let dice12 = Math.floor(Math.random()*(6))

        let dice13 = Math.floor(Math.random()*(6))
        let dice14 = Math.floor(Math.random()*(6))
        let dice15 = Math.floor(Math.random()*(6))
        let dice16 = Math.floor(Math.random()*(6))

        let dice17 = Math.floor(Math.random()*(6))
        let dice18 = Math.floor(Math.random()*(6))
        let dice19 = Math.floor(Math.random()*(6))
        let dice20 = Math.floor(Math.random()*(6))

        let dice21 = Math.floor(Math.random()*(6))
        let dice22 = Math.floor(Math.random()*(6))
        let dice23 = Math.floor(Math.random()*(6))
        let dice24 = Math.floor(Math.random()*(6))

        var dicegroup1 = [dice1, dice2, dice3, dice4];
        var dicegroup2 = [dice5, dice6, dice7, dice8];
        var dicegroup3 = [dice9, dice10, dice11, dice12];
        var dicegroup4 = [dice13, dice14, dice15, dice16];
        var dicegroup5 = [dice17, dice18, dice19, dice20];
        var dicegroup6 = [dice21, dice22, dice23, dice24];


        const valmis1 = removeSmallest(dicegroup1)
        const valmis2 = removeSmallest(dicegroup2)
        const valmis3 = removeSmallest(dicegroup3)
        const valmis4 = removeSmallest(dicegroup4)
        const valmis5 = removeSmallest(dicegroup5)
        const valmis6 = removeSmallest(dicegroup6)

        const embed = new MessageEmbed()
            .setTitle(`${message.member.displayName} generoi statit (4d6)`)
            .setColor("#CC9966")
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