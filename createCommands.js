import { ApplicationCommandManager, GuildApplicationCommandManager, Constants } from "discord.js";

/**
 * Creates commands for a guild or all guilds
 * @param {GuildApplicationCommandManager | ApplicationCommandManager} commands 
 */
export default function createCommands(commands) {
  const cmdTypes = Constants.ApplicationCommandOptionTypes;

  commands?.create({
    name: 'ping',
    description: 'Replies with pong',
  });

  commands?.create({
    name: 'info',
    description: 'Info about user',
    options: [{
      name: 'user',
      description: 'User (required)',
      required: true,
      type: cmdTypes.USER,
    }]
  });
}