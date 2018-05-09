
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Gestor Encuestas</title>
<!-- Bootstrap core CSS -->

<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="css/animate.min.css" rel="stylesheet">

<!-- Custom styling plus plugins -->
<link href="css/custom.css" rel="stylesheet">
<link href="css/icheck/flat/green.css" rel="stylesheet">
<link href="js/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css" />
<link href="js/datatables/buttons.bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="js/datatables/fixedHeader.bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="js/datatables/responsive.bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="js/datatables/scroller.bootstrap.min.css" rel="stylesheet" type="text/css" />

<script src="js/jquery.min.js"></script>

<!-- tipografía tecnun -->
<link href="css/fuenteRoti.css" rel="stylesheet">
<!-- iconos -->
<link href="fonts/css/font-awesome.min.css" rel="stylesheet">
<!-- css extra fuera de plantilla -->
<link href="css/extras.css" rel="stylesheet">
<!-- css iconos banderasla -->
<link href="./images/flag-icon-css-master/css/flag-icon.css" rel="stylesheet">

<script src="js/misfunciones.js"></script>
<script src="js/jquery.steps-1.1.0/jquery.steps.js"></script>

</head>
    
<body> 
<!--================================================================================================-->

<!-- Inicio HTML || Cuerpo de la página -->

<div class="right_col" role="main">

    <h2 class="h2_new"> <i class="fa fa-plus-circle"></i> &nbsp; CREAR ENCUESTA </h2>

    
        </br>


          <!-- Contenido Cuenta pasos - cambiar x este y este dejarlo para las preguntas;https://codepen.io/AlexRebula/pen/bpMwjK-->
          <div id="wizard2" class="form_wizard wizard_horizontal">

            <!-- Barra Cuenta pasos -->
            <ul id="menupreguntasprueba" class="wizard_steps">
              <li class="pasos">
                <a href="#step-1">
                  <span class="step_no">1</span>
                </a>
              </li>
            
            <li class="pasos">
                <a href="#step-0" onclick="anadirdivpreguntas();">
                  <span class="step_no">+</span>
                </a>
              </li>
            </ul>

            <!-- fin Barra Cuenta pasos -->

    <!--================================================================================================-->

            <!-- PASO 1 - idiomas // NO BORRAR, no hace nada, pero sin ello no funciona bien Wizard -->
            <div id="nuevosapartados">
              <div id="step-0">
              
              </div>

    <!--================================================================================================-->

              <div id="step-1">
              
              </br>
                <div class="col-md-6 col-xs-12">
                  <div class="x_panel" style="background-color:#A9F5BC;color:#524c57;">
                    <div class="x_title">
                      <h2>Pregunta  1</h2>
                      <div class="clearfix"></div>
                    </div>

                    <div class="x_content">
                      <form class="form-horizontal form-label-left">

                          <div class="form-group">
                            <label class="col-md-3 col-sm-3 col-xs-12 control-label"></label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                              <div class="checkbox">
                                <label>
                                  <input type="checkbox" value="" class="icheckbox_flat-green checked" checked><span style="padding-left:5px;padding-top:4px; display:block;float:left;"> Obligatorio responder</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Pregunta tipo</label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                              <select class="form-control">
                                <option value="texto">Texto libre</option>
                                <option value="calificacion">Calificación</option>
                                <option value="opcion">Seleccionar opción</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Valor tipo</label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                              <select class="form-control">
                                <option value="texto">Datos personales</option>
                                <option value="calificacion">Estadística</option>
                                <option value="opcion">Salto de preguntas</option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Enunciado</label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                              <textarea class="form-control" rows="3" placeholder="Escribe aquí la pregunta"></textarea>
                            </div>
                          </div>

                          <div class="form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Comentarios</br><small class="text-navy">Campo no obligatorio</small></label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                              <textarea class="form-control" rows="2" placeholder="Espacio para aclaraciones"></textarea>
                            </div>
                          </div>

                          <div class="control-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12">Respuestas</br><small class="text-navy">Sólo tipo Opciones</small></label>
                            <div class="col-md-9 col-sm-9 col-xs-12">
                              <input id="tags_1" type="text" class="tags form-control" value="social, adverts, sales" data-tagsinput-init="true" style="display: none;"><div id="tags_1_tagsinput" class="tagsinput" style="width: auto; min-height: 100px; height: 100px;"><span class="tag"><span>social&nbsp;&nbsp;</span><a href="#" title="Removing tag">x</a></span><span class="tag"><span>adverts&nbsp;&nbsp;</span><a href="#" title="Removing tag">x</a></span><span class="tag"><span>sales&nbsp;&nbsp;</span><a href="#" title="Removing tag">x</a></span><div id="tags_1_addTag"><input id="tags_1_tag" value="" data-default="add a tag" style="color: rgb(102, 102, 102); width: 72px;"></div><div class="tags_clear"></div></div>
                              <div id="suggestions-container" style="position: relative; float: left; width: 250px; margin: 10px;"></div>
                            </div>
                          </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End SmartWizard Content -->      
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
  

</body> 

    
 
    
    
