<?php
	require_once('../config/config.php');
?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo APP_NAME; ?></title>
		
		<link href="assets/css/screen.css" rel="stylesheet" />
		
	</head>
	<body>
	
		<div id="terminal"><?php echo $version[0]; echo show_version(); ?>
			<ul id="output"></ul>
			<div class="cmd-panel">> <input type="text" class="cmd" /></div>
		</div>
		
		<script type="text/javascript">
			var appName = "<?php echo APP_NAME; ?>";
			var gameVersion = "<?php echo VERSION; ?>";
		</script>
		<script type="text/javascript" src="assets/js/jquery.min.js"></script>
		<script type="text/javascript" src="assets/js/functions.js"></script>
		<script type="text/javascript" src="assets/js/global.js"></script>
	</body>
</html>