const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {
  
if(message && message.deletable) message.delete().catch(e => {});

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: **Vous n'avez pas les autorisations pour bannir les utilisateurs !** - `[ADMINISTRATOR]`");

let embed = new Discord.MessageEmbed()
.setTitle(`Besoin d'ouvrir un ticket ?`)
.setColor(color.none)
.setImage("https://cdn.discordapp.com/attachments/854773321865625650/855132277503295558/Tickets.png")
.setThumbnail("https://cdn.discordapp.com/attachments/854773321865625650/855922615948279808/NEWDAY-removebg-preview.png")
.setFooter("")
.setDescription(`> Pour créer un ticket, réagissez avec **< 🎟️ >**`);
message.channel.send(embed).then(m => {
  m.react('🎟️');
});

}

exports.help = {
    name: "ticket",
    aliases: ['createticket', "t"]
}