@extends('layouts/master')
@section('maincontent')


<!--================================================================================================-->

<!-- Inicio HTML || Cuerpo de la página -->

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

        <!-- Contenido Cuenta pasos - cambiar x este y este dejarlo para las preguntas;https://codepen.io/AlexRebula/pen/bpMwjK-->
        <div id="wizard" class="form_wizard wizard_horizontal">

          <!-- Barra Cuenta pasos -->
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
          <!-- fin Barra Cuenta pasos -->

<!--================================================================================================-->

          <!-- PASO 1 - idiomas -->

          <div id="step-1">
            <div class="x_title">
              <h4 class="StepTitle">Idiomas</h4>
              <div class="clearfix"></div>
            </div>

            <p>Selecciona el o los idiomas en los que realizar la encuesta.</p> </br>
            
            
            <!-- Crea por cada idioma existente en la base un check con sus eventos -->
            <div id="idiomaencuesta">
              @foreach ($idiomas->all() as $idioma)
                <div class="accordion">

                  <span class="panel-heading" role="tab">   

                    @if ($idioma->id_idioma == "es")
                      <p class="panel-title"><input id="paso1_{{$idioma->id_idioma}}" type="checkbox"  class="flat" checked>
                    @else
                      <p class="panel-title"><input id="paso1_{{$idioma->id_idioma}}" type="checkbox"  class="flat">
                    @endif
                      
                  </span><span id="idencuestaidioma"> &nbsp;&nbsp;{{$clave}} &nbsp;| &nbsp;{{strtoupper($idioma->descripcion)}}<span>
                </div> 
              <script type="text/javascript">
                crearEventos('{{$idioma->id_idioma}}');
              </script>
              </br>
             @endforeach
            </div>
            </br>
          </div>
          <!-- FIN idiomas -->

<!--================================================================================================-->

          <!-- PASO 2 - GENERAL -->

          <div id="step-2">
            <div class="x_title">
              <h4 class="StepTitle">Información General</h4>
              <div class="clearfix"></div>
            </div>
            <p>Datos generales de la encuesta ( Debes seleccionar al menos un idioma en el paso 1 ).</p>
            </br>

            <div class="form-horizontal form-label-left">
                    
              <div class="accordion">

                  <span  class="panel-heading" id="comun" style="background:#CEF6CE">   
                      <p class="panel-title"><input id="paso1_{{$idioma->id_idioma}}" type="checkbox"  class="flat"> &nbsp;&nbsp; Encuesta común para todas las encuestas</p>
                  </span>
                  </br>
                  <div class="cajaSeparador">
                    <!-- start accordion -->
                    @foreach ($idiomas->all() as $idioma)

                      @if ($idioma->id_idioma == "es")
                        <div id="paso2_{{$idioma->id_idioma}}" style="border-bottom: 12px solid white" >
                      @else
                        <div id="paso2_{{$idioma->id_idioma}}" style="border-bottom: 12px solid white" hidden="hidden">
                      @endif
                    
                      <a class="panel-heading" role="tab" id="heading{{$idioma->id_idioma}}" data-toggle="collapse" data-parent="#accordion" href="#collapse{{$idioma->id_idioma}}" aria-expanded="true" aria-controls="collapse{{$idioma->id_idioma}}">   
                        <p class="panel-title"><i class="fa fa-pencil"></i> &nbsp;&nbsp; {{$clave}} | {{$idioma->descripcion}}</p>
                      </a>
                      <div id="collapse{{$idioma->id_idioma}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{$idioma->id_idioma}}">
                        <div class="panel-body">
                          
                            <div>
                              <div class="col-md-3 col-sm-6 col-xs-12">
                                <input id="titulo{{$idioma->id_idioma}}" type="text" id="first-name" required="required" class="form-control col-md-7 col-xs-12" placeholder="Titulo de Encuesta">
                              </div>
                            </div>

                            <div>
                              <div class="col-md-9 col-sm-6 col-xs-12">
                                <input type="text" id="last-name" name="last-name" required="required" class="form-control col-md-7 col-xs-12" placeholder="Descripción de Apartado">
                              </div>
                            </div> 
                            </br></br>                       

                          </div>
                        </div>
                      </div>
                    @endforeach
                  </div>
                </div>
              </div>
            </div>
            <!-- end of accordion -->

<!--================================================================================================-->

            <!-- PASO 3 - APARTADOS -->

            <div id="step-3">
              <div class="x_title">
                <h4 class="StepTitle">Apartados</h4>
                <div class="clearfix"></div>
              </div>
              <p>Datos relacionados con los apartados de la encuesta.</p>
              </br>
              
              <!-- formulario de carga de titulo y descripcion -->
              <div class="form-horizontal form-label-left">
                <div id="contenidoapartados" class="cajaSeparador padding20">

                  @foreach ($idiomas->all() as $idioma)

                    @if ($idioma->id_idioma == "es")
                      <div id='paso3_{{$idioma->id_idioma}}' style="height:65px" >
                    @else
                      <div id='paso3_{{$idioma->id_idioma}}' style="height:65px" hidden="hidden">
                    @endif
                        <h4>{{$idioma->descripcion}}</h4>

                        <div id="titulo" class="col-md-3 col-sm-6 col-xs-12 form-group">
                          <input type="text" class="form-control" id="apartadotitulo" placeholder="Titulo de Apartado">
                        </div>
        
                        <div id="descripcion" class="col-md-9 col-sm-6 col-xs-12 form-group">
                          <input type="text" class="form-control" id="apartadodescripcion" placeholder="Descripción">
                        </div>
                    </div>

                  @endforeach

                 <button id="nuevoapartado" type="submit" class="btn btn-success">Añadir Apartado</button>
                </div>
                <!-- fin formulario -->                
                </br>
                <!-- Div de carga de los bloques de nuevos apartados  -->
                <div id="apartados">
                </div>
              </div> 
            </div> 

