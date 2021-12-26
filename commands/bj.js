const { MessageEmbed } = require("discord.js");
exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[0]
     if (!amount3 || isNaN(amount3)) return message.channel.send(`** ⛔${message.author.tag} | ** Lütfen Sayı Giriniz`);
  else{
   const embed = new MessageEmbed()
  .setTitle(`**${message.author.tag} | ${amount3} İle Blackjack Oynadı!**`)
  .setDescription(`**${message.author.tag}= ${amount3} **`)
  .setColor("GRAY")
  .setFooter("Do :?buy <item> to purchase the item.")
  return message.channel.send(embed);
  }
};

exports.help = {
    name: "bj",
    aliases: [],
    usage: "bj <amount> <amount2>"
}
