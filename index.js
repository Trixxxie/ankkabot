const { Client, Collection, MessageEmbed } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
})

client.login(process.env.KEY)

client.on('ready', () => {
    console.log("KWAAK KWAAK!")
    client.user.setActivity(`${client.guilds.cache.size} servua`, { type: 'WATCHING' });
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} servua`, { type: 'WATCHING' });
    }, 60000); // Runs this every 60 seconds.
});

// KOMENTO JUTTUJA
client.on("message", async message => {
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    if (!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes: "%"
        };
    }
    let prefix = prefixes[message.guild.id].prefixes;
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
});