<!--================================================================================================-->
            
            <!-- PASO 4 - APARTADOS -->

            <div id="step-4">
            <div class="x_title">
                <h4 class="StepTitle">Preguntas</h4>
                <div class="clearfix"></div>
              </div>
              <p>Completar las preguntas de cada apartado.</p>
              </br>
              <!-- Div de carga de los bloques de nuevos apartados // ready.js -->
              <div id="listaapartados">
              </div>
            </div>

<!--================================================================================================-->
            
            <!-- PASO 5 - APARTADOS -->

            <div id="step-5">
              <div class="x_title">
                <h4 class="StepTitle">Resumen</h4>
                <div class="clearfix"></div>
              </div>
              <p>Comprueba los datos introducidos.</p>
              </br>
<!-- ================================================================================= -->

              <div class="accordion gris" >

                  <div class="col-md-6 col-sm-9 col-xs-12">
                    <span class="panel-title"><input type="checkbox" class="icheckbox_flat-green checked tictic" checked></span>
                    <span class="checkpabajo"> ESTADO OCULTO</span>
                  </div>

                  <div class="col-md-6 col-sm-9 col-xs-12 ">  
                    <span class="panel-title"><input type="checkbox" class="icheckbox_flat-green checked tictic" checked></span>
                    <span class="checkpabajo"> ENCUESTA COMÚN </span>
                  </div>

                  <div style="clear: both"></div>
                  <p></p>
                  <div class="form-group col-md-6 col-sm-9 col-xs-12">
    
                    <label class="control-label margen">Título encuesta</label>
                    <input type="text" id="valortipo_A' + cont_apartados + 'P' +  n_pregunta  +  '"class="form-control">
      
                  </div>   

                  <div class="form-group col-md-6 col-sm-9 col-xs-12">

                    <label class="control-label margen">Descripción encuesta</label>
                    <input type="text" id="valortipo_A' + cont_apartados + 'P' +  n_pregunta  +  '"class="form-control">

                  </div>

                  <div style="clear: both"></div>

              </div>

              <!---inicio de tabpanel-->
              <div class="x_content">

                  <div class="" role="tabpanel" data-example-id="togglable-tabs">

                    <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
                      <li role="presentation" class="active"><a href="#infoapartados" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">General</a>
                      </li>
                      <li role="presentation" class=""><a href="#apartado1" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">Sección 1</a>
                      </li>
                    </ul>

                    <div id="myTabContent" class="tab-content">
                    
                      <div role="tabpanel" class="tab-pane fade active in" id="infoapartados" aria-labelledby="home-tab">
                        
                        <hr/>
                            <div id="idioma">
                            <h4>&nbsp;&nbsp;SECCIÓN 1</h4>
                        <hr/>



                        <div class="form-group col-md-1 col-sm-1 col-xs-1">
                            <label class="control-label margen col-md-1 col-sm-1 col-xs-1">Idioma</label>
                            <div class="form-control col-md-1 col-sm-1 col-xs-1" style="display:flex;align-items:center;">ES</div>
                            <div class="form-control col-md-1 col-sm-5 col-xs-5" style="display:flex;align-items:center;">EN</div>


                        </div> 

                        <div class="form-group col-md-5 col-sm-9 col-xs-12">
                            <label class="control-label margen col-md-5 col-sm-5 col-xs-5">Título encuesta</label>

                            <input type="text" class=" form-control col-md-5 col-sm-9 col-xs-12">
                            <input type="text" class=" form-control col-md-5 col-sm-9 col-xs-12">
                        </div>

                        <div class="form-group col-md-6 col-sm-9 col-xs-12">
                           <label class="control-label margen col-md-6 col-sm-6 col-xs-6">Descripción encuesta</label>

                            <input type="text" class="form-control col-md-6 col-sm-9 col-xs-12">
                            <input type="text" class="form-control col-md-6 col-sm-9 col-xs-12">
                        </div>

  
                    </div>





                      <div role="tabpanel" class="tab-pane fade" id="apartado1" aria-labelledby="profile-tab">
                        
                      </div>
                
                    </div>
                  </div>

              </div>

              <div style="clear: both"></div>
              
              <!-- ================================================================================= -->           
              </div> 
            </div> 


          </div>
          <!-- End SmartWizard Content -->
       </div>
    </div>
      
  </div>
  <!-- Div de carga de modals -->
  <div id="modals">
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
   
  </script>


@stop()