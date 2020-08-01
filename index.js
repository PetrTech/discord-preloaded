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

----Discord bot setup
Be sure to have a discord bot client set up. Go to discord.com/developers. Click 'new application' and on the left go to bots and click 'create bot'. Edit it how you like
Be sure to copy the bot's ID on the bots developer page in the BOTS tab.
Paste the token in const TOKEN in the ''
To run the bot just turn on your command prompt and go to the bot's code directory and type: 'node .' (without the ''s) and hit enter. It should run the bot.
You can delete these comments after. (Delete only 3 - 17)

----Logging
To check the log files simply change their extension to ".txt" or ".log". Both will open in a text editor like a .txt

--------------==================INFO==================--------------
*/

// main variables
const DiscordAPI = require('discord.js');
const ConsoleAPI = require('console');
const DPLib = new DiscordAPI.Client();
const EULA = 'true';

const TOKEN = 'NzMyOTMxMTIzODAxMzU4NDQ4.Xw7xTQ.km-vX-Wr7GSzZv5fKb-oRbBgw3U';

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
	}
})

// logins to the bot with the TOKEN.
DPLib.login(TOKEN);