/**
 * Logger function, by Ian Isted
 * @string The string you'd like to output to the log
 * @logID A unique id to be given to your ouput. This allows you to extend the specific output later
 * @status Adds a class name to your output, allowing you style based on status types, etc.
 */

function logger(string,logID,status) {
	var terminal = '#terminal'; // ID of your output container. e.g. #terminal

	if ( typeof status !=='undefined') {
		status = ' class="' + status + '"';
	} else {
		status = '';
	}
	if ( typeof logID !=='undefined' && logID !== false) {
		//logID = ' id="' + logID + '"'
		if ($(terminal + ' ul li#logger-id-' + logID).length !== 0) {
			$(terminal + ' ul li#logger-id-' + logID).append(string);
		} else {
			$(terminal + ' ul').append('<li id="logger-id-' + logID + '"'  + status + '><span class="caller">' + arguments.callee.caller.name + '</span>' + string + '</li>');
		}
		
	} else { 
		$(terminal + ' ul').append('<li' + status + '><span class="caller">' + arguments.callee.caller.name + '</span>' + string + '</li>');
	};
	$(terminal).scrollTop(900000);
}


var connection = false; // Boolean to tell the system if a server connection has been made
var history = []; // User command history


var Game = {
	Player: {
		// Setup player properties
		name:"player"
	},
	init:function() {
		// Initialise the game, and begin listening for key presses.
	
		logger('Aberquest version: ' + gameVersion);
		logger('To get started enter your name.');

		
		$('.cmd').keyup(function(event) {
				switch(event.which) {
					case 13:
						if ($('.cmd').val() == "") {
							return false;
						}
						if (Game.Player.name == "player") {
							if ($('.cmd').val() == "player") {
								logger('Please enter your name to begin.');
								$('.cmd').val('');
							} else {
								Game.Player.name = $('.cmd').val();
								Game.connect();
								$('.cmd').val('');
							}
						} else {
							Game.Cmd.input($('.cmd').val());
						}
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
					if (string == "true") {
						Game.connect(true);
					} else {
						Game.connect();
					}
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
					Game.Cmd.send(e);
					break;
			}
				
			$('.cmd').val('');
		
		},
		send:function(e) {
			var xhr = new $.ajax({
			    type: 'POST',
			    url: 'http://aberquest.local/api/?action=' + e,
			    dataType: "json",
			    success: function(response, textStatus, XMLHttpRequest) {
			    	logger(response.response_string);
		       },
		       error: function(response, textStatus, XMLHttpRequest) {
		       	logger(response.response_string);
		       }
			 });
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
	connect:function(params) {
			// Connect to server
			
			logger('Connecting to Aberquest server&hellip;');

			
			var xhr = new $.ajax({
		    type: 'POST',
		    url: 'http://aberquest.local/api/?connect=' + Game.Player.name,
		    dataType: "json",
		    success: function(response, textStatus, XMLHttpRequest) {
		    	if (params == true) {
		    		logger('<pre>Connection details:\r\n--&gt; status: ' + textStatus + '\r\n--&gt; response: ' + response.response_string + '</pre>');
		    	} else {
		    		logger(response.response_string);
		    	}
	       },
	       error: function(response, textStatus, XMLHttpRequest) {
	       if (params == true) {
		    		logger('<pre>Connection details:\r\n--&gt; status: ' + textStatus + '\r\n--&gt; response: ' + response.response_string + '</pre>');
		    	} else {
		    		logger(response.response_string);
		    	}
	       	logger('There was a problem connecting. Type <strong>connect</strong> to retry at any time.');
	       }
		 });
		}
}