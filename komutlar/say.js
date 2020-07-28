const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
const mapping = {
  " ": "   ",
  "0": "<:0:715558333486202940>",
  "1": "<:1:715558333490266112> ",
  "2": "<:2:715558333679009832> ",
  "3": "<:3:715558333620289666> ",
  "4": "<:4:715558333393797184> ",
  "5": "<:5:715558333603643462> ",
  "6": "<:6:715558333372956723> ",
  "7": "<:7:715558333922410589> ",
  "8": "<:8_:715558334006296646> ",
  "9": "<:10:715558333863690360>",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});


 let toplam = message.guild.memberCount;
  let sunucu = '**Toplam Kişi** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  
const embed = new Discord.MessageEmbed()
.setTitle(message.guild.name+' Sunucu İstatistikler')
.setColor('GREEN')
//.addField("Sunucudaki Ã¼ye sayÄ±sÄ±", message.guild.memberCount)
.setDescription('\n \n' + sunucu +'')
.setFooter(message.guild.name+' #EvdeKal!')
//.(online)
  message.channel.send(embed)
  /*message.channel.send('Online sayÄ±sÄ±: ' + 
    `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  );*/
};

exports.help = {
  name: "say",
};
