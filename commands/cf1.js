exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let yazitura= ""
    let authordata = client.eco.fetchMoney(message.author.id) 
    if(authordata.amount<amount3)  return message.reply(`Girdiğiniz miktar paranızdan fazla olamaz`);
    else
    {
      return message.channel.send(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙 ve **${(money)}**💶 Kazandın!`);
      setTimeout(()=>
                 return message.edit("**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙 ve **${(money)}**💶 Kazandın!");
                )
      if([Math.floor(amount2)]==0)
        {
          if([Math.floor(amount2)]==0) yazitura="Tura";
          else yazitura="Yazı";
          let money= amount3*2
            let beg = await client.eco.beg(client.ecoAddUser, money, { canLose: false, cooldown: 1, customName: "search" });
      if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
      return message.channel.send(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙 ve **${(money)}**💶 Kazandın!`);
        }
    else return message.channel.send(`**${message.author.tag}** kaybettiniz :c`)
    }
    
    };

exports.help = {
    name: "cf1",
    aliases: [],
    usage: "cf1 <amount>"
}
