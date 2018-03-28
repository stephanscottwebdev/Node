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
        username: "MelosBouncerBot",
        password: "oauth:up4butsn2ct5as1voont0xp4yakh16"
        },
    channels: ["meloman1ac"]
    
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
    if(message === "!twitter") {
        client.action("meloman1ac", "https://twitter.com/MeloStream");
    }
    if(message === "!discord") {
        client.action("meloman1ac", "https://discord.gg/ZB6Az");
    }
});
//display-name=TWITCH_UserNaME
client.on("ban", function(channel, username, reason) {
    client.action("meloman1ac", username + " has been banned for being a dick.")
});