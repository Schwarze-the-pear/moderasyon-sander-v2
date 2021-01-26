const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription(
      
"<a:ElSallayanPika:798573759556091914> Hey Merhaba ben Sander Sunucusunda Moderasyon Botuyum \n Owner olan Emir Benim yapımcımdan istediği için yapımcım beni yaptı. \n <a:yapmc:798646882658287617> Yapımcım <a:yapmc:798646882658287617>: <@751009000669184041>"
      )
    .setFooter("ꁚ ๖ۣۜBy Schwarze#0001")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};