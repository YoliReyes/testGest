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

function generaHTMLpaso3(cont_apartados){

    contenido = '<div class="alert alert-success alert-dismissible fade in" role="alert">';
    contenido += '<button onclick = "$(\'#apartado' + cont_apartados + '_paso4\').remove();" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>';
    contenido += '<p><strong class="textosemidestacado"> APARTADO ' + cont_apartados + ' </strong></p>';

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

    contenido +=                            '<ul class="nav navbar-right panel_toolbox">';
    contenido +=                                '<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>';
    contenido +=                                 '</li>';
                      
    contenido +=                                '<li><a class="close-link"><i class="fa fa-close"></i></a>';
    contenido +=                                '</li>';
    contenido +=                             '</ul>';


    contenido +=                            '<div class="clearfix"></div>';
    contenido +=                         '</div>';

    contenido +=                    '<form class="form-horizontal form-label-left ">';

    contenido +=                        '<div class="accordion" >';
    contenido +=                            '<span class="panel-heading gris" role="tab">';
    contenido +=                                '<p class="panel-title"><input type="checkbox" class="icheckbox_flat-green checked tictic" checked>';
    contenido +=                            '<span class="checkpabajo"> ¿Obligatorio responder? </span></span>';

    contenido +=                            '<div class="form-group col-md-6 col-sm-9 col-xs-12">'
    contenido +=                                '<label class="control-label margen">Valor tipo</label>';
    contenido +=                                '<select id="valortipo_A' + cont_apartados + 'P' +  n_pregunta  +  '"class="form-control">';
    contenido +=                                    '<option value="texto">Datos personales</option>';
    contenido +=                                    '<option value="calificacion">Estadística</option>';
    contenido +=                                    '<option value="opcion">Salto de preguntas</option>';
    contenido +=                                ' </select>';
    contenido +=                            '</div>';   

    contenido +=                            '<div class="form-group col-md-6 col-sm-9 col-xs-12">';
    contenido +=                                '<label class="control-label margen">Pregunta tipo</label>';
    contenido +=                                    '<select onchange="activardesactivarinput(' +  n_pregunta + ',' + cont_apartados + ')" id="preguntatipo_A' + cont_apartados + 'P' +  n_pregunta  +  '" class="form-control">';
    contenido +=                                        '<option value="texto">Texto libre</option>';
    contenido +=                                        '<option value="calificacion">Calificación</option>';
    contenido +=                                        '<option value="opcion">Seleccionar opción</option>';
    contenido +=                                    '</select>';
    contenido +=                            '</div>';
    contenido +=                        '<div style="clear:left"></div></br>';

    contenido +=                        '</div>';

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
                
            contenido +=                                    '<input class="form-control margeninferior actdesact" placeholder="Escribe aquí la respuesta" disabled>';
            contenido +=                                    '<input class="form-control margeninferior actdesact" placeholder="Escribe aquí la respuesta" disabled></br>';

            contenido +=                                    '<div class="input-group demo2 colorpicker-element">';
            contenido +=                                        '<input type="text" value="" class="form-control actdesact eliminar2" placeholder="Escribe aquí otra respuesta" disabled>';
            contenido +=                                        '<span onclick="eliminarrespuesta(' + n_pregunta + ',' + cont_apartados + ',2)" class="input-group-addon"><i class="fa fa-close" style="color:red"></i></span>';
            contenido +=                                    '</div>';

            contenido +=                                    '<div class="input-group demo2 colorpicker-element">';
            contenido +=                                        '<input type="text" value="" class="form-control actdesact eliminar3" placeholder="Escribe aquí otra respuesta" disabled>';
            contenido +=                                        '<span onclick="eliminarrespuesta(' + n_pregunta + ',' + cont_apartados + ',3)" class="input-group-addon"><i class="fa fa-close" style="color:red"></i></span>';
            contenido +=                                    '</div>';

            contenido +=                                    '<div class="input-group demo2 colorpicker-element">';
            contenido +=                                        '<input type="text" value="" class="form-control actdesact eliminar4" placeholder="Escribe aquí otra respuesta" disabled>';
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

//funcion para generar/eliminar nuevos input para respuestas ( paso 5 )

apartadosactuales = 5;

function nuevarespuesta( n_pregunta, cont_apartados ){

    // Comprueba si esta activo el tipo "seleccionar opcion", sino no debe añadir
    if( $( '#preguntatipo_A' + cont_apartados  + 'P' + n_pregunta ).val() == "opcion"){

        contenido ='<div class="input-group demo2 colorpicker-element">';
        contenido +=	'<input type="text" value="" class="form-control actdesact eliminar' + apartadosactuales  + '" placeholder="Escribe aquí otra respuesta">';
        contenido +=    '<span onclick="eliminarrespuesta(' + n_pregunta + ',' + cont_apartados + ',' + apartadosactuales + ')" class="input-group-addon"><i class="fa fa-close" style="color:red"></i></span>';
        contenido +='</div>';
        
        $( '#step-' + n_pregunta + '_A' +  cont_apartados ).find('.respuestas').each(function() {

            $(this).append(contenido); 

        });

        apartadosactuales++;
        
    }
}

function eliminarrespuesta( n_pregunta, cont_apartados,div){
    
    // Comprueba si esta activo el tipo "seleccionar opcion", sino no debe eliminar
    if( $( '#preguntatipo_A' + cont_apartados  + 'P' + n_pregunta ).val() == "opcion"){
   
        $('#step-' + n_pregunta + '_A' + cont_apartados ).find('.respuestas').each(function() {
		
            $(this).find('.eliminar' + div).parent().remove() ;
        
        }); 
    }
}


//=========================================================================================

//funcion para activar/desactivar inputs

function activardesactivarinput( n_pregunta, cont_apartados ){

    if( $( '#preguntatipo_A' + cont_apartados  + 'P' + n_pregunta ).val() == "opcion"){

        $( '#step-' + n_pregunta + '_A' +  cont_apartados ).find('.actdesact').removeAttr('disabled');   
    
    }else{
        $( '#step-' + n_pregunta + '_A' +  cont_apartados ).find('.actdesact').attr('disabled','');   
    }
}
