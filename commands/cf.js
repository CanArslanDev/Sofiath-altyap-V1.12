const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
    let randNo = Math.round(Math.random() * max + min)
        .setTitle("Test Başarılı!")
    client.commands.forEach(cmd => {
  
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "test",
    aliases: ["h","t"],
    usage: `test`
}
















const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
            let max = args[0]
      let min = args[1]

    let randNo = Math.round(Math.random() * max + min)

    .setTitle("Your random number is: ")
    .setDescription(randNo)
    .setColor("YELLOW")
    .setFooter("Random Number Generator")
    .setTimestamp()

    message.reply(embed)

    client.commands.forEach(cmd => {
  
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "cf",
    aliases: ["h","t"],
    usage: `cf`
}