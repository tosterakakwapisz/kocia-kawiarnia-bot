import { CommandInteraction } from "discord.js";

/**
 * Plays ping pong with ppl
 * @param {CommandInteraction} interaction
 */
export function ping(interaction) {
  interaction.reply({
    content: 'Pong!', ephemeral: true
  });
}