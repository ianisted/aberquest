<?php

/*
 * Human abstract super class
 * Extend with male/female/etc.
 */

abstract class Human
    {

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
    private $observer_status;
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


    // Accessors - specifically defining these rather than using magic methods.

    public function get_id()
    {
        return $this->id;
    }

    public function get_title()
    {
        return $this->title;
    }

    public function get_first_name()
    {
        return $this->first_name;
    }

    public function get_last_name()
    {
        return $this->last_name;
    }

    public function get_full_name($string = false)
    {

        return ($string) ? "{$this->first_name} {$this->last_name}" :
                    array(
                        'first_name'=>$this->first_name ,
                        'last_name' => $this->last_name
                    );
    }

    public function get_nickname()
    {
        return $this->nickname;
    }

    public function get_gender()
    {
        return $this->gender;
    }

    public function get_height()
    {
        return $this->height;
    }

    public function get_weight()
    {
        return $this->weight;
    }

    public function get_sleep_status()
    {
        return $this->sleep_status;
    }

    public function get_observer_status()
    {
        return $this->observer_status;
    }

    public function get_arms()
    {
        return array(
                    'left_arm'=>$this->left_arm,
                    'right_arm'=>$this->right_arm
                );
    }

    public function get_legs()
    {
        return array(
                    'left_leg'=>$this->left_leg,
                    'right_leg'=>$this->right_leg
                );
    }

    public function get_eyes()
    {
        return array(
                    'left_eye'=>$this->left_eye,
                    'right_eye'=>$this->right_eye
                );
    }

    public function get_hands()
    {
        return array(
                    'left_hand'=>$this->left_hand,
                    'right_hand'=>$this->right_hand
                );
    }

    public function get_ears()
    {
        return array(
                    'left_ear'=>$this->left_ear,
                    'right_ear'=>$this->right_ear
                );
    }

    public function get_current_location(){
        return $this->current_location;
    }

    public function get_date_of_birth()
    {
        return $this->date_of_birth;
    }

    public function get_game_start_time()
    {
        return $this->game_start_time;
    }

    public function get_marital_status()
    {
        return $this->marital_status;
    }

    public function get_sexuality()
    {
        return $this->sexuality;
    }

    public function get_appearance()
    {
        return $this->appearance;
    }

    public function get_personality()
    {
        return $this->personality;
    }

    public function get_emotion()
    {
        return $this->emotion;
    }

    public function get_inventory()
    {
        return $this->inventory;
    }

    public function get_bank_details()
    {
        return $this->bank_details;
    }

    public function get_home_location()
    {
        return $this->home_location;
    }


}