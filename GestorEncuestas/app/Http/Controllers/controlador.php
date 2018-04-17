<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\encuestas;
use Illuminate\Support\Facades\DB;


class controlador extends Controller
{
    public function cargaTablaInicial()
    {
        $encuestas = DB::table('encuestas')
                ->orderByRaw('clave_encuesta')
                ->orderByRaw('idioma DESC')
                ->get();

        return view ('index',compact('encuestas'));
    }
}

