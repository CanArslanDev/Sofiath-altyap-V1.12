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
    let kullaniciveri=args[1]
    let kullaniciveri2= 0
    let authordata = client.eco.fetchMoney(message.author.id) 
     if (!kullaniciveri || isNaN(kullaniciveri)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz.`);
  else{
    if(kullaniciveri>authordata.amount || kullaniciveri<1) return message.channel.send(`** ⛔${message.author.tag} | ** Kendi bakiyenizden büyük ve 1'den küçük sayı giremessiniz.`);
    if(amount3!="green" && amount3!="red" && amount3!="blue") return message.channel.send(`** ⛔${message.author.tag} | **Kartları **yanlış** seçtiniz :c`);
    if((amount3)=="green") kullaniciveri2="🟩"
    if((amount3)=="red") kullaniciveri2="🟥"
    if((amount3)=="blue") kullaniciveri2="🟦"
   const embed = new MessageEmbed()
  .setTitle(`**${message.author.tag} | ${kullaniciveri} İle Rulet Oynadı! \n-------------------------------------**`)
  .setColor("GRAY")
  .setFooter(`Roulette`)
  .setDescription(`🟩Gelme Şansı 42,5 , Kazanç:2X\n🟥Gelme Şansı 42,5 , Kazanç:2X\n🔷Gelme Şansı 15,0 , Kazanç:2X \n Senin Oynadığın:${kullaniciveri2}`)
 // .setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= *Bekleniyor*💶 **`)
  
  return message.channel.send(embed).then(async msg => {
      setTimeout(() => {
     /*    embed.setDescription(`**🃏${message.author.tag}= *${amount3}*💶  \n 🃏Rakip= ${amount}💶 **`)
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
     */   }, 2000); 
          });

  }
};

exports.help = {
    name: "roulette",
    aliases: ["spin"],
    usage: "roulette <green,red,yellow> <amount>"
}
