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
            title: `Special Message from ${message.author.username}: EVERYONE PLEASE HYDRATE :droplet:!`,
            url: "https://www.heart.org/en/healthy-living/fitness/fitness-basics/staying-hydrated-staying-healthy",
            description: `Hello everyone! ${message.author.username} here! Just wanted to remind all of you to hydrate soon!` +
            ` If you can, try to drink around 8 glasses of water at the end of today!\n\nIf you want to learn more about why you` +
            ` should hydrate regularly, click the link above!`,
            timestamp: new Date(),
          }
        });
    }
}