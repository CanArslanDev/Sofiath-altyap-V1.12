exports.execute = async (client, message, args) => {
    let users = [
        "Pocket",
        "T-Shirt",
        "Zero's Databse",
        "Street"
    ];
    let amount = Math.floor(Math.random() * 200)+50;
    let amount2 = Math.floor(Math.random() * 200)/100;
    let amount3 = args[1]
    let beg = await client.eco.beg(client.ecoAddUser, amount, { canLose: false, cooldown: 1, customName: "search" });
    let beg2 = await client.eco.beg(client.ecoAddUser, amount2, { canLose: false, cooldown: 1, customName: "search" });
    if (beg.onCooldown) return message.reply(`Come back after ${beg.time.minutes} minutes & ${beg.time.seconds} seconds.`);
    return message.reply(`**${[Math.floor(beg2.amount)]}** Paranı **2'ye** **${amount}** katladın ve **${beg.amount}** 💸 Kazandın!. \n Şuanki Paran:**${beg.after}** 💸.`);
};

exports.help = {
    name: "cf",
    aliases: [],
    usage: "cf <amount>"
}
