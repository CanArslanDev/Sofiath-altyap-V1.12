const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
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
