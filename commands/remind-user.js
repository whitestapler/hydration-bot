module.exports = {
    name: 'remind-user',
    description: 'replies a specific user (the one mentioned) with a reminder',

    // what is going to be executed
    execute(message, args){
        const taggedUser = message.mentions.users.first();
        message.channel.send('A reminder for: ' + '<@' + `${taggedUser.id}` + '>\nPLEASE HYDRATE!');
    }
}