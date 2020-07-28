const Discord = require("discord.js");
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (client, message, args) => {
  
let pre = db.get(`presw_${message.guild.id}`)
if(!pre) return message.channel.send("Bu Sunucu **Emerald Sunucu Değil!**")

if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Sunucuyu Yönet\`" Yetkisine Sahip Olmalısın.`);

var kayıt = message.mentions.channels.first()  
if(!kayıt) return message.channel.send("HATA: Lütfen Bir `Kanal` Etiketleyin")




message.channel.send("Tebrikler Kayıt Log'u <#"+kayıt+"> Olarak Ayarladım!")

db.set(`kayıtlog_${message.guild.id}`,kayıt.id)


};

exports.help = {
  name: "kayıt-log",
};