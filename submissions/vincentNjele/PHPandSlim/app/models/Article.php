<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model as Eloquent;

class Articles extends Eloquent {

    //protected $dateFormat = 'Y-m-d H:i:s.u';

    protected $fillable = ['title','description','status','created_by','created_at'];
    public $timestamps = false;

}