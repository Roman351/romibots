const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu Komutu Kullanabilmek İçin "\`Sunucuyu Yönet\`" Yetkisine Sahip Olmalısın.`);
  let mesaj = args.slice(1).join(' ') || "Kuralları Çiğneme!"
const kişi = await message.mentions.members.first();
if(!kişi) return message.channel.send("HATA: Birini Etiketlemen Gerek!")

message.channel.send("<:yes:710736585900949516> <@"+kişi+"> Başarıyla Uyarıldı! \n\n ```"+mesaj+"```")


kişi.send("**"+message.guild.name+"** Sunucusundan Uyarı Yedin! \n\n ```"+mesaj+"```")

};

exports.help = {
  name: "uyar",
};
