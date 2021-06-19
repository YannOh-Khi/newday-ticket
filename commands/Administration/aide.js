const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: **Vous n'avez pas les autorisations pour ceci !** - `[MANAGE_MESSAGES]`");

if(message && message.deletable) message.delete().catch(e => {});

let embed = new Discord.MessageEmbed()
.setTitle(`Besoin d\'aide ❓ \n━━━━━━━━━━━━`)
.setColor(color.none)
.setFooter("Créer par : ☪ Y#0001")
.addField('> .setlogs [#Channel]', 'Met en place un système de logs pour les tickets.')
.addField('> .ticket', '*Mettre en place le message pour la création d\'un ticket.*')
.addField('> .close', '*Fermer un ticket.*')
.addField('> .close force', '*Fermer un ticket de force.*')
message.channel.send(embed).then(m => {
});

}

exports.help = {
    name: "aide",
    aliases: ['help', "bda"]
}