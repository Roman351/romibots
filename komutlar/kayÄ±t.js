const Discord = require("discord.js");
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (client, message, args) => {

let pre = db.get(`presw_${message.guild.id}`)
if(!pre) return message.channel.send("Bu Sunucu **Emerald Sunucu Değil!**")

  if(message.channel.id !== kanal) return message.channel.send('Yoo')  

let kayıtrol = db.get(`kayıtrol_${message.guild.id}`)
let kayıtunrol = db.get(`kayıtunrol_${message.guild.id}`)
let log = db.get(`kayıtlog_${message.guild.id}`)
let kanal = db.get(`kayıtkanal_${message.guild.id}`)
let isim = args[0]
let yaş = args[1]
if (!kayıtrol) return message.channel.send("HATA : `Kayıt Rol`'ü Belirlenmemiş!")
if(!kayıtunrol) return message.channel.send("HATA : `Kayıt Un Rol`'ü Ayarlanmamış!")
if(!log) return message.channel.send("HATA : `Log`'u Ayarlanmamış!")
if(!kanal) return message.channel.send("HATA : `Kayıt Olanacağı Yer`'i Ayarlanmamış!")
if(!isim) return message.channel.send("HATA : `İsmi`nizi Yazınız!")
if(!yaş) return message.channel.send("HATA : `Yaş`'ınızı Yazınız!")











    
//if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Sunucuyu Yönet\`" Yetkisine Sahip Olmalısın.`);






message.channel.send("Kayıt İşlemin Başarılı!")
message.guild.channels.cache.find(channel => channel.id === log).send("<@"+message.author.id+"> Kayıt İşlemin Tamamlandı 🎉")
message.member.roles.add(kayıtrol)
message.member.roles.remove(kayıtunrol)

message.member.setNickname(isim+" | "+yaş)



};

exports.help = {
  name: "kayıtol",
};