exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
    let authordata = client.eco.fetchMoney(message.author.id) 
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: false, cooldown: 1, customName: "search" });
    if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    if(beg.before<amount3) 
    {
      return message.reply(`Girdiğiniz miktar paranızdan fazla olamaz`)
    }
    else
    {
      let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: false, cooldown: 1, customName: "search" });
      return message.reply(`Paranı **2'ye** katladın ve **${amount}**💸 Kazandın!. \n Şuanki Paran:**${beg.after}** 💸.\n kullanıcıdan alınan veri:**${amount3}** \n Şans: **${[Math.floor(amount2)]}** \n Kullanıcı: **${authordata.amount}**`);
    }
    
    };

exports.help = {
    name: "cf1",
    aliases: [],
    usage: "cf1 <amount>"
}
