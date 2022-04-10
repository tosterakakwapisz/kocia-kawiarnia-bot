const { GuildMember, MessageEmbed } = require('discord.js');
const config = require('../config.json');

/**
 * Handles guildMemberAdd event
 * @param {GuildMember} member added member
 */
module.exports = async function onGuildMemberAdd(member) {
  try {
    const channel = await member.guild.channels.fetch(config.newMemberChannel);
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
    channel.send({ embeds: [embed] });
  } catch (err) {
    console.log(err);
  }
}