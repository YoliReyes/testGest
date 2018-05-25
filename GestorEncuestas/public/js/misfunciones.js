//script PASO 1 |  Crea el evento que por cada idioma encontrado (paso1) || Muestrar/oculta divs de paso 2 y 3 en función de idioma checkeado 

function crearEventos(idioma){
      
    $('#paso1_' + idioma).on('ifChecked', function (event) {
      $('#paso2_' + idioma).show();
      $('#paso3_' + idioma).show();

    });

    $('#paso1_' + idioma).on('ifUnchecked', function (event) {
      $('#paso2_' + idioma).hide();
      $('#paso3_' + idioma).hide();
    });
  }


//añade nuevo paso Wizard y correspondiente bloque al apartado preguntas del paso 5 (dentro de un Modal)

function anadirdivpreguntas(cont_apartados){
    
    n_pregunta = ($('#menupreguntas_A'+ cont_apartados).find('li').length);

	$('#menupreguntas_A' + cont_apartados ).prepend('<li class="pasos"><a href="#step-' + n_pregunta + '_A' + cont_apartados + '"><span class="step_no">' + n_pregunta + '</span><span class="step_descr"></span></a></li>');
    
    nuevapregunta = generapregunta(cont_apartados,n_pregunta);

    $('#nuevosapartados_A'  + cont_apartados ).append(nuevapregunta);

}

//=========================================================================================

//funciones para generar htmls

function generaHTMLpaso3(cont_apartados,valor){

    contenido = '<div class="alert alert-success alert-dismissible fade in" role="alert">';
    contenido += '<button onclick = "$(\'#apartado' + cont_apartados + '_paso4\').remove();" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>';
    contenido += '<p><strong class="textosemidestacado"> APARTADO ' + cont_apartados + ' </strong></p>';
    contenido += '<p><strong><span id="valor">[ ' + valor + '</span> puntos ] </strong> ( Valor Respecto al total de la encuesta ).</p></br>';

    return contenido;
}

function generaHTMLpaso4(cont_apartados){

    contenido = '<div id="apartado' + cont_apartados + '_paso4" class="alert alert-success alert-dismissible fade in" role="alert">';
    contenido += '<button type="button" class="close" data-toggle="modal" data-target="#modal' + cont_apartados + '"><i class="fa fa-pencil"></i></button>';
    contenido += '<strong class="textosemidestacado">' + cont_apartados + ' . - </strong>';

    return contenido;
}

function generaHTMLmodal(cont_apartados){
    //EL CONTADOR se puede mejorar//no se actualiza al eliminar.
    contPreguntas = 1;

    contenido ='<div id="modal' +  cont_apartados  + '" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">';
    contenido +=    '<div class="modal-dialog modal-lg">';
    contenido +=        '<div class="modal-content">';
    
    contenido +=            '<div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button><h4 class="modal-title" id="myModalLabel">Apartado ' +  cont_apartados + ' </h4>';
    contenido +=            '</div>';
    
    contenido +=            '<div class="modal-body form_wizard wizard_horizontal">';
    
    
    contenido +=                    '<ul id="menupreguntas_A' + cont_apartados + '" class="wizard_steps">';
    contenido +=                        '<li class="pasos">';
    contenido +=                            '<a href="#step-1_A'+ cont_apartados + '">';
    contenido +=                            '<span class="step_no">1</span>';
    contenido +=                            '</a>';
    contenido +=                        '</li>';
                        
    contenido +=                        '<li class="pasos">';
    contenido +=                            '<a href="#step-0_A' + cont_apartados + '" onclick="anadirdivpreguntas(' + cont_apartados + ');">';
    contenido +=                            '<span class="step_no">+</span>';
    contenido +=                            '</a>';
    contenido +=                         '</li>';
    contenido +=                    '</ul>';

    contenido +=                    '<div id="nuevosapartados_A' + cont_apartados + '" class="stepContainer">';  
    
    contenido +=                        '<div id="step-0_A' + cont_apartados + '" class="hidden-xs hidden-sm hidden-md hidden-lg"></div>';

    contenido +=                        generapregunta(cont_apartados,1);
    
    contenido +=                    '</div>';//CIERRE NUEVOS APARTADOS

    contenido +=            '</div>';//CIERRE BODY
    contenido +=            '<div style="clear: both"></div>';
    
    contenido +=            '<div class="modal-footer">';
    contenido +=                '<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>';
    contenido +=                '<button type="button" class="btn btn-primary">Guardar cambios</button></div>';
    contenido +=            '</div>';

    contenido +=        '</div>';//CIERRE MODAL CONTENT
    contenido +=    '</div>';//MODAL DIALOG
    contenido +='</div>';//MODAL ID

    return contenido;

}

