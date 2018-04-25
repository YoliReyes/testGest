@extends('layouts/master')
@section('maincontent')

<!-- page content -->
<div class="right_col" role="main">
<h2 class="h2_new"> <i class="fa fa-plus-circle"></i> &nbsp; CREAR ENCUESTA </h2>

<div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12">  
    <div class="x_panel">
      <div class="x_title">
        <h2>{{$clave}} &nbsp;| &nbsp;<span id="titulo_autocarga">Titulo Encuesta</span></h2>
      <div class="clearfix"></div>
    </div>
    </br>
    <div class="x_content">

    <!-- Cuenta pasos -->
    <div id="wizard" class="form_wizard wizard_horizontal">
      <ul class="wizard_steps">

        <li class="pasos">
          <a href="#step-1">
            <span class="step_no">1</span>
            <span class="step_descr">Idiomas</span>
          </a>
        </li>

        <li class="pasos">
          <a href="#step-2">
            <span class="step_no">2</span>
            <span class="step_descr">General</span>
          </a>
        </li>

        <li class="pasos">
          <a href="#step-3">
            <span class="step_no">3</span>
            <span class="step_descr">Apartados</span>
          </a>
        </li>

        <li class="pasos">
          <a href="#step-4">
            <span class="step_no">4</span>
            <span class="step_descr">Preguntas</span>
          </a>
        </li>

        <li class="pasos">
          <a href="#step-5">
            <span class="step_no">5</span>
            <span class="step_descr">Resumen</span>
          </a>
        </li>
      </ul>
      <!-- fin Cuenta pasos -->

      <!-- PASO 1 - idiomas -->
      <div id="step-1">
        <div class="x_title">
          <h4 class="StepTitle">Idiomas</h4>
          <div class="clearfix"></div>
        </div>

        <p>Selecciona el o los idiomas en los que realizar la encuesta.</p>
        </br>

        <ul style="width:500px;margin:auto;" class="to_do">

          @foreach ($idiomas->all() as $idioma)
            <li>
              <p>
                <div class="icheckbox_flat-green">
                  <input id="paso1_{{$idioma->id_idioma}}" type="checkbox"  class="flat"  >
                </div> 
                &nbsp;&nbsp;{{$clave}} &nbsp;| &nbsp;{{strtoupper($idioma->descripcion)}}
              </p>
            </li>
          @endforeach

        </ul>
        </br>
      </div>
      <!-- FIN idiomas -->

      <!-- PASO 2 - idiomas -->
      <div id="step-2">
        <div class="x_title">
          <h4 class="StepTitle">Información General</h4>
          <div class="clearfix"></div>
        </div>
        <p>Datos generales de la encuesta ( Debes seleccionar al menos un idioma en el paso 1 ).</p>
        </br>
      <form class="form-horizontal form-label-left">
       <!-- start accordion -->
          <div class="accordion" id="accordion" role="tablist" aria-multiselectable="true">
               @foreach ($idiomas->all() as $idioma)

              <div id="paso2_{{$idioma->id_idioma}}" class="panel" hidden="hidden">
                <a class="panel-heading" role="tab" id="heading{{$idioma->id_idioma}}" data-toggle="collapse" data-parent="#accordion" href="#collapse{{$idioma->id_idioma}}" aria-expanded="true" aria-controls="collapse{{$idioma->id_idioma}}">
                  <h4 class="panel-title">{{$clave}} | {{$idioma->descripcion}}</h4>
                </a>
                <div id="collapse{{$idioma->id_idioma}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{$idioma->id_idioma}}">
                  <div class="panel-body">
                    <div class="form-group">
                      </br>
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Estado</label>
                          <div class="col-md-6 col-sm-6 col-xs-12">
                          <div id="gender" class="btn-group" data-toggle="buttons">
                            <label class="btn btn-default" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                              <input type="radio" name="gender" value="male"> &nbsp; Visible &nbsp;
                            </label>
                            <label class="btn btn-primary active" data-toggle-class="btn-primary" data-toggle-passive-class="btn-default">
                              <input type="radio" name="gender" value="female" checked=""> Oculto
                            </label>
                          </div>
                        </div>
                      </div>
                    
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Título <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="titulo{{$idioma->id_idioma}}" type="text" id="first-name" required="required" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Descripción<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" id="last-name" name="last-name" required="required" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>  
                </div>
              </div>
            </div>
        @endforeach
      </div>
</form>
      <!-- end of accordion -->

        <div id="step-3">
        <div class="x_title">
          <h4 class="StepTitle">Información General</h4>
          <div class="clearfix"></div>
        </div>
        <p>Datos generales de la encuesta.</p>
        </br>
        
        <ul class="to_do">

              @foreach ($idiomas->all() as $idioma)
                <li>
                  <p><div class="icheckbox_flat-green" ><input id="{{$idioma->id_idioma}}" type="checkbox" class="flat" ></div> {{$idioma->descripcion}}</p>
                </li>
              @endforeach

            </ul>
        </div>
        <div id="step-4">
          <h2 class="StepTitle">Step 4 Content</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <!-- End SmartWizard Content -->





      


    </div>
  </div>
</div>

</div>


</div>
<!-- /end page content -->

<!-- form wizard -->
<script type="text/javascript" src="js/wizard/jquery.smartWizard.js"></script>
  <!-- pace -->
  <script src="js/pace/pace.min.js"></script>
  <script type="text/javascript">
    $(document).ready(function() {
      // Smart Wizard
      $('#wizard').smartWizard();

      function onFinishCallback() {
        $('#wizard').smartWizard('showMessage', 'Finish Clicked');
        //alert('Finish Clicked');
      }
    });

    $(document).ready(function() {
      // Smart Wizard
      $('#wizard_verticle').smartWizard({
        transitionEffect: 'slide'
      });
    });
    
    function mostrarDivPaso1(idioma){
		console.log("hola");
		alert(idioma);

		if ( $('#paso1_es' ).is(':checked') )
		{
			$("pasos2_es").show(); 
		}else{
			$("pasos2_es").show(); 
		}
	}
  </script>
 
@stop()