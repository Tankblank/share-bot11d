const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Hello 
Pls Join And Don't Leave
If you want money from inviting ppls join this discord
                               [ https://discord.gg/MTA4gTY ] 
Invite Privte For You ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
Hello 
Pls Join And Don't Leave
If you want money from inviting ppls join this discord
                               [ https://discord.gg/MTA4gTY ] 
Invite Privte For You ... [ ${member}  ]
**`)  
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN2);
