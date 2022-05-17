<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Admins extends Model {
    
    protected $dateFormat = 'Y-m-d H:i:s.u';
    protected $fillable = ['name','email_address','created_at'];
    public $timestamps = false;


}