var tmi = require('tmi.js');

var options = {
    options: {
    debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "BouncerBot",
        password: "oauth:up4butsn2ct5as1voont0xp4yakh16"
        },
    channels: ["TwitchAntic"]
    
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
    if(message === "!twitter") {
        client.action("twitchantic", "https://twitter.com/TwitchAntic");
    }
    if(message === "!discord") {
        client.action("twitchantic", "https://discord.gg/ZB6Az");
    }
});
//display-name=TWITCH_UserNaME
client.on("ban", function(channel, username, reason) {
    client.action("TwitchAntic", username + " has been banned for being a jerky sauce face.")
});
