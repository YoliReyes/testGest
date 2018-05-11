//añade nuevo paso a apartado preguntas paso 5


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
    //EL CONTADOR DE PREGUNTAS HAY QUE MEJORARLO // DEBERÍA CONTAR EL Nº DE DIVS QUE YA HAY Y SEGUIR CONTANDO DESDE AHI.
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

    contenido +=                    '<form class="form-horizontal form-label-left">';

    contenido +=                        '<div class="accordion">';
    contenido +=                            '<span class="panel-heading gris" role="tab">';
    contenido +=                                '<p class="panel-title"><input type="checkbox"  style="margin-bottom:5px;margin-right:15px;" class="icheckbox_flat-green checked" checked>';
    contenido +=                            '<span class="checkpabajo"> ¿Obligatorio responder? </span></span>';
    contenido +=                        '</div>';

    contenido +=                        '<div id="idioma">'
    contenido +=                            '<h4>&nbsp;&nbsp;Idioma</h4><hr/>'

    contenido +=                            '<div class="form-group col-md-6 col-sm-9 col-xs-12">'
    contenido +=                                '<label class="control-label margen">Valor tipo</label>';
    contenido +=                                '<select class="form-control">';
    contenido +=                                    '<option value="texto">Datos personales</option>';
    contenido +=                                    '<option value="calificacion">Estadística</option>';
    contenido +=                                    '<option value="opcion">Salto de preguntas</option>';
    contenido +=                                ' </select>';
    contenido +=                            '</div>';   

    contenido +=                            '<div class="form-group col-md-6 col-sm-9 col-xs-12">';
    contenido +=                                '<label class="control-label margen">Pregunta tipo</label>';
    contenido +=                                    '<select class="form-control">';
    contenido +=                                        '<option value="texto">Texto libre</option>';
    contenido +=                                        '<option value="calificacion">Calificación</option>';
    contenido +=                                        '<option value="opcion">Seleccionar opción</option>';
    contenido +=                                    '</select>';
    contenido +=                            '</div>';

    contenido +=                            '<div class="col-md-6 col-sm-9 col-xs-12">'
    contenido +=                                '<div class="form-group">';
    contenido +=                                    '<label class="control-label margen">Enunciado</label>';
    contenido +=                                        '<textarea class="form-control" rows="2" placeholder="Escribe aquí la pregunta"></textarea>';
    contenido +=                                '</div>';

    contenido +=                                '<div class="form-group">   ';
    contenido +=                                    '<label class="control-label margen">Comentarios <small class="text-navy"> ( Campo no obligatorio )</small></label>';
    contenido +=                                    '<textarea class="form-control" rows="2" placeholder="Espacio para aclaraciones"></textarea>';
    contenido +=                                '</div>';
    contenido +=                            '</div>';

    contenido +=                            '<div class="col-md-6 col-sm-9 col-xs-12">'
    contenido +=                                '<div id="respuestas_A' + cont_apartados + '" class="form-group">';
    contenido +=                                    '<label class="control-label margen">Respuestas posibles</label>';
    contenido +=                                    '<input class="form-control" placeholder="Escribe aquí la respuesta"></br>';
    contenido +=                                    '<input class="form-control" placeholder="Escribe aquí la pregunta"></br>';
    contenido +=                                    '<input class="form-control" placeholder="Escribe aquí la pregunta"></br>';
    contenido +=                                    '<button type="button" class="btn btn-round btn-success"><i class="fa fa-plus"></i></button>';

    contenido +=                                '</div>';
    contenido +=                            '</div>';


    contenido +=                        '</div>';

    contenido +=                    '</form>';
    contenido +=                 '</div>';
    contenido +=              '</div>';

        
    
    return contenido;
}




