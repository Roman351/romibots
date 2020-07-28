const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Sunucuyu Yönet\`" Yetkisine Sahip Olmalısın.`);

var rol = message.mentions.roles.first()   
if(!rol) return message.channel.send("HATA: Lütfen Bir `Rol` Etiketleyin")




message.channel.send("<:yes:710736585900949516> Rol Başarıyla <@&"+rol+"> Olarak Ayarlandı!")
db.set(`jailrol_${message.guild.id}`,rol.id)



};

exports.help = {
  name: "jail-rol-ayarla",
};
