const {Discord, MessageEmbed} = require('discord.js');
const api = require("imageapi.js");
module.exports = {
    name: "meme",
    category: "fun",
    description: "Meemi juddu",
    run: async (client, message, args) => {
        message.delete()

        let subreddits = [
            "meme",
            "memes"
        ]
        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]
        let img = await api(subreddit)
        const embed = new MessageEmbed()
            .setTitle(`Meemi r/${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setImage(img)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();

        message.channel.send(embed);
    }
}