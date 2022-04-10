import { CommandInteraction, GuildMember, MessageEmbed } from "discord.js";
import { isNameOk } from "../myfunc";

/**
 * Shows info about user
* @param {CommandInteraction} interaction interaction object
 */
export async function info(interaction) {
  try {
    await interaction.deferReply({ ephemeral: false });

    /** @type {GuildMember} */
    let member = interaction.options.getMember('user');
    if (!member) return await interaction.editReply('No valid member passed');

    let diff = Math.abs(member.user.createdTimestamp - member.joinedTimestamp);
    const day = (24 * 3600 * 1000);
    let color = "DARK_GREEN";
    if (
      (diff < day) ||
      !isNameOk(member.displayName)
    ) color = "RED";

    let tag = member.user.tag;
    let id = member.id;
    let fields = [
      { name: 'User tag', value: tag },
      { name: 'User', value: `<@${id}>` },
      { name: 'User ID', value: id },
      { name: 'Joined', value: member.joinedAt.toString() },
      { name: 'Created at', value: member.user.createdAt.toString() }
    ];
    let embed = new MessageEmbed()
      .setColor(color)
      .setTitle(`Info o ${tag}`)
      .setThumbnail(member.user.avatarURL())
      .addFields(fields);
    await interaction.editReply({ embeds: [embed] });
  } catch (err) {
    console.log(err);
  }
}