module.exports = {
    name: 'ping',
    description: 'replies with pong',

    // what is going to be executed
    execute(message, args){
        message.channel.send('pong!');
    }
}