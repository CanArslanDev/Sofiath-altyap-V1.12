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
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: false, cooldown: 1, customName: "search" });
    let beg2 = await client.eco.beg(client.ecoAddUser, amount2, { canLose: false, cooldown: 1, customName: "search" });
   const embed = new MessageEmbed()
  .setTitle("Store")
  .setDescription("content")
  .setColor("BLURPLE")
  .setFooter("Do :?buy <item> to purchase the item.")
  return message.channel.send(embed);
};

exports.help = {
    name: "bj",
    aliases: [],
    usage: "bj <amount>"
}
