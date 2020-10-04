const { Client, Collection, MessageEmbed } = require("discord.js");
const { config } = require("dotenv");

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
    const prefix = "-";

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
})

//VÄHÄN LOKI JUTTUJA
client.on("message", async message => {
    const badlog = client.channels.cache.get('761729516644728832');
    if(message.content.includes("!d bump")){
        message.delete({timeout: 500});
        const bumpmsg = new MessageEmbed()
            .setTitle(`Serveri boostattu!`)
            .setDescription(`**Käyttäjä:** ${message.author} boostasi kanavan!!! :tada:`)
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL());   
        badlog.send(bumpmsg);
    }
    if(message.member.id === '302050872383242240'){
        message.delete({timeout: 1000});
        message.channel.send(`:sponge:<:paskaa:761618140068184095> Miepä siivoon nämä paskat pois, kiitosta bumppaamisesta!`).then(msg => msg.delete({timeout: 5000}));
    }
    if(!message.member.roles.cache.has('761346707081920572') || !message.member.roles.cache.has('761352272918609981') || !message.member.roles.cache.has('761692716270223413') || !message.member.roles.cache.has('761721467091681281')){
        if(message.content.startsWith("https://") || message.content.startsWith("http://") || message.content.startsWith("wwww.")){
            if(!message.content.includes("discord.gg/")){
                const badlogmsg = new MessageEmbed()
                    .setTitle(`Käyttäjä jakoi linkin`)
                    .setDescription(`**Käyttäjä:** ${message.author}\n**Kanava:** ${message.channel.toString()}\n**Koko viesti:** ${message}`)
                    .setTimestamp()
                    .setThumbnail(message.author.displayAvatarURL());   
                badlog.send(badlogmsg);
            }
        }
    }
    if(message.content.includes("discord.gg/")){
        message.delete()
        const badlogmsg = new MessageEmbed()
            .setTitle(`Käyttäjä jakoi discord kutsulinkin :exclamation::hammer:`)
            .setDescription(`**Käyttäjä:** ${message.author}\n**Kanava:** ${message.channel.toString()}\n**Koko viesti:** ${message}`)
            .setTimestamp()
            .setThumbnail(message.author.displayAvatarURL());   
        badlog.send(badlogmsg);
    }
})

//EZ ANTI SPAM<3
const usersMap = new Map();

client.on("message", async message => {
    if(message.author.bot) return;

    if(usersMap.has(message.author.id)){
        const userData = usersMap.get(message.author.id);
        let msgAmount = userData.msgAmount;
        ++msgAmount;
        if(parseInt(msgAmount) === 5){
            const logChannel = client.channels.cache.get('761621293250379826');
            const logMsg = new MessageEmbed()
                .setColor("#810a1c")
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL())
                .setTitle(`:man_facepalming:${message.member.displayName} päätti spämmiä..`)
                .setDescription(`**Hiljenetty ukko:** ${message.author} 
                **- Kanava:** ${message.channel}
                **- ID:** ${message.member.id}`);
            logChannel.send(logMsg);
            logChannel.send(`:arrow_up:<@&761346707081920572>`);

            message.member.roles.add(message.member.guild.roles.cache.find(i => i.id === '761362208185253898'))
        } else {
            userData.msgAmount = msgAmount;
            usersMap.set(message.author.id, userData);
        }
    } else {
        usersMap.set(message.author.id, {
            msgAmount: 1,
            lastMessage: message,
            timer: null
        });
        setTimeout(() => {
            usersMap.delete(message.author.id);
        }, 5000);
    }
});

// TERVETULOvIESTI
client.on("guildMemberAdd", member => {
    member.roles.add(member.guild.roles.cache.find(i => i.id === '761361980387885097'))
    const welcomeChannel = client.channels.cache.get('761351945352904744');

    const welcomeMsg = new MessageEmbed()
        .setTitle(`<:paskaa:761618140068184095> Uusi jantteri, ${member.user.username} on saapunut!`)
        .setTimestamp()
        .setThumbnail(member.user.displayAvatarURL)
        .setDescription(`Tervetuloa paskanhajuiseen ohjelmointiyhteisöön, toivottavasti olet varautunut. Jos et niin käy lukasemassa edes <#761352046124597288> ensin, jonka jälkeen voit käydä vilkaisemassa muita kivoja paikkoja.`)
        .addFields(
            { name: '📯 Keskustelupalsta', value: 'https://irc.paskakoodi.cam' },
            { name: ':globe_with_meridians: Verkkosivut', value: 'https://paskakoodi.cam' },
        );

    welcomeChannel.send(welcomeMsg);

});