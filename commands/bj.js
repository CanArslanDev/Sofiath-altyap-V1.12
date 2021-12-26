const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 10)+2;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let azcok=""
     if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz.`);
  else{
    if(amount3>21 || amount3<1) return message.channel.send(`** ⛔${message.author.tag} | ** 21'den büyük ve 1'den küçük sayı giremessiniz.`);
    
    if([Math.floor(amount2)]==0) azcok="En Az Atan"
    else azcok="En Çok Atan"
   const embed = new MessageEmbed()
  .setTitle(`**${message.author.tag} | ${amount3} İle Blackjack Oynadı!**`)
  .setColor("GRAY")
  .setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧`)
  .setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= *Bekleniyor*💶 **`)
  
  return message.channel.send(embed).then(async msg => {
      setTimeout(() => {
         embed.setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= ${amount}💶 **`)
        return msg.edit(embed)
        }, 1000);
    setTimeout(() => {
      let amount4 = Math.floor(Math.random() * 10)+2;
         embed.setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= ${amount}💶 **`)
        return msg.edit(embed)
        }, 2000);
          });
  }
};

exports.help = {
    name: "bj",
    aliases: [],
    usage: "bj <amount> <amount2>"
}
