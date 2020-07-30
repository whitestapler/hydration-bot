module.exports = {
    name: 'help',
    description: 'gives user list of what can commands can be used',

    // what is going to be executed
    execute(message, args){
        message.channel.send({embed: {
            color: '#0099ff',
            title: `Commands Available`,
            description: "**~info**: see what I am, what I do, and additional information about me!\n" +
            "**~remind everyone**: remind everyone in the server that they need to hydrate!\n" +
            "**remind @user**: mention a user in place of @user, and I will send them a personalized message saying that" +
            " they need to hydrate!\n\n" +
            "Want a command made? Please DM Eugenia, and she will try to fulfill your request! Have fun!",
            timestamp: new Date(),
        }
    });
    }
}