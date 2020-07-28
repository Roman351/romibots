const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()

.setTitle("RomanBot")
.setURL("https://discord.gg/w2HqKuc")
.setDescription("RomanBot'u Kullandığınız İçin Teşekkür Ederim.")
.setColor("BLUE")
.addField("!!uyar","Kullanıcıyı Uyarırsınız.")
.addField("!!kullanıcıbilgi","Kullanıcı Bilgilerini Gösterir.")
.addField("!!say","Sunucuda Olan Kullanıcıların Sayısını Gösterir.")
.addField("!!sunucubilgi","Sunucunun Bilgilerini Gösterir.")
.addField("!!davet","Botun Davet Linki.")


message.channel.send(embed)
};

exports.help = {
  name: "diğer",
};
