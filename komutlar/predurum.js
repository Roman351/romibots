const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
let pre = db.get(`presw_${message.guild.id}`)
if(!pre) return message.channel.send("Bu Sunucu **Emerald Sunucu Değil!**")

message.channel.send("Bu Sunucu **Emerald Sunucu**")


};

exports.help = {
  name: "e-durum",
};
