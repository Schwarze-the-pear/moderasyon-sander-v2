const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {


let embed = new Discord.MessageEmbed().setTitle(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter('Egehanss').setColor('GREEN')
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(embed.setDescription(`Bu komudu kullanabilmek için **"Kanalları Yönet"** yetkisine sahip olman gerekiyor.`))

  let miktar = Number (args[0])
 
if(isNaN(miktar)) return message.channel.send('<a:ReddetmekGif:798273324136267787>**Geçersiz sayı. 0 ile 6saat arasında girmeyi dene.**')
 
  message.channel.setRateLimitPerUser(miktar)
  message.react("<a:OnaylamakGif:798619150447673393>")
  message.channel.send('<a:OnaylamakGif:798619150447673393> Tamamdır! Yavaş Modu ayarladım.')

//Matessa

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yavaşmod','yavaş-mode','slow-mode'],
  permLevel: 0
};

exports.help = {
  name: 'yavaşmode',
  description: '',
  usage: ''
};
//Mattessa Botlist