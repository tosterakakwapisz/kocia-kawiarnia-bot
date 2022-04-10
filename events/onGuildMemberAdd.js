import { GuildMember, MessageEmbed } from 'discord.js';
import config from '../config.js';

/**
 * Handles guildMemberAdd event
 * @param {GuildMember} member added member
 */
export async function onGuildMemberAdd(member) {
  try {
    const channel = await member.guild.channels.fetch(config.newMemberChannel);
    let diff = Math.abs(member.user.createdTimestamp - member.joinedTimestamp);
    const day = (24 * 3600 * 1000);
    let color = (diff < day) ? "RED" : "DARK_GREEN";

    let fields = [
      { name: 'User tag', value: tag },
      { name: 'User', value: `<@${id}>` },
      { name: 'User ID', value: id },
      { name: 'Joined', value: member.joinedAt.toString() },
      { name: 'Created at', value: member.user.createdAt.toString() }
    ];
    let embed = new MessageEmbed()
      .setColor(color)
      .setTitle('Nowy użytkownik')
      .setThumbnail(member.user.avatarURL())
      .addFields(fields);
    channel.send({ embeds: [embed] });
  } catch (err) {
    console.log(err);
  }
}