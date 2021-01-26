const Discord = require('discord.js');
const db = require('wio.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('709489466913325168') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
       .setColor('RANDOM')
       .setTitle(` **Moderasyon Yardım Menüsüne Hoşgeldiniz** `)
        .setDescription(`
     
                ▬▬▬▬▬▬▬▬ \`\`\Moderasyon Komutları\`\`\ ▬▬▬▬▬▬▬▬
**<a:715613352822571138:740220460285034506> s!çek ** Etiketlediğiniz kişiyi sesliye çekersiniz.

**<a:715613352822571138:740220460285034506> s!yavaşmod ** Yavaş Mod ayarlar.

**<a:715613352822571138:740220460285034506> s!ever-here-engel**  Sunucuda everyone ve here atılmasını engeller.

**<a:715613352822571138:740220460285034506> s!reklam-engel aç/kapat **  Sunucuda reklam ve linkleri engeller.

**<a:715613352822571138:740220460285034506> s!avatar**  avatar gösterir

**<a:715613352822571138:740220460285034506> s!başvuru**  Yetki başvurusu yaparsınız

**<a:715613352822571138:740220460285034506> s!temizle**  Belirlediğiniz kadar mesaj siler

**<a:715613352822571138:740220460285034506> s!otorol**  Otorol verir

**<a:715613352822571138:740220460285034506> s!afk**  AFK olursunuz

**<a:715613352822571138:740220460285034506> s!sa-as**  sa-as sistemini açar.

**<a:715613352822571138:740220460285034506> s!jail**  Etiketlediğiniz kişiyi jaile atar

**<a:715613352822571138:740220460285034506> s!unjail**  Jailden çıkarır

**<a:715613352822571138:740220460285034506> s!mute**  Etiketlediğiniz kişiyi yazılı kanallarda susturur

**<a:715613352822571138:740220460285034506> s!unmute**  Kişinin susturmasını açar.

**<a:715613352822571138:740220460285034506> s!vmute**  Etiketlediğiniz kişiyi sesli kanallarda susturur

**<a:715613352822571138:740220460285034506> s!ban**  Etiketlediğiniz kişiyi banlar

**<a:715613352822571138:740220460285034506> s!küfür-engel**  Sunucudaki küfür engellemelerini açar-kapatır

**<a:715613352822571138:740220460285034506> s!modlog**  Sunucudaki moderasyon kayıtlarını belirlediğiniz kanala gönderir.

**<a:715613352822571138:740220460285034506> s!kanal-koruma** Kanal Korumayı Açarsınız.

**<a:715613352822571138:740220460285034506> s!nuke ** Yazdığınız kanaldaki bütün mesajları siler.

   `)     
        
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yardım','help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
}
