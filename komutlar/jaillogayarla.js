const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Sunucuyu Yönet\`" Yetkisine Sahip Olmalısın.`);

let kanal = message.mentions.channels.first()   
if(!kanal) return message.channel.send("HATA: `Kanal` Belirtilmedi.")



message.channel.send("Tebrikler! Kanal <#"+kanal+"> Olarak Ayarlandı")
db.set(`jaillog_${message.guild.id}`,kanal.id)



};

exports.help = {
  name: "jail-log-ayarla",
};
