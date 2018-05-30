<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class inserciondatos extends Controller
{


    public function search(Request $request)
    {
        $a_errors=[];
        $a_success=[];
        if($request->ajax()){
            //$dato=$request->input('search'); //Aqui obtienes el valor del input ajax
            $data = $request->all();
            //return json_encode($data) ;

            //return Response::json($dato);

            $a_success=["status"=>1,"datos"=>$data];
        }else{
            $a_errors=["status"=>0];
        }

        return json_encode(["errors"=>$a_errors,"success"=>$a_success]) ;
    }



}
