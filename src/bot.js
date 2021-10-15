const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require('dotenv').config();

client.on('ready', () => {
    console.log('Ready!');
    client.user.setPresence({ activities: [{ name: 'with myself' }], status: 'idle' });
});

(async () => {
    client.login(process.env.token);
})();