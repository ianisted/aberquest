<?php

/*
 * Human abstract super class
 * Extend with male/female/etc.
 */

abstract class Human {
    
    //instance variables
    
    private $id;
    private $title;
    private $first_name;
    private $last_name;
    private $nickname;
    private $gender;
    private $height;
    private $weight;
    private $sleep_status;
    private $observer;
    private $left_arm;
    private $right_arm;
    private $left_leg;
    private $right_leg;
    private $left_eye;
    private $right_eye;
    private $left_hand;
    private $right_hand;
    private $left_ear;
    private $right_ear;
    private $current_location;
    private $date_of_birth;
    private $game_start_time;
    private $marital_status;
    private $sexuality;
    private $appearance;
    private $personality;
    private $emotion;
    private $inventory;
    private $bank_details;
    private $home_location;
    
    
    // Accessors
    public function get_gender()
    {
        return $this->gender;
    }
    
    private function set_gender($gender = '')
    {
        $this->gender = $gender;
    }
    
    public function get_height()
    {
        return $this->height;
    }
}