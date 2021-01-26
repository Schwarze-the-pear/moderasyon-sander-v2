const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setAuthor("İstatistiklerim")
.setThumbnail(client.user.avatarURL())
.addField("__**Bot Verileri**__", `>  👨‍💻   **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n>  💝  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n>  💡   **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `>  📌  **Bot Sahibi**  <@751009000669184041><@627002414767276042> \n\n> 🖲️ \ **Bot Geliştiricisi**  <@751009000669184041> \n> **ꁚ ๖ۣۜBy Schwarze#0001** \n`)
.addField("__**Sürümler**__", `>  📌  **Discord.js Sürümü** **|**  **v${Discord.version}** \n>  🏅  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__ ", `> **${client.ws.ping}** ms`,true)
.setColor("#ffd100")
message.channel.send(lordcreative)
}
exports.conf = {
  enabled: true,
guildOnly: true,
aliases: ['bot-bilgi','i','botbilgi'],
  permLevel: 0
}
exports.help = {
name: "istatistik",
}