const Discord = require('discord.js');

const client = new Discord.Client({disableEveryone: false});

const cron = require('cron');

// what must be in the beginning of command
const prefix = '~';



// allow us to use external js files
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
}



// bringing bot online
client.once('ready', () => {
    console.log('Ready for hydration!');
});



// daily scheduled reminder at 11am (doesn't work right now......awkward)
let scheduledMessage = new cron.CronJob('00 00 11 * * *', () => { // runs everyday at 11am
    let channel = yourGuild.channels.get('id'); // gets server id
    message.channel.send('This is your daily reminder to hydrate!');
});
scheduledMessage.start()



// reacting with given message
client.on('message', message => {
    // message must begin with prefix #
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(" ");

    // different commands here
    if (args.length == 1) { // if args is length 1
        if (!message.mentions.users.size && args[0].toLowerCase() === 'remind') {
            return message.reply('You need to mention a user to remind them to hydrate!');
        } else if (args[0].toLowerCase() === 'info'){ // WHAT YOU CAN DO WITH THE BOT
            client.commands.get('info').execute(message, args);
        } else if (args[0].toLowerCase() === 'ping') {
            client.commands.get('ping').execute(message, args);
            // message.channel.send('Hydrate!');
        } else if (args[0].toLowerCase() === 'help') {
            client.commands.get('help').execute(message, args);
        } else if (args[0].toLowerCase() === 'poll') {
            client.commands.get('poll').execute(message, args);
        }
    } else {
        if (args[0].toLowerCase() === 'remind' && args[1].toLowerCase() === 'everyone') { // REMIND EVERYONE
            client.commands.get('remind-everyone').execute(message, args);
        } else if (args[0].toLowerCase() === 'remind') { // REMIND SPECIFIC PEOPLE RIGHT NOW
            client.commands.get('remind-user').execute(message, args);
        }
    }
    

});









client.login('super secret client code');