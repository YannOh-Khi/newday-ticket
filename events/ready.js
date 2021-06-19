const Discord = require("discord.js");

module.exports = async bot => {
    console.log(`${bot.user.username} EST PRET`)
    var activities = ['NewDay RP'], i = 0;
    setInterval(() => bot.user.setActivity(`.aide | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),5000)
    
};
