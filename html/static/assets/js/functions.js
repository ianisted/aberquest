function logger(string,logID,status) {
	if ( typeof status !=='undefined') {
		status = ' class="' + status + '"';
	} else {
		status = '';
	}
	if ( typeof logID !=='undefined' && logID !== false) {
		//logID = ' id="' + logID + '"'
		if ($('#terminal ul li#logger-id-' + logID).length !== 0) {
			$('#terminal ul li#logger-id-' + logID).append(string);
		} else {
			$('#terminal ul').append('<li id="logger-id-' + logID + '"'  + status + '><span class="caller">' + arguments.callee.caller.name + '</span>' + string + '</li>');
		}
		
	} else { 
		$('#terminal ul').append('<li' + status + '><span class="caller">' + arguments.callee.caller.name + '</span>' + string + '</li>');
	};
	$('#terminal').scrollTop(900000);
}


var connection = false;
var history = [];


var Game = {
	init:function() {
		logger('Aberquest version: ' + gameVersion);
		
		Game.connect();
		
		$('.cmd').keyup(function(event) {
				switch(event.which) {
					case 13:
						Game.Cmd.input($('.cmd').val());
						break;
					case 27:
						$('.cmd').val('');
						break;
					case 38:
						Game.Cmd.History.previous();
						break;
					case 40:
						Game.Cmd.History.next();
						break;
					
				}	
		});
	},
	Cmd: {
		input:function(e) {
		
			var input = e;
					
			if (input.toLowerCase().indexOf("<script") >= 0) {
				logger("Not cool dude");
				$('.cmd').val('');
				return false;
			}
			
			history.push(input);
			
			var cmd = $('.cmd').val().split(' ')[ 0 ].toLowerCase();
			var string = input.substr(input.indexOf(" ") + 1);
			
			
			switch(cmd) {
				case "connect":
					Game.connect();
					break;
				case "h4x0r": case "hacktheplanet": case "hacker": case "l33t": case "1337":
					$('html').toggleClass('hacker');
					break;
				case "time": case "clock": case "date":
					logger('<span class="error"><strong>' + cmd + '</strong>: ' + $.now() + '</span>');
					break;
				case "print": case "echo":
					logger('<strong class="muted">' + string + '</strong>');
					break;
				case "clear": case "cls":
					$('#terminal ul').html('');
					break;
				case "history":
					historylog = "";
					$.each(history, function(i,val) {
						historylog = historylog + i + ': ' + val + "<br />";
					});
					logger(historylog);
					break;
				default:
					logger('<span class="error"><strong>' + cmd + '</strong>: command not found</span>');
			}
			
			$('.cmd').val('');
		
		},
		History: {
			previous:function() {
				logger("Previous command (coming soon)");
			},
			next:function() {
				logger("Next command (coming soon)");
			}
		}
		
		
	},
	connect:function() {
			logger('Connecting to server&hellip;');
		
			// Connect to server ;)
			
			if (connection) {
				logger('Connected. Welcome to Aberquest.');
			} else {
				logger('There was a problem connecting. Type <strong>connect</strong> to retry at any time.');
			}
			
		}
}