<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class encuestas extends Model
{
   
    protected $fillable = ['titulo_encuesta','descripcion_encuesta','estado_encuesta','idioma','clave_encuesta','created_at','updatet_at'];

    protected $guarded = ['id_encuesta'];

   
}
