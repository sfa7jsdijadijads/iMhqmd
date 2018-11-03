const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});

client.on('ready', async() => {
var server = "497499938448605194"; 
var channel = "498890133450391574";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('yousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxcoyousif-jxco123456789')
    },305);
})


client.on('message', message => {
    if(message.content.startsWith('!say')) {
    if(message.author.id !== "501376527251013661") return;
    var args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(args);
    }
    });

client.on('message', message => {
    if(message.content.startsWith('!say')) {
    if(message.author.id !== "302536427235704832") return;
    var args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(args);
    }
    });

client.login(process.env.BOT_TOKEN);
