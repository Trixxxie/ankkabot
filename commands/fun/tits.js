const {Discord, MessageEmbed} = require('discord.js');
const redditFetch = require('reddit-fetch');
module.exports = {
    name: "tissit",
    category: "fun",
    description: "Tissejä!",
    run: async (client, message, args) => {
        message.delete()

        if(message.channel.nsfw === false){
            message.reply(`Ööh.. täällä on lapsia.. \`kanava ei ole NSFW kanava\``)
            .then(m => m.delete({timeout: 5000}));
        } else {
            const redditFetch = require('reddit-fetch');

            redditFetch({
            
                subreddit: 'tits',
                sort: 'hot',
                allowNSFW: true,
                allowModPost: true,
                allowCrossPost: true,
            
            }).then(post => {
            const embed = new MessageEmbed()
            .setTitle(`🔞 r/tits`)
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