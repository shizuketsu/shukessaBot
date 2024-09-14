const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const params = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter((e) => e.endsWith('.js'));

for (const file of commandFiles) {
    const command = require('./commands/' + file);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    client.user.setPresence({ status: 'idle' });
    console.log('Bot started at ' + client.user.tag);
});

client.on('messageCreate', (msg) => {
    if(msg.author.bot) return;
    if (!msg.content.startsWith(params.prefix) || msg.author.bot) return;

    const args = msg.content.slice(params.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    try {
        command.execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('command error');
    }
});

client.login(params.token);