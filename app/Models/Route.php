<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Route extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'destination_city',
        'days',
        'budget',
        'rating',
    ];

    // Define the relationship to the User model
    public function user()
    {
        return $this->belongsTo(User::class); // Assuming 'user_id' is the foreign key
    }
}