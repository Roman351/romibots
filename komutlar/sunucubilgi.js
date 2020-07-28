const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
  

let güvenlik = message.guild.verificationLevel || "Güvenlik Seviyesi Yok."
let ba = message.guild.fetchBans(bans => bans.cache.size) || "Ban Sayısı Yok."
let afk = message.guild.afkChannel || "AFK Kanalı Yok."
let ban = message.guild.fetchBans().then(bans => {                         //KAPALI ÇÜNKÜ SUNUCUDA YETKİSİ YOKSA YAZAMIYOR APTAL BOT (Ban Sayısı)


 let aylar = {
            "01": "Ocak",
            "02": "Şubat",
            "03": "Mart",
            "04": "Nisan",
            "05": "Mayıs",
            "06": "Haziran",
            "07": "Temmuz",
            "08": "Ağustos",
            "09": "Eylül",
            "10": "Ekim",
            "11": "Kasım",
            "12": "Aralık"
    }
  
  let günler = {
      "0": "Pazar",
      "1": "Pazartesi",
      "2": "Salı",
      "3": "Çarşamba",
      "4": "Perşembe",
      "5": "Cuma",
      "6": "Cumartesi",
    }
      var ban = message.guild.fetchBans();
 let guild = message.guild;

   const embed = new Discord.MessageEmbed()
   .setColor("15f153")
   .setAuthor(message.guild.name, message.guild.iconURL)
   .setThumbnail(message.guild.iconURL)
   .addField('İsim kısaltması:', message.guild.nameAcronym, true)
   .addField('Sunucu ID:', message.guild.id, true)  
  // .addField('Ana kanal:', message.guild.defaultChannel,true)
   .addField('AFK kanalı:', afk, true)
   .addField('AFK Zaman Aşımı', `${message.guild.afkTimeout} saniye`,true)
   .addField('Güvenlik Seviyesi:', güvenlik, true)
  .addField('Ban Sayısı', `**${bans.size}**`)                         //KAPALI ÇÜNKÜ SUNUCUDA YETKİSİ YOKSA YAZAMIYOR APTAL BOT (Ban Sayısı)
   .addField('Kanal Sayısı: ['+message.guild.channels.cache.size+']', `:sound: ${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} :speech_balloon: ${message.guild.channels.cache.filter(chan => chan.type === 'text').size}`, true)
   .addField('Üye Bilgisi : ['+message.guild.memberCount+']', `${client.emojis.cache.get('716177783025303614')}${message.guild.members.cache.filter(o => o.presence.status === 'offline').size} ${client.emojis.cache.get('716177783168041031')}${message.guild.members.cache.filter(o => o.presence.status === 'idle').size} ${client.emojis.cache.get('716177783507648522')}${message.guild.members.cache.filter(o => o.presence.status === 'online').size} ${client.emojis.cache.get('716177783352459305')}${message.guild.members.cache.filter(o => o.presence.status === 'dnd').size}`,false)
   .addField('Sunucu Bölgesi:', message.guild.region, true) 
   .addField('Rol sayısı',message.guild.roles.cache.size,true)
   .addField('Sahibi:', message.guild.owner+``+`\n(<@`+message.guild.ownerID+`>)`, true)//elleme
   .addField('Katılma Tarihi',  message.guild.owner.user.createdAt.toUTCString().replace("Nov", "Kasım").replace("Jan", "Ocak").replace("Feb", "Şubat").replace("Mar", "Mart").replace("Aug", "Ağustos").replace("Sep", "Eylül").replace("Oct", "Ekim").replace("Fri", "Cuma").replace("Mon", "Pazartesi").replace("Sun", "Pazar").replace("Sat", "Cumartesi").replace("Tue", "Salı").replace("Wed", "Çarşamba").replace("Thu", "Perşembe"), true)
   
   .addField('Oluşturma tarihi:', message.guild.createdAt.toDateString().replace("Nov", "Kasım").replace("Jan", "Ocak").replace("Feb", "Şubat").replace("Mar", "Mart").replace("Aug", "Ağustos").replace("Sep", "Eylül").replace("Oct", "Ekim").replace("Fri", "Cuma").replace("Mon", "Pazartesi").replace("Sun", "Pazar").replace("Sat", "Cumartesi").replace("Tue", "Salı").replace("Wed", "Çarşamba").replace("Thu", "Perşembe"), true)
  .setTimestamp()
//DarkCode
 //DarkCode
   const roller = new Discord.MessageEmbed()
   .setColor('15f153')
   .setDescription(`Tüm Roller: `+message.guild.roles.cache.filter(r => r.name).map(r => r).join(', '))
   //DarkCode
   const emojiler = new Discord.MessageEmbed()
   .setColor('15f153')
   .setDescription(`Tüm Emojiler:`+ message.guild.emojis.cache.map(e=>e.toString()).join(" "))
   message.channel.send({embed});
   message.channel.send(roller);
   message.channel.send(emojiler)
 });                         //KAPALI ÇÜNKÜ SUNUCUDA YETKİSİ YOKSA YAZAMIYOR APTAL BOT (Ban Sayısı)

};

exports.help = {
  name: "sunucubilgi",
};
