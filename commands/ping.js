const { Message } = require("discord.js");

/**
 * Plays ping pong with ppl
 * @param {Message} message
 */
module.exports = function ping(message) {
  message.reply('Pong!');
}