import tmi from 'tmi.js';
import { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME } from './constants'
import { sentence } from './time_logic';

const options = {
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: BOT_USERNAME,
		password: OAUTH_TOKEN
	},
	channels: [ CHANNEL_NAME ]
}

const client = new tmi.Client(options);

client.connect().catch(console.error);

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!isthatcherdead') {
		client.say(channel, `@${userstate.username}, ${sentence}`);
	}
});
