module.exports = {
    name: 'poll',
    description: 'polls everyone in the server to see if they have all hydrated recently',

    // what will be executed
    execute(message, args) {
        message.channel.send("**Hi @everyone !\n:thinking: Have you hydrated in the past hour?**").then(messageReaction => {
            messageReaction.react("👍");
            messageReaction.react("👎");
        });
    }
}