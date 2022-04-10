const { Message, MessageEmbed } = require("discord.js");

/**
 * Shows info about user
 * @param {Message} message
 */
module.exports = function info(message) {
  try {
    message.mentions.members.forEach(member => {
      let diff = Math.abs(member.user.createdTimestamp - member.joinedTimestamp);
      const day = (24 * 3600 * 1000);
      let color = (diff < day) ? "RED" : "DARK_GREEN";

      let fields = [
        { name: 'User ID', value: member.user.id },
        { name: 'Joined', value: member.joinedAt.toString() },
        { name: 'Created at', value: member.user.createdAt.toString() }
      ];
      let embed = new MessageEmbed()
        .setColor(color)
        .setTitle('Nowy użytkownik')
        .setDescription('Szczegóły:')
        .setThumbnail(member.avatarURL())
        .addFields(fields);
      message.reply({ embeds: [embed] });
    });
  } catch (err) {
    console.log(err);
  }
}