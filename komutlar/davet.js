const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
  
.setColor("RANDOM")
.setAuthor(client.user.username, client.user.avatarURL)
.setDescription("<a:sprz:708205416546566154> [Beni Sunucuna Almak İçin Tıkla](https://discordapp.com/oauth2/authorize?client_id=702467591398228048&scope=bot&permissions=2146958847) | [Destek Sunucuma Gitmek İçin Tıkla](https://discord.gg/w2HqKuc)")

.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL)
  
  
  return message.channel.send(embed);

};

exports.help = {
  name: "davet",
};
