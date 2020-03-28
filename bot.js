const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("607685660316270639")
setInterval(function() {
channel.send(`ana mb bot spaam ana mb bot spaam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);