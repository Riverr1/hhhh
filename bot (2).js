const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Death Shop`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on("message", message => {
 var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
var prefix = "!";//عدل البرفكس
if (message.content.startsWith(prefix + 'stream')) {
if (message.author.id !== '332549868218220556') return message.reply(' هذا الأمر فقط لصاحب البوت و شكراًً ')
    client.user.setGame(${argresult},"http://twitch.tv/S-F%22)
 message.channel.sendMessage(**${argresult}** : تم تغيير الستريمنق الى)
}

 });

client.login("token")