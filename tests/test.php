<?php 
    //turn on all error reports
    error_reporting(-1);
    
    require_once(dirname(__FILE__).'/../php/npc.php');

    $test_array = array(
                        "id" => "test",
                        "first_name" => "First",
                        "last_name" => "Last",
                        "nickname" => "Testy",
                        "gender" => "M",
                        "height" => "180",
                        "weight" => "180",
                        "sleep_status" => false, //asleep/awake?
                        "observer_status" => false, //active/observing
                        "left_arm" => true,
                        "right_arm" => true,
                        "left_leg" => true,
                        "right_leg" => true,
                        "left_eye" => true,
                        "right_eye" => true,
                        "left_hand" => true,
                        "right_hand" => true,
                        "left_ear" => true,
                        "right_ear" => true,
                        "current_location" => array('x'=>0,'y'=>0),
                        "date_of_birth" => array("day"=>1, "month"=>1, "year" => 2013),
                        "game_start_time" => time(),
                        "marital_status" => "single",
                        "sexuality" => "straight",
                        "appearance" => "handsome",//array of [Appearances class] properties?
                        "personality" => "cheery",//array of [Peronsalities class] properties or integer amount?
                        "emotion" => "",//settable or defined via calculations on events?
                        "inventory" => array(), //nothing held
                        "bank_details" => array("account_number"=>"1"),
                        "home_location" => array('x'=>2,'y'=>2),
                    );
            
    $testy = new Npc($test_array);
    $testy_methods = get_class_methods($testy);
?>

<pre>
    <?php print_r($testy); ?>
    <?php print_r($testy_methods); ?>
</pre>