function generapregunta(cont_apartados,n_pregunta){

    contenido =            '<div id="step-' + n_pregunta + '_A' + cont_apartados + '"   >';
                        
    contenido +=                    '<p></p>'         
    contenido +=                    '<div class="x_panel panelpreguntas">';
    contenido +=                        '<div class="x_title">';
    contenido +=                            '<h2>Pregunta ' + n_pregunta + '</h2>';

    contenido +=                            '<div class="clearfix"></div>';
    contenido +=                         '</div>';

    contenido +=                        '</br><hr/><h4>&nbsp;&nbsp;OPCIONES GENERALES</h4><hr/>';

    contenido +=                            '<div class="gris">'

    contenido +=                            '<div class="form-group col-md-12 col-sm-9 col-xs-12" style="margin-top:10px">'
    contenido +=                                '<p><input type="checkbox" class="icheckbox_flat-green checked tictic" checked>';
    contenido +=                                '<span class="type25"> ¿Obligatorio responder? </span>';
    contenido +=                            '</div>'; 

    contenido +=                            '<div class="form-group col-md-6 col-sm-9 col-xs-12">'
    contenido +=                                '<label class="control-label margen">Valor de aplicación de la respuesta</label>';
    contenido +=                                    '<select onchange="activardesactivar(' +  n_pregunta + ',' + cont_apartados + ')" id="valortipo_A' + cont_apartados + 'P' +  n_pregunta  +  '" class="form-control">';
    contenido +=                                    '<option value="personal">Datos personales</option>';
    contenido +=                                    '<option value="estadistica">Estadística</option>';
    contenido +=                                    '<option value="salto">Salto de preguntas</option>';
    contenido +=                                ' </select>';
    contenido +=                            '</div>';   

    contenido +=                            '<div class="form-group col-md-6 col-sm-9 col-xs-12">';
    contenido +=                                '<label class="control-label margen">Formato de la pregunta </label>';
    contenido +=                                    '<select onchange="activardesactivar(' +  n_pregunta + ',' + cont_apartados + ')" id="preguntatipo_A' + cont_apartados + 'P' +  n_pregunta  +  '" class="form-control">';
    contenido +=                                        '<option value="texto">Texto libre</option>';
    contenido +=                                        '<option value="calificacion">Calificación</option>';
    contenido +=                                        '<option value="opcion">Seleccionar opción</option>';
    contenido +=                                    '</select>';
    contenido +=                            '</div>';
    contenido +=                            '<div style="clear:left"></div></br>';


    contenido +=                            '<div id="vp_A' + cont_apartados + 'P' +  n_pregunta  + '" class=" form-group col-md-12 col-sm-6 col-xs-6">';

    contenido +=                                '<label id="cajavalores" class="control-label margen">Valor sección</label>';

    contenido +=                                '<div class=" form-group col-md-1 col-sm-6 col-xs-6">';
    contenido +=                                    '<p class="text-center">P1</p>';
    contenido +=                                    '<input id="vp0" type="text" maxlength="2" class="form-control margen actdesact" disabled>';
    contenido +=                                '</div>';
    contenido +=                                '<div class=" form-group col-md-1 col-sm-6 col-xs-6">';
    contenido +=                                    '<p class="text-center">P2</p>';
    contenido +=                                    '<input id="vp1" type="text" maxlength="2"class="form-control margen actdesact" disabled>';
    contenido +=                                '</div>';
    contenido +=                                '<div class=" form-group col-md-1 col-sm-6 col-xs-6">';
    contenido +=                                    '<p class="text-center">P3</p>';
    contenido +=                                    '<input id="vp2" type="text" maxlength="2"class="form-control margen actdesact eliminar2" disabled>';
    contenido +=                                '</div>';
    contenido +=                                '<div class=" form-group col-md-1 col-sm-6 col-xs-6">';
    contenido +=                                    '<p class="text-center">P4</p>';
    contenido +=                                    '<input id="vp3" type="text" maxlength="2"class="form-control margen actdesact eliminar3" disabled>';
    contenido +=                                '</div>';
    contenido +=                                '<div class=" form-group col-md-1 col-sm-6 col-xs-6">';
    contenido +=                                    '<p class="text-center">P5</p>';
    contenido +=                                    '<input id="vp4" type="text" maxlength="2"class="form-control margen actdesact eliminar4" disabled>';
    contenido +=                                '</div>';

    contenido +=                            '</div>';

    contenido +=                            '<div style="clear:left"></div>';
    contenido +=                            '</div>'; 
    contenido +=                        '</br>';



        //genera un bloque de formulario por cada idioma checkeado
        $('#idiomaencuesta').find('input:checked').each(function() {

            tituloidioma = $(this).parent().parent().find('#idencuestaidioma').text();

            contenido +=                        '<hr/><div id="idioma">';//inicio bloque idioma
            contenido +=                            '<h4>&nbsp;&nbsp;' + tituloidioma + '</h4><hr/>';

            contenido +=                            '<div class="col-md-6 col-sm-9 col-xs-12">'
            contenido +=                                '<div class="form-group">';
            contenido +=                                    '<label class="control-label margen">Enunciado</label>';
            contenido +=                                        '<textarea class="form-control" rows="3" placeholder="Escribe aquí la pregunta"></textarea>';
            contenido +=                                '</div>';

            contenido +=                                '<div class="form-group">   ';
            contenido +=                                    '<label class="control-label margen">Comentarios <small class="text-navy"> ( Campo no obligatorio )</small></label>';
            contenido +=                                    '<textarea class="form-control" rows="2" placeholder="Espacio para aclaraciones"></textarea>';
            contenido +=                                '</div>';
            contenido +=                            '</div>';

            contenido +=                            '<div class="col-md-6 col-sm-9 col-xs-12">'
            contenido +=                                '<div " class="form-group respuestas respuestas_A' + cont_apartados + 'P' +  n_pregunta + '">';
            contenido +=                                    '<label class="control-label margen">Respuestas posibles ( Mínimo dos respuestas necesarias )</label>';
                
            contenido +=                                    '<div onclick="nuevarespuesta(' + n_pregunta + ',' + cont_apartados +')" class="input-group demo2 colorpicker-element">';
            contenido +=                                        '<input type="text" value="Añadir nuevo campo de respuesta" class="form-control plusgreen" readonly="readonly" disabled>';
            contenido +=                                        '<span class="input-group-addon green"><i class="fa fa-plus" style="color:white"></i></span>';
            contenido +=                                    '</div>';
                
            contenido +=                                    '<input class="form-control margeninferior actdesact" placeholder="Escribe aquí la respuesta P1" disabled>';
            contenido +=                                    '<input class="form-control margeninferior actdesact" placeholder="Escribe aquí la respuesta P2" disabled></br>';

            contenido +=                                    '<div class="input-group demo2 colorpicker-element">';
            contenido +=                                        '<input type="text" value="" class="form-control actdesact eliminar2" placeholder="Escribe aquí la respuesta P3" disabled>';
            contenido +=                                        '<span onclick="eliminarrespuesta(' + n_pregunta + ',' + cont_apartados + ',2)" class="input-group-addon"><i class="fa fa-close" style="color:red"></i></span>';
            contenido +=                                    '</div>';

            contenido +=                                    '<div class="input-group demo2 colorpicker-element">';
            contenido +=                                        '<input type="text" value="" class="form-control actdesact eliminar3" placeholder="Escribe aquí la respuesta P4" disabled>';
            contenido +=                                        '<span onclick="eliminarrespuesta(' + n_pregunta + ',' + cont_apartados + ',3)" class="input-group-addon"><i class="fa fa-close" style="color:red"></i></span>';
            contenido +=                                    '</div>';

            contenido +=                                    '<div class="input-group demo2 colorpicker-element">';
            contenido +=                                        '<input type="text" value="" class="form-control actdesact eliminar4" placeholder="Escribe aquí la respuesta P5" disabled>';
            contenido +=                                        '<span onclick="eliminarrespuesta(' + n_pregunta + ',' + cont_apartados + ',4)" class="input-group-addon"><i class="fa fa-close" style="color:red"></i></span>';
            contenido +=                                    '</div>';

            contenido +=                                '</div>';

            contenido +=                            '</div>';
            contenido +=                        '</div>';//fin bloque idioma
            
            contenido +=                        '<div style="clear:left"></div>';
        });

    contenido +=                    '</form>';
    contenido +=                 '</div>';
    contenido +=              '</div>';

        
    
    return contenido;
}

