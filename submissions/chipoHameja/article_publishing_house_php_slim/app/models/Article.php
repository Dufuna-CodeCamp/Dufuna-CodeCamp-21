<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Article extends Model {
    protected $fillable = ['title', 'description', 'created_at', 'created_by', 'status'];
    public $timestamps = false;
}