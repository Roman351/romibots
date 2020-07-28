const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
const embed = new Discord.MessageEmbed()

.setTitle("RomanBot")
.setURL("https://discord.gg/w2HqKuc")
.setDescription("RomanBot'u Kullandığınız İçin Teşekkür Ederim.")
.setColor("BLUE")
.addField("!!jail","Kullanıcıyı Jail'e Atarsınız.")
.addField("!!un-jail","Kullanıcıyı Jailden Çıkartırsınız.")
.addField("!!jail-rol-ayarla","Jail Rolünü Belirlersiniz.")
.addField("!!jail-log-ayarla","Jail Logunu Belirlersiniz.")





message.channel.send(embed)
};

exports.help = {
  name: "jail-sistemi",
};