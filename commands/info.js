module.exports = {
    name: 'info',
    description: 'gives information on what commands can be done',

    // what is going to be executed
    execute(message, args){
        message.channel.send({embed: {
            color: '#0099ff',
            title: `How to call me to remind you and your friends to hydrate!`,
            description: "My prefix is: #\nThat means, in order to call on me, you have to begin your command with a #!\n\n"
            + "info: to see what commands you can write to call me!\nremind everyone: to remind everyone in the server that "
            + "they need to hydrate!\nremind USER: replace USER with a mention, and you'll be able to remind them"
            + " specifically that they need to hydrate!\nremind USER TIME: (work in progress)\npoll: (work in progress)",
            timestamp: new Date(),
          }
        });
    }
}