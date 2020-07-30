module.exports = {
    name: 'info',
    description: 'gives information on what commands can be done',

    // what is going to be executed
    execute(message, args){
        message.channel.send({embed: {
            color: '#0099ff',
            title: `About HydrateOrDiedrate`,
            description: "Hello! I am a bot that provides you and your friends a fun and interactive way to be reminded" +
            " to hydrate :sweat_drops: constantly!\n\n**My prefix is: ~**\nThat means, in order to call on me, you have to begin your command" +
            " with a ~ symbol!\n\nIf you need a list on what commands are available, please use **~help**.\n\nWant to know" +
            " what our awesome creator, Eugenia, is brewing up for the future me? [Click here](https://github.com/ezhang5/hydration-bot)" +
            " to learn more!",
            timestamp: new Date(),
          }
        });
    }
}