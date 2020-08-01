module.exports = {
    name: 'remind-user',
    description: 'replies a specific user (the one mentioned) with a reminder',

    // what is going to be executed
    execute(message, args){
        const taggedUser = message.mentions.users.first();
        const interrogation = require('../datasets/hydrate-yes-no.json');
        const item = interrogation[Math.floor(Math.random() * interrogation.length)];

        const filter = response => {
	    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
        };

        // ask them if they have hydrated yet
        message.channel.send(`Hi <@` + `${taggedUser.id}` + `>!`);
        message.channel.send(item.question).then(() => {
            message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => { // if they answer yes
                    message.channel.send(`Yay! ${collected.first().author} has hydrated! We are all so happy for you, and I'm` +
                    ` sure your body is too! Keep it up!`);
                })
                .catch(collected => { // if they answer no, or does not reply
                    message.channel.send(`Oh dear! Looks like ${taggedUser.username} didn't respond or has not hydrated recently.` +
                    ` Sending reminder now...\n\n\n`);
                    message.channel.send({embed: {
                        color: '#0099ff',
                        title: `A reminder from ${message.author.username}!`,
                        description: `Hi, <@${taggedUser.id}>!\n` +
                        `On behalf of ${message.author.username}, please hydrate soon! Your body is waiting :smile:!`,
                    }
                    });
                });
        });

    }
}