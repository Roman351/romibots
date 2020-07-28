const Discord = require("discord.js");
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (client, message, args) => {

let pre = db.get(`presw_${message.guild.id}`)
if(!pre) return message.channel.send("Bu Sunucu **Emerald Sunucu Değil!**")


if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Sunucuyu Yönet\`" Yetkisine Sahip Olmalısın.`);

var kanal = message.mentions.channels.first()  
if(!kanal) return message.channel.send("HATA: Lütfen Bir `Kanal` Etiketleyin")


message.channel.send("Tebrikler! Üyeler Artık <#"+kanal+"> Kanalında Kayıt Olabilecek!")
db.set(`kayıtkanal_${message.guild.id}`,kanal.id)

};

exports.help = {
  name: "kayıt-kanal",
};