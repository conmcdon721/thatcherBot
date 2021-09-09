const tmi = require('tmi.js');

const dotenv = require('dotenv');
dotenv.config();

const calculator = require('./time_logic');

const options = {
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.BOT_USERNAME,
		password: process.env.OAUTH_TOKEN
	},
	channels: [ process.env.CHANNEL_NAME ]
}

const client = new tmi.Client(options);

client.connect().catch(console.error);

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!isthatcherdead') {
		client.say(channel, `@${userstate.username}, ${calculator.calculator()}`);
	}
});