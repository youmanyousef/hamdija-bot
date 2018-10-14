var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var jArray = ['1','2','3']
//Configure logger settings.
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize:true
});

logger.level = 'debug';

//Initialize the bot
var bot = new Discord.Client({
    token: auth.token,
    autorun:true
});

bot.on('ready', function(evt){
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt){
    //Bot needs to know if it will execute a command.
    //Bot will listen for messages that start with an '!'.
    if(message.substring(0, 1) == '!'){
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd){
            //help
            case 'h':
                bot.sendMessage({
                    to: channelID,
                    message: '`!c` - Counter Jays Win'
                });
		bot.sendMessage({
                    to: channelID,
                    message: '`!t` - Jays Win'
                });
		bot.sendMessage({
                    to: channelID,
                    message: '`!hieu` - hieu rOAST'
                });
		bot.sendMessage({
                    to: channelID,
                    message: '`!justin` - justin rOAST'
                });
            break;
            //Justin
	    case 'justin':
				var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
				if (randomJ == jArray[0]){
                bot.sendMessage({
                    to: channelID,
                    message: 'Justin got **BODIED** ok?'
                });}
				if (randomJ == jArray[1]){
                bot.sendMessage({
                    to: channelID,
                    message: 'If you dont stfu, ill body you like justin.'
                });}
				if (randomJ == jArray[2]){
                bot.sendMessage({
                    to: channelID,
                    message: 'You do know what I did to Justin, right?'
                });}
            break;
            //Counter Jays
            case 'c':
                bot.sendMessage({
                    to: channelID,
                    message: 'Counter-Jays Win!'
                });
            break;
            //ORANGE!
	    case 'og':
		var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
		if (randomJ == jArray[0]){
                	bot.sendMessage({
                	    	to: channelID,
                    		message: 'oraAANGe!'
               		});}
		if (randomJ == jArray[1]){
			bot.sendMessage({
                	    	to: channelID,
                    		message: ':large_orange_diamond::large_orange_diamond:!'
               		});
		}
		if (randomJ == jArray[1]){
			bot.sendMessage({
                	    	to: channelID,
                    		message: 'OG! OG!'
               		});
		}
		}
            break;
			
            //Fortnite sayings
	    case 'fortnite':
		var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
		if (randomJ == jArray[0]){
               		bot.sendMessage({
                    	to: channelID,
                    	message: 'Fuck fortnite, I just Play For Fun.'
                	});
		}
		if (randomJ == jArray[1]){
               		bot.sendMessage({
                    	to: channelID,
                    	message: 'Incorrect, Gary. I have 23* solos wins.'
                	});
		}
		if (randomJ == jArray[2]){
               		bot.sendMessage({
                    	to: channelID,
                    	message: 'Only reason i have 1W% is because there noclippers, and hackers.'
                	});
		}
            break;
            //Jays (t)
            case 't':
                bot.sendMessage({
                    to: channelID,
                    message: 'Jays Win!'
                });
            break;
	    case 'hue':
                bot.sendMessage({
                    to: channelID,
                    message: 'I buy hue KFC🍗!'
                });
            break;
            // hieu
            case 'hieu':
				var randomJ = jArray[Math.floor(Math.random()*jArray.length)];
				if (randomJ == jArray[0])
                bot.sendMessage({
                    to: channelID,
                    message: '1-0, bodied that nigga.'
                });
				if (randomJ == jArray[1])
                bot.sendMessage({
                    to: channelID,
                    message: 'I made that bitch tap out:boxing_glove:.'
                });
				if (randomJ == jArray[2])
                bot.sendMessage({
                    to: channelID,
                    message: 'What a gay ass, he tried to pull down my pants.'
                });
            break;
            case 'frederica':
                bot.sendMessage({
                    to: channelID,
                    message: 'Ima marry her!'
                });
            break;
        }
    }
});
