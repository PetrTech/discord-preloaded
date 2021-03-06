// You are now using discord preloaded!

/*

--------------==================DISCLAIMER==================--------------

PetrTech is NOT responsible for this being used for bad purposes like selfbots and more

--------------==================DISCLAIMER==================--------------

*/

/*
--------------==================INFO==================--------------

----IDE
Be sure to use visual studio code or any other IDE that supports javascript (not java)

----Installing
Be sure to install java
Be sure to install java JDK 8 or higher
Be sure to install node.js to your PC

----File structure setup
create a new file for example on your desktop, open the file and click the place where you have the filepath and type 'cmd' instead of whatever you have there. This will open a command prompt window in the file location.
Once you have opened command prompt in that location then type 'npm install discord.js'
after installing, you can close the window

----Discord bot setup
Be sure to have a discord bot client set up. Go to discord.com/developers. Click 'new application' and on the left go to bots and click 'create bot'. Edit it how you like
Be sure to copy the bot's ID on the bots developer page in the BOTS tab.
Paste the token in const TOKEN in the ''
To run the bot just turn on your command prompt and go to the bot's code directory and type: 'node .' (without the ''s) and hit enter. It should run the bot.
You can delete these comments after. (Delete only 3 - 37)

--------------==================INFO==================--------------
*/

// main variables
const DiscordAPI = require('discord.js');
const ConsoleAPI = require('console');
const DPLib = new DiscordAPI.Client();
const EULA = 'false';

const TOKEN = 'bot token';

// This function is called once the bot goes online. Please do not change anything and credit me for creating the Discord Preloaded library. I spent a lot of time on this.
DPLib.on('ready', () =>{

	if(EULA === 'true'){
		const getVersion = '1.0';
		const getName = "Discord Preloaded [Free!]";
		const getAuthor = "Made by: PetrTech";

		console.log(getName + " " + "Version: " + getVersion);
		console.log(getAuthor);
		console.log("The bot is now running.");
	} else {
		console.log("To start this bot be sure to change the value of eula to true. Read eula.txt too!");
		process.exit(1);
	}
})

DPLib.on('message', msg=>{
	//Enter your bot commands here
});

// logins to the bot with the TOKEN.
DPLib.login(TOKEN);