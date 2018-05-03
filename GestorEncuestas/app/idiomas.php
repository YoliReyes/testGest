<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class idiomas extends Model
{
    protected $fillable = ['id_orden','id_idioma', 'descripción'];
}
