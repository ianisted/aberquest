<?php
    
    
    function do_error($message = "Do What Now?")
    {
        array(
            'type'=>'error',
            'response_string' => $message
        );
    } 
    
    
    
    $return_array = array();

		if (!empty($_GET['connect']))
		{
			$user = $_GET['connect'];
			$return_array['type'] = "success";
      $return_array['response_string'] = "Connected. Welcome to Aberquest, {$user}.";
		}
		elseif (!empty($_GET['action']))
    {
        /* this is just a mockup, really we'll have different files here based on actions probably, each of which will have their own rules etc. */
        $action = $_GET['action'];
        $action = strtok($action, " ");
        $parameters = '';
        $token = $action;
        while ($token !== false)
        {
            $token = strtok(" ");
            $paramaters .= " {$token}";
        }
        $return_array['type'] = "success";
        $return_array['response_string'] = "You just asked me to {$action} on '{$paramaters}'";
        
    }
    else
    {
        $return_array = do_error();
    }
    
    echo json_encode($return_array);