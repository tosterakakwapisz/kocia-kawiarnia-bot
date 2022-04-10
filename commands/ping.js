import { Message } from "discord.js";

/**
 * Plays ping pong with ppl
 * @param {Message} message
 */
export function ping(message) {
  message.reply('Pong!');
}