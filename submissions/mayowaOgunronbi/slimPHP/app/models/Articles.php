<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Articles extends Model {
    protected $fillable = ['title', 'description', 'status', 'created_by', 'created_at'];
    public $timestamps = false;
}
