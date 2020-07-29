module.exports = {
    name: 'remind-everyone',
    description: 'replies everyone in the server with a reminder',

    // what is going to be executed
    execute(message, args){
        message.channel.send({embed: {
            color: '#0099ff',
            author: {
              name: message.author.username,
              icon_url: message.author.avatarURL()
            },
            title: `Special Message from ${message.author.username}: EVERYONE PLEASE HYDRATE!`,
            url: "https://www.heart.org/en/healthy-living/fitness/fitness-basics/staying-hydrated-staying-healthy",
            description: "Everyone, please remember to drink at leaset 8 cups of water a day!",
            timestamp: new Date(),
          }
        });
    }
}