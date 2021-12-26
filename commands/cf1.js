exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let yazitura= ""
    let authordata = client.eco.fetchMoney(message.author.id) 
    if(authordata.amount<amount3)  return message.reply(`Girdiğiniz miktar paranızdan fazla olamaz`);
    else
    {
      if([Math.floor(amount2)]==0)
        {
          if([Math.floor(amount2)]==0) yazitura="Tura";
          else yazitura="Yazı";
          let money= amount3*2
            let beg = await client.eco.beg(client.ecoAddUser, money, { canLose: false, cooldown: 1, customName: "search" });
      if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
      return message.channel.send(`**${message.author.tag} | ** **${amount3}**💶 oynadı ve **${yazitura}** seçti! \n Para döndürülüyor...🪙 ve **${(money)}**💶 Kazandın!`);
        }
    else {
      message.channel.send("Kasa Açılıyor.").then(async msg => {
        setTimeout(() => {
          msg.edit("Kasa Açılıyor..");
        }, 1000);
    }
    }
    
    };

exports.help = {
    name: "cf1",
    aliases: [],
    usage: "cf1 <amount>"
}
