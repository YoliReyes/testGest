<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//importamos los modelos
use App\encuestas;

use Illuminate\Support\Facades\DB;


class inserciondatos extends Controller
{


    public function insertdata(Request $request)
    {
      
        //En request recibo los arrays enviados por ajax desde misfunciones.js

        $idiomas = $request ['idiomas'];
        $encuestas = $request['encuestas'];
        $apartados = $request['apartados'];
        $preguntas = $request['preguntas'];
        $respuestas = $request['respuestas'];

        //insertar datos tabla encuestas
        DB::table('encuestas')->insert($encuestas);
           
        
        //insertar datos tabla apartados
        DB::table('apartados')->insert($apartados);



        

        $a_errors=[];
        $a_success=[];

        if($request->ajax()){
            $data = $request->all();
            $a_success=["status"=>1,"datos"=>$data];
        }else{
            $a_errors=["status"=>0];
        }

        return json_encode(["errors"=>$a_errors,"success"=>$a_success]) ;
    }


}
