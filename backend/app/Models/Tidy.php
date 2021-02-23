<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tidy extends Model
{
    use HasFactory;

    protected $fillable = [
        'naam', 'beschrijving', 'project_id'
    ];
}
