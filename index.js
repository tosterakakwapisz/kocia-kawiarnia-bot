import { Client, Intents } from 'discord.js';
import { info } from './commands/info.js';
import { ping } from './commands/ping.js';
import { onGuildMemberAdd } from './events/onGuildMemberAdd.js';
import config from './config.js';
import createCommands from './createCommands.js';

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.GUILD_SCHEDULED_EVENTS
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const guild = client.guilds.cache.get(config.guildID);
  let commands = (guild) ? guild.commands : client.application?.commands;
  createCommands(commands);
});

client.on('interactionCreate', interaction => {
  if (!interaction.isCommand()) return;

  switch (interaction.commandName) {
    case 'ping': ping(interaction); break;
    case 'info': info(interaction); break;
    default: console.log(`Couldn't recognize command`, interaction); break;
  }
});

client.on('guildMemberAdd', onGuildMemberAdd);

client.login(config.token);
