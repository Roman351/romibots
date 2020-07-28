const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client,message,args) => {
/* Hata embed
message.channel.send(
    new Discord.RichEmbed() 
.setColor('RED')
.setTitle('Hata :x:')
.setDescription(''))
*/
/* başarılı embed
message.channel.send(
    new Discord.RichEmbed() 
.setColor('GREEN')
.setTitle('Başarılı :white_check_mark:')
.setDescription(''))
*/

/*
db.set(`${message.guild.id}`)
db.delete(`${message.guild.id}`)
*/

const embed = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle('Kayıt yardım')
.setDescription('RomanBot Kayıt Sistemi.')
.addField('!!kayıt-unrol','Kayıt alınacak rolünü ayarlarsınız.')
.addField('!!kayıt-rol','Kayıt verilecek rolünü ayarlarsınız.')
.addField('!!kayıt-log', "Kayıt log kanalını ayarlarsınız.")
.addField('!!kayıt-kanal','Kayıt kanalını ayarlarsınız.')
.setTimestamp()
message.channel.send(embed)
}//komutlar/kapat.js oluştursana olmuyo bende


exports.help = {
name: 'kayıt-yardım'
}