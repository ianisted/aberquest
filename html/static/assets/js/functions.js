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