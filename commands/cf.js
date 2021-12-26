const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setTitle("Test Başarılı!")
    client.commands.forEach(cmd => {
  
    });
    return message.channel.send(embed);
}



module.exports.help = {
    name: "cf",
    aliases: [],
    usage: "cf"
}
