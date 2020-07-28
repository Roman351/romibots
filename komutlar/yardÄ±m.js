const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()

.setTitle("RomanBot")
.setURL("https://discord.gg/w2HqKuc")
.setDescription("RomanBot'u Kullandığınız İçin Teşekkür Ederim.")
.setColor("BLUE")
.addField("!!jail-sistemi","Size Jail Sistemini Gösterir.")
.addField("!!diğer","Farklı Sistemleri Gösterir.")
.addField("!!d-sistemi","Doğrulama Sistemini Gösterir.")
.addField("✨ 3 GÜNLÜK EMERALD SUNUCULARINA ÖZEL !!kayıt-yardım","Kayıt Sistemini Gösterir.")




message.channel.send(embed)
};

exports.help = {
  name: "yardım",
};
