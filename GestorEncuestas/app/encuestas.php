<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class encuestas extends Model
{
   
    protected $fillable = ['titulo_encuesta', 'clave_encuesta','descripcion_encuesta','estado_encuesta','idioma','created_at','updatet_at'];

    protected $guarded = ['id_encuesta'];

   
}