//=========================================================================================

//funciones para generar/eliminar nuevos input para respuestas ( paso 5 )

apartadosactuales = 5;

function nuevarespuesta( n_pregunta, cont_apartados ){

    // Comprueba si esta activo el tipo "seleccionar opcion", sino no debe añadir
    if( $( '#preguntatipo_A' + cont_apartados  + 'P' + n_pregunta ).val() == "opcion" || $('#valortipo_A' + cont_apartados  + 'P' + n_pregunta ).val() == "salto"){

        contenido =   '<div class="input-group demo2 colorpicker-element">';
        contenido +=	'<input type="text" value="" class="form-control actdesact eliminar' + apartadosactuales  + '" placeholder="Escribe aquí la respuesta P' + (apartadosactuales+1) + '">';
        contenido +=    '<span onclick="eliminarrespuesta(' + n_pregunta + ',' + cont_apartados + ',' + apartadosactuales + ')" class="input-group-addon"><i class="fa fa-close" style="color:red"></i></span>';
        contenido +=  '</div>';

        $( '#step-' + n_pregunta + '_A' +  cont_apartados ).find('.respuestas').each(function() {

            $(this).append(contenido); 

        });

        contenido2 =  '<div class=" form-group col-md-1 col-sm-6 col-xs-6">';
        contenido2 +=    '<p class="text-center">P'  + (apartadosactuales+1) + '</p>';
        contenido2 +=    '<input id="vp'  + apartadosactuales + '" type="text" maxlength="2" class="form-control margen actdesact eliminar' + apartadosactuales + '">';
        contenido2 += '</div>';
        
        $( '#step-' + n_pregunta + '_A' +  cont_apartados ).find('#vp_A' + cont_apartados + 'P' +  n_pregunta).each(function() {

            $(this).append(contenido2); 

        });
 

        apartadosactuales++;
        
    }
}

