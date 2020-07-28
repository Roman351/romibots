const Discord = require("discord.js");
const db = require("quick.db")
const moment = require("moment")
exports.run = async (client, message, args) => {
  
var user = '';
        let member = message.mentions.users.first() || client.users.cache.get(args[0]);
        let author = message.author;
        if(member) {
             var user = member;
        } else {
             var user = author;
        }    
    member = message.guild.member(user);
   
      const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = moment.duration(millisCreated).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const userJoined = moment.duration(millisJoined).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")
 
    let ozeldurum = user.presence.activities[0] || 'Özel durumun yok'
        const Durum = user.presence.status;
        const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        const durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const darkcode = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL)
      .setTitle("Kullanıcı")
      .setColor(0xffb900)
      .addField("<a:RainbowOkGif:715603462779568201> Şu anda oynadığı oyun:", `${user.presence.game ? user.presence.game.name : 'Oynadığı Bir Oyun Yok'}`)
      .addField("<a:RainbowOkGif:715603462779568201> Custom Status:", ozeldurum.state || "Özel Durum Yok")
      .addField("<a:RainbowOkGif:715603462779568201> Durum:", durm)
      .addField("<a:RainbowOkGif:715603462779568201> Katılım tarihi [Sunucu]:", userJoined)
      .addField("<a:RainbowOkGif:715603462779568201> Katılım tarihi [Discord]:", daysCreated)
      .addField("<a:RainbowOkGif:715603462779568201> Kimlik:", ` ${user.id}`, false)
      .addField("<a:RainbowOkGif:715603462779568201>  Bot mu?", `${user.bot ? '\n Evet' : 'Hayır'}`, false)
      .addField("<a:RainbowOkGif:715603462779568201> Sahip olduğu roller:", message.guild.member(user).roles.cache.filter(s => s.name !== '@everyone').map(m => m.name).join(', '))
      .addField("<a:RainbowOkGif:715603462779568201>  Son gönderdiği mesajı:", user.lastMessage || 'Yok')
      .addField("<a:RainbowOkGif:715603462779568201>  Hesap Oluşturulma tarihi:", moment(user.createdAt).format('DD/MM/YYYY'))
      .setFooter(`${user.tag} tarafından istendi`, user.avatarURL())
      message.channel.send(darkcode)
};

exports.help = {
  name: "kullanıcıbilgi",
};
