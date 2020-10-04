module.exports = {
    name: "ping",
    category: "info",
    description: "Latency",
    run: async (client, message, args) => {
        message.delete()
        const msg = await message.channel.send(`🏓 KWAAK...`);

        msg.edit(`🐤🏓Pong ${message.author}!\nViive on **${Math.floor(msg.createdAt - message.createdAt)}**ms`);
    }
}