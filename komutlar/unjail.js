const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Sunucuyu Yönet\`" Yetkisine Sahip Olmalısın.`);
const kişi = await message.mentions.members.first();
let rol = db.get(`jailrol_${message.guild.id}`)
let log = db.get(`jaillog_${message.guild.id}`)
if(!rol) return message.channel.send("HATA: `Rol` Bulunamadı. **!!jail-rol-ayarla**")
if(!log) return message.channel.send("HATA: `Log` Bulunamadı. **!!jail-log-ayarla**")
if(!kişi) return message.channel.send("hata: `Şahıs` Bulunamadı.")

const embed = new Discord.MessageEmbed()
.setAuthor('RomanBot', 'https://media.discordapp.net/attachments/713874478681161758/715452827660714034/7f01c3656dc98afcf4f6404a9891b943.jpg?width=633&height=475')
.setDescription('<a:siren:710112422421069834> Biri Serbest Bırakıldı <a:siren:710112422421069834>')
.addField("Serbest Bırakılan Kişi",kişi)
.addField("Hakim","<@"+message.author.id+">")

message.channel.send("Başarıyla Hapiseten Çıkardım.")

kişi.roles.remove(rol)
message.guild.channels.cache.find(channel => channel.id === log).send(embed)


};

exports.help = {
  name: "un-jail",
};
