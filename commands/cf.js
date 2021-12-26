module.exports.execute = async (client, message, args) => {
    let amount = Math.floor(Math.random() * 500) + 100;
    let addMoney = client.eco.daily(client.ecoAddUser, amount);
    return message.reply(`You have claimed **${addMoney.amount}** 💸 as your daily credit & now you have **${addMoney.after}** 💸.`);
};

module.exports.help = {
    name: "daily",
    aliases: [],
    usage: "cf"
}
