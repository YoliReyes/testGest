<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\encuestas;
use App\idiomas;

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

    public function iniciocrearencuesta()
    {
        $clave= $this->generaIdEncuesta();
        $idiomas = DB::table('idiomas')
                   ->orderByRaw('id_orden ASC')
                   ->get();
        
        return view ('crearencuesta',compact('idiomas','clave'));
    }

    public function iniciogestionarresultados()
    {
       return "inicio gestionar resultados";
    }



    // generador de claves para encuestas
    public function generaIdEncuesta (){
        $string = "";
        $number= rand(1000,9999);
        $possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for ( $i = 0; $i < 3; $i++ ){
            $char = substr($possible, mt_rand(0, strlen($possible)-1), 1);
            $string .= $char;
        }

        $clave = $string . "_" . $number;
        
        return $clave;
    }
}

