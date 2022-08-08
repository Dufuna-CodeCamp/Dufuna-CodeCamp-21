<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model{
    
    //our filable fields for the post method

    protected $fillable = ['name', 'email', 'created_at'];
    public $timestamps = false;

}

?>