function eliminarrespuesta( n_pregunta, cont_apartados,div){
    
    // Comprueba si esta activo el tipo "seleccionar opcion", sino no debe eliminar
    if( $( '#preguntatipo_A' + cont_apartados  + 'P' + n_pregunta ).val() == "opcion" || $('#valortipo_A' + cont_apartados  + 'P' + n_pregunta ).val() == "salto"){
   
        $('#step-' + n_pregunta + '_A' + cont_apartados ).find('.respuestas').each(function() {
		
            $(this).find('.eliminar' + div).parent().remove() ;
        
        }); 

        $('#step-' + n_pregunta + '_A' + cont_apartados ).find('#vp_A' + cont_apartados + 'P' +  n_pregunta).each(function() {
		
            $(this).find('.eliminar' + div).parent().remove() ;
        
        }); 
    }
}


//=========================================================================================

//funcion para activar/desactivar inputs TIPO OPCION

function activardesactivar( n_pregunta, cont_apartados ){

    if( $( '#preguntatipo_A' + cont_apartados  + 'P' + n_pregunta ).val() == "opcion" || $( '#valortipo_A' + cont_apartados  + 'P' + n_pregunta ).val() == "salto"){

        $( '#step-' + n_pregunta + '_A' +  cont_apartados ).find('.actdesact').removeAttr('disabled');//ACTIVAR
            
    }else{

        $( '#step-' + n_pregunta + '_A' +  cont_apartados ).find('.actdesact').attr('disabled',''); //DESACTIVAR
        
    }
}

//=========================================================================================

//PASO FINAL insercción

function onFinishCallback() {

    var encuestas = [];
    var apartados = [];
    var preguntas = [];
    var respuestas = [];
    
    var id_encuesta= $(".x_title").find("h2").text().substr(0, 8);
    var idioma ="";
    var estado = false;
    var tituloencuesta = "";
    var descripcionencuesta = "";
    var encuesta = ""

    //rellenar array encuestas
    $('#idiomaencuesta').find('input:checked').each(function() {

        idioma = $(this)[0].id.substr(6, 2);

        if($("#visible:checked").val() == "on"){
            estado = true;
        }

        tituloencuesta = $( '#titulo' + idioma ).val();
        descripcionencuesta = $('#descripcion'+ idioma ).val();

        encuesta = { "id" : id_encuesta ,"titulo" : tituloencuesta, "descripcion": descripcionencuesta, "estado": estado, "idioma" : idioma }; 
        encuestas.push(encuesta);
        
    });

  }