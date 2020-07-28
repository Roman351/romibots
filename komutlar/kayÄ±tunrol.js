const Discord = require("discord.js");
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (client, message, args) => {
  
let pre = db.get(`presw_${message.guild.id}`)
if(!pre) return message.channel.send("Bu Sunucu **Emerald Sunucu Değil!**")

if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Sunucuyu Yönet\`" Yetkisine Sahip Olmalısın.`);

var rol = message.mentions.roles.first()  
if(!rol) return message.channel.send("HATA: Lütfen Bir `Rol` Etiketleyin")



message.channel.send("Tebrikler! Kayıt Olan Kullancılardan <@&"+rol+"> Rolünü Kaldırıcağım!")
db.set(`kayıtunrol_${message.guild.id}`,rol.id)



};

exports.help = {
  name: "kayıt-unrol",
};