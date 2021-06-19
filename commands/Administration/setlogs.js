const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const dateFormat = require("dateformat");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: **Vous n'avez pas les autorisations pour définir les logs !** - `[ADMINISTRATOR]`");

let channel = message.mentions.channels.first();
if(!channel || channel.type !== "text") return functions.errorEmbed(message, message.channel, "Veuillez entrer <#...> un salon texte.");

let channelFetched = message.guild.channels.cache.find(c => c.id === channel.id);
if(!channelFetched || channelFetched.type !== "text") return functions.errorEmbed(message, message.channel, "Veuillez entrer <#...> un salon texte.");

let embed = new Discord.MessageEmbed()
.setAuthor(`✅ | Salon Définit`)
.setColor(color.none)
.setTimestamp()
.setFooter(`Système de Ticket | LOGS`, bot.user.displayAvatarURL())
.addField(`Salon définit`, channelFetched, true)
.addField(`Définit par`, message.author, true)
.addField(`Date`, `\`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``, true);

db.set(`logs_${message.guild.id}`, channelFetched.id);
channelFetched.send(message.author, {embed: embed});
functions.successEmbed(message, message.channel, `Le système de \`logs\` a été défini dans le salon : ${channelFetched}`);

}

exports.help = {
    name: "setlogs",
    aliases: ['logs', 'channel']
}