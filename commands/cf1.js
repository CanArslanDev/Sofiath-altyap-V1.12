exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let yazitura= ""
    let authordata = client.eco.fetchMoney(message.author.id) 
    if(authordata.amount<amount3)  return message.reply(`Girdiğiniz miktar paranızdan fazla olamaz`);
    else
    {
       if([Math.floor(amount2)]==0) yazitura="Tura";
          else yazitura="Yazı";
                message.channel.send(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor.🪙`).then(async msg => {
        setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor..🪙`);
        }, 1000);
                setTimeout(() => {
          msg.edit(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙`);
        }, 2000);
                          setTimeout(() => {
           if([Math.floor(amount2)]==0)
        {
         
          let money= amount3*2
            let beg = client.eco.beg(client.ecoAddUser, amount3, { canLose: false, cooldown: 1, customName: "search" });
      if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
      msg.edit(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙 ve **${(money)}**💶 Kazandın!`);
        }
    else {
      let beg = client.eco.setMoney(user.id, parseInt(auth));
     msg.edit(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙 ve maalesef **kaybettin :c**`);
    }
        }, 3000);
        })
     
    }
    
    };

exports.help = {
    name: "cf1",
    aliases: [],
    usage: "cf1 <amount>"
}
