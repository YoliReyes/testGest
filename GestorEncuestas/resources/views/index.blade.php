@extends('layouts/master')
@section('maincontent')

<!-- page content -->
<div class="right_col" role="main">
  
<h2> <i class="fa fa-database"></i> &nbsp; Encuestas Actuales </h2>

<table id="init_table">
  <tr>
    <th>Id Encuesta</th>
    <th>Idioma</th>
    <th>Nombre</th>
    <th>Fecha de creación</th>
    <th>Estado</th>
    <th></th>
  </tr>
  
  <!-- Carga los datos de las encuestas existentes por -->
  @foreach ($encuestas->all() as $encuesta)

  <tr>
    <td>{{$encuesta->clave_encuesta}}</td>
    <td class='icons_table'>{{$encuesta->idioma}}<i title="Editar" class="flag-icon flag-icon-es"></i></td>
    <td>{{$encuesta->titulo_encuesta}}</td>
    <td>{{$encuesta->created_at}}</td>

    @if($encuesta->estado_encuesta==0)
    <td class="icons_table no_activa"><i title="Encuesta Oculta" class="fa fa-eye-slash"></i></td>
    @else
    <td class="icons_table activa"><i title="Encuesta Visible" class="fa fa-eye"></i></td>
    @endif

    
    <!-- acciones -->
    <td class="icons_table">
      <a><i title="Editar" class="fa fa-pencil"></i></a>
      <a><i title="Descargar PDF" class="icono fa fa-download"></i></a>
      <a><i title="Eliminar" class="fa fa-times-circle"></i></a>
    </td >
  </tr>
  @endforeach
  
</table>
</div>
<!-- /end page content -->
@stop()