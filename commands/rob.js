exports.execute = async (client, message, args) => {
  let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  if(!target) return message.reply("Who are you trying to rob?")
  let messages = [
    `Yaşlı teyze polisi aradı ${target} yakalandın dostum!`,
    `Dızlamaya çalışırken komşulara yakalandın ${target} welcome to silivri!`,
    `Başarısız oldun ${target} düşdün mapus damlarına.`
  ]
   let amount = Math.floor(Math.random() * 50) + 10;
    let rob = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (rob.onCooldown) return message.reply(`Biraz yavaş ol,${rob.time.seconds} saniye daha bekle.`);
    if (rob.lost) return message.channel.send(messages[Math.floor(Math.random() * messages.length)]);
    else { 
      let x = client.eco.fetchMoney(target.id).amount - amount 
      
      client.eco.setMoney(target.id,parseInt(x))
      message.reply(`${target} kişisinden **${rob.amount}** 💶çaldın. **${rob.after}** 💶 Paran oldu!`);
    }
};

exports.help = {
    name: "rob",
    aliases: [],
    usage: "rob <user>"
}
