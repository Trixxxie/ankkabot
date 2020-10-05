const {Discord, MessageEmbed} = require('discord.js');
const redditFetch = require('reddit-fetch');
module.exports = {
    name: "rule34",
    category: "fun",
    description: "Meemi rule34 juddu",
    run: async (client, message, args) => {
        message.delete()

        if(message.channel.nsfw === false){
            message.reply(`Ööh.. täällä on lapsia.. \`kanava ei ole NSFW kanava\``)
            .then(m => m.delete({timeout: 5000}));
        } else {
            const redditFetch = require('reddit-fetch');

            redditFetch({
            
                subreddit: 'rule34',
                sort: 'hot',
                allowNSFW: true,
                allowModPost: true,
                allowCrossPost: true,
            
            }).then(post => {
            const embed = new MessageEmbed()
            .setTitle(`🔞 r/rule34`)
            .setDescription(post.title)
            .setURL(post.url)
            .setImage(post.url)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();

            message.channel.send(embed);

            })
        }
    }
}