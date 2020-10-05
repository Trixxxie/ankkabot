const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
    name: "prefix",
    category: "info",
    description: "Prefix vaihto",
    run: async (client, message, args) => {

        message.delete()
        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

        if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("NO! KWAAK!");
        if(!args[0]) return message.reply("Mihin prefixiin vaihdetaan? Oikea käyttö: `-prefix <uusi prefix>`")

        prefixes[message.member.guild.id] = {
            prefixes: args[0]
        };

        fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
            if (err) console.log(err)
        });

        let prefixEmbed = new Discord.MessageEmbed()
            .setColor("FF9900")
            .setTitle("Prefix vaihdettu!")
            .setDescription(`Prefix vaihdettu ${args[0]}`)
            .setFooter(`Ankka`, client.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send(prefixEmbed);
    }
}