# You are now using discord preloaded!

#--------------==================DISCLAIMER==================--------------
#PetrTech is NOT responsible for this being used for bad purposes like selfbots and more
#--------------==================DISCLAIMER==================--------------

#--------------==================INFO==================--------------
#----IDE
#Be sure to use visual studio code or any other IDE that supports python
#----Installing
#Be sure to install python 3
#----File structure setup
#create a new file for example on your desktop, open the file and click the place where you have the filepath and type 'cmd' instead of whatever you have there. This will open a command prompt window in the file location.
#Once you have opened command prompt in that location type 'python3 -m poetry init --no-interaction'
#The next command to type is: 'python3 -m poetry add discord.py'
#after installing, you can close the window
#----Discord bot setup
#Be sure to have a discord bot client set up. Go to discord.com/developers. Click 'new application' and on the left go to bots and click 'create bot'. Edit it how you like
#Be sure to copy the bot's ID on the bots developer page in the BOTS tab.
#Paste the token in the 42nd line in the ''
#To run the bot just turn on your command prompt and go to the bot's code directory and type: 'node .' (without the ''s) and hit enter. It should run the bot.
#You can delete these comments after. (Delete only 3 - 23)
#--------------==================INFO==================--------------

#importing packages
import discord
from discord.ext import commands

client = commands.Bot(command_prefix = 'prefix')

#Please leave these credits here. I spent a lot of time coding this. I don't even know python that much
@client.event
async def on_ready():
	print('Discord Preloaded version 1.0')
	print('Made by: PetrTech')
	print('The bot is now running')

@client.command()
async def commandname(ctx):
	#what the command does here
	await ctx.send('reply!')

client.run('')
