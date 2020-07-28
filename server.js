const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const db = require("quick.db")
const app = express();

const fs = require("fs");

//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("HELO");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});

//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`${client.user.tag}! Aktif!`);
});

client.on("guildMemberAdd", (member,message) =>  {
 let kanal = db.get(`kayıtkanal_${member.guild.id}`)
 member.guild.channels.cache.find(channel => channel.id === kanal).send("<@"+member+"> Kayıt İşlemin Yarıda Kaldı Devam Etmek İçin `!!kayıtol` Yaz! 🎉")
 if (!kanal) return
  })


client.login(process.env.TOKEN);
