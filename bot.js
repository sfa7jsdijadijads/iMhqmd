const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "510915761963794433";
var channel = "510915761963794439";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , S-nkoh , **')
    },305);
})

client.on('message', message => {
    if(message.content.startsWith('!say')) {
    if(message.author.id !== "449498327655120896") return;
    var args = message.content.split(' ').slice(1).join(' ');
    message.channel.send(args);
    }
    });
 
client.login(process.env.BOT_TOKEN);
