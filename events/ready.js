const Discord = require('discord.js');
const prefix = process.env.PREFIX;

module.exports = client => {
client.user.setActivity('RomanBot ✨', {type: 'WATCHING'}); 
  //Oynuyor: 'PLAYING'
  //İzliyor: 'WATCHING'
  //Dinliyor: 'LISTENING'
  //Yayında: {url: 'https://twitch.tv/JhuZang', type: 'STREAMING'}
}