<?php
require(dirname(__FILE__)."/human.php");

class Npc extends Human {

    public function __construct($setup_array = array())
    {
        foreach($setup_array as $key => $value)
        {
            $this->$key = $value;
        }
    }
}