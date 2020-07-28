const Discord = require("discord.js");
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Sunucuyu Yönet\`" Yetkisine Sahip Olmalısın.`);

const kişi = await message.mentions.members.first();
let rol = db.get(`rol_${message.guild.id}`)
let rol1 = db.get(`rol1_${message.guild.id}`)
if(!rol) return message.channel.send("HATA: `Verilecek Rol` Belirlenmemiş! **!!kd-rol**")
if(!rol1) return message.channel.send("HATA: `Alınacak Rol` Belirlenmemiş! **!!kd-kaldır**")
if(!kişi) return message.channel.send("HATA. `Şahıs` Bulunamadı")







message.channel.send("<:yes:710736585900949516> <@"+kişi+"> Başarıyla Doğrulandı!")

kişi.roles.add(rol)
kişi.roles.remove(rol1)

};

exports.help = {
  name: "doğrula",
};
