const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const { discorToken } = require('./config');

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}`);
});

// client.on('message', (msg) => {
//   if (msg.content === 'Hola') {
//     msg.reply('Hola!!');
//   }
// });

client.on('message', (msg) => {
  if (msg.content.toLocaleLowerCase() === 'hola') {
    msg.react('✌');
    const embed = new MessageEmbed()
      .setTitle('Welcome')
      .setColor('133b5c')
      .setDescription(`¡¡Enjoy the server!! ${msg.author}`);
    msg.channel.send(embed);
  }
});

client.login(discorToken);