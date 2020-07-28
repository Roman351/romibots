const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
const log = '714009202489557022'  
if(message.author.id !== "540594131316113418" ) return message.reply('Bu komutu kullanmak için yetkin yok!')

let roman = args[0]
let sunucu = args[1]


if(roman === "yap") {

message.channel.send("Bu Sunucu Artık **Emerald Suncu** :)")
db.set(`presw_${sunucu}`,'emerald')
//message.guild.channels.cache.find(channel => channel.id === log).send(message.guild.name+" Sunucusu Emerald Sunucu Oldu!")
}


if(roman === "çıkar") {

message.channel.send("Bu Sunucu Artık **Emerald Suncu** Değil.")
db.delete(`presw_${sunucu}`,'emerald')
//message.guild.channels.cache.find(channel => channel.id === log).send(message.guild.name+" Sunucusu Emerald Sunucu Değil!")
}

};

exports.help = {
  name: "emerald",
};
