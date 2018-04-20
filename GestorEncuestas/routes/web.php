<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return 'login';
});

Route::get('/gestionarencuestas', 'controlador@cargaTablaInicial');

Route::get('/iniciocrearencuesta', 'controlador@iniciocrearencuesta');

Route::get('/iniciogestionarresultados', 'controlador@iniciogestionarresultados');



