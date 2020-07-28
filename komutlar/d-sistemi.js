const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()

.setTitle("RomanBot")
.setURL("https://discord.gg/w2HqKuc")
.setDescription("RomanBot'u Kullandığınız İçin Teşekkür Ederim.")
.setColor("BLUE")
.addField("!!kd-rol","Doğrulama Rolünü Belirlersiniz.")
.addField("!!kd-kaldır","Un-Doğrulama Rolünü Belirlersiniz.")
.addField("!!doğrula","Kullanıcıyı Doğrularsınız.")




message.channel.send(embed)
};

exports.help = {
  name: "d-sistemi",
};
