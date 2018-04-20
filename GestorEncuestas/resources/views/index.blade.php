@extends('layouts/master')
@section('maincontent')

<!-- page content -->
<div class="right_col" role="main">
  
<h2 class="h2_new"> <i class="fa fa-database"></i> &nbsp; ENCUESTAS ACTUALES </h2>

<table id="init_table" class="table table-striped table-bordered">
  <thead>

    <tr>
      <th>Id Encuesta</th>
      <th>Idioma</th>
      <th>Nombre</th>
      <th>Fecha de creación</th>
      <th>Estado</th>
      <th class="" id="downl"></th>
    </tr>

  </thead>
  <tbody>

    <!-- Carga los datos de las encuestas existentes por -->
    @foreach ($encuestas->all() as $encuesta)

      <tr>
        <td>{{$encuesta->clave_encuesta}}</td>

        @if($encuesta->estado_encuesta==0)
          <td class='icons_table'><i title="Editar" class="flag-icon flag-icon-es"></i><span class="texto_oculto">{{$encuesta->idioma}}</span></td>
        @else
          <td class='icons_table'><i title="Editar" class="flag-icon flag-icon-gb"></i><span class="texto_oculto">{{$encuesta->idioma}}</span></td>
        @endif

        <td>{{$encuesta->titulo_encuesta}}</td>
        <td><?php echo date("d / m / Y",strtotime($encuesta->created_at)); ?></td>

        @if($encuesta->estado_encuesta==0)
        <td class="icons_table no_activa"><i title="Encuesta Oculta" class="fa fa-eye-slash"></i><span class="texto_oculto">{{$encuesta->estado_encuesta}}</span></td>
        @else
          <td class="icons_table activa"><i title="Encuesta Visible" class="fa fa-eye"></i><span class="texto_oculto">{{$encuesta->estado_encuesta}}</span></td>
        @endif
      
        <!-- acciones -->
        <td class="icons_table">
          <a><i title="Editar" class="fa fa-pencil"></i></a>
          <a><i title="Descargar PDF" class="icono fa fa-download"></i></a>
          <a><i title="Eliminar" class="fa fa-times-circle"></i></a>
        </td >
      </tr>
      
    @endforeach
  <tbody>
</table>
</div>
<!-- /end page content -->
@stop()