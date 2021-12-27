const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let amount = Math.floor(Math.random() * amount3);
    let kullaniciveri=args[1]
    let amountfinish= 0
    let authordata = client.eco.fetchMoney(message.author.id) 
     if (!kullaniciveri || isNaN(kullaniciveri)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz.`);
  else{
    if(kullaniciveri>authordata.amount || kullaniciveri<1) return message.channel.send(`** ⛔${message.author.tag} | ** Kendi bakiyenizden büyük ve 1'den küçük sayı giremessiniz.`);
    if(amount3!="green" || amount3!="red" || amount3!="blue") return message.channel.send(`** ⛔${message.author.tag} | ** Kendi bakiyenizden büyük ve 1'den küçük sayı giremessiniz.`);
    if([Math.floor(amoun3)]=="green") azcok="🟥"
    else azcok="En Çok Atan"
   const embed = new MessageEmbed()
  .setTitle(`**${message.author.tag} | ${amount3} İle Rulet Oynadı! \n🟩🟥🟦🟩🟥🟦🟩🟥🟦🟩🟥🟦🟩🟥🟦**`)
  .setColor("GRAY")
  .setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧`)
  .setDescription(`**🟩Gelme Şansı 42,5 , Kazanç:2X\n🟥Gelme Şansı 42,5 , Kazanç:2X\n\n🟦Gelme Şansı 15 , Kazanç:2X \n Senin Oynadığın:**`)
 // .setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= *Bekleniyor*💶 **`)
  
  return message.channel.send(embed).then(async msg => {
      setTimeout(() => {
         embed.setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= ${amount}💶 **`)
        return msg.edit(embed)
        }, 1000);
    setTimeout(() => {
      let amount4 = Math.floor(Math.random() * amount3);
      let amountfinish= Math.floor(amount+amount4)
         embed.setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= ${amountfinish}💶 **`)
        if(amountfinish==amount3) {
                  embed.setColor("YELLOW")
            embed.setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧, Rakip Kazandı :(`)
          }
          else if(amountfinish>amount3)
        {
          embed.setColor("RED")
          let data2= client.eco.removeMoney(client.ecoAddUser, parseInt(amount3));
          embed.setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧, Rakip Kazandı :(`)
        }
      else
        {
          embed.setColor("GREEN")
          let data2= client.eco.addMoney(client.ecoAddUser, parseInt(amount3));
          embed.setFooter(`${azcok} 𝙆𝙖𝙯𝙖𝙣ı𝙧, Tebrikler ,Kazandın!`)
        }
    
        return msg.edit(embed)
        }, 2000);
          });

  }
};

exports.help = {
    name: "roulette",
    aliases: ["spin"],
    usage: "roulette <green,red,yellow> <amount>"
}
