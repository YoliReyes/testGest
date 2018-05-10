//añade nuevo paso a apartado preguntas paso 5

var contPreguntas = 1;

function anadirdivpreguntas(cont_apartados){
    
    contPreguntas++;

	$('#menupreguntas_A' + cont_apartados ).prepend('<li class="pasos"><a href="#step-' + contPreguntas + '_A' + cont_apartados + '"><span class="step_no">' + contPreguntas + '</span><span class="step_descr"></span></a></li>');
    
    nuevapregunta = generapregunta(cont_apartados,contPreguntas);

    $('#nuevosapartados_A'  + cont_apartados ).append(nuevapregunta);

    window.location('./iniciocrearencuesta#step-0_A1');


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
    
    contenido +=                        '<div id="step-0_A' + cont_apartados + '"></div>';

        contenido +=                        generapregunta(cont_apartados);
 
    contenido +=                    '</div>';//CIERRE NUEVOS APARTADOS

    contenido += '          </div>';//CIERRE BODY

    contenido +=            '<div class="modal-footer" >';
    contenido +=                '<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>';
    contenido +=                '<button type="button" class="btn btn-primary">Guardar cambios</button></div>';
    contenido +=            '</div>';

    contenido +=        '</div>';//CIERRE MODAL CONTENT
    contenido +=    '</div>';//MODAL DIALOG
    contenido +='</div>';//MODAL ID

    return contenido;

}

function generapregunta(cont_apartados){

    contenido =            '<div id="step-' + contPreguntas + '_A' + cont_apartados + '">';
                        
    contenido +=                    '<p></p>'         
    contenido +=                    '<div class="x_panel" style="background-color:#A9F5BC;color:#524c57;width:48%;">';
    contenido +=                        '<div class="x_title">';
    contenido +=                            '<h2>Pregunta ' + contPreguntas + '</h2>';
    contenido +=                            '<div class="clearfix"></div>';
    contenido +=                         '</div>';

    contenido +=                    '<form class="form-horizontal form-label-left">';

    contenido +=                        '<div class="form-group">';
    contenido +=                            '<label class="col-md-3 col-sm-3 col-xs-12 control-label"></label>';
    contenido +=                            '<div class="col-md-9 col-sm-9 col-xs-12">';
    contenido +=                                '<div class="checkbox">';
    contenido +=                                    '<label>';
    contenido +=                                        '<input type="checkbox" value="" class="icheckbox_flat-green checked" checked><span style="padding-left:5px;padding-top:4px; display:block;float:left;"> Obligatorio responder</span>';
    contenido +=                                    '</label>';
    contenido +=                                '</div>';
    contenido +=                            '</div>';
    contenido +=                        '</div>';

    contenido +=                        '<div class="form-group">';
    contenido +=                            '<label class="control-label col-md-3 col-sm-3 col-xs-12">Pregunta tipo</label>';
    contenido +=                            '<div class="col-md-9 col-sm-9 col-xs-12">';
    contenido +=                            '<select class="form-control">';
    contenido +=                                '<option value="texto">Texto libre</option>';
    contenido +=                                '<option value="calificacion">Calificación</option>';
    contenido +=                                '<option value="opcion">Seleccionar opción</option>';
    contenido +=                            '</select>';
    contenido +=                            '</div>';
    contenido +=                        '</div>';

    contenido +=                        '<div class="form-group">'
    contenido +=                            '<label class="control-label col-md-3 col-sm-3 col-xs-12">Valor tipo</label>';
    contenido +=                            '<div class="col-md-9 col-sm-9 col-xs-12">';
    contenido +=                            '<select class="form-control">';
    contenido +=                                '<option value="texto">Datos personales</option>';
    contenido +=                                '<option value="calificacion">Estadística</option>';
    contenido +=                                '<option value="opcion">Salto de preguntas</option>';
    contenido +=                           ' </select>';
    contenido +=                            '</div>';
    contenido +=                        '</div>';

    contenido +=                        '<div class="form-group">';
    contenido +=                            '<label class="control-label col-md-3 col-sm-3 col-xs-12">Enunciado</label>';
    contenido +=                            '<div class="col-md-9 col-sm-9 col-xs-12">';
    contenido +=                            '<textarea class="form-control" rows="3" placeholder="Escribe aquí la pregunta"></textarea>';
    contenido +=                            '</div>';
    contenido +=                        '</div>';

    contenido +=                        '<div class="form-group">';
    contenido +=                            '<label class="control-label col-md-3 col-sm-3 col-xs-12">Comentarios</br><small class="text-navy">Campo no obligatorio</small></label>';
    contenido +=                            '<div class="col-md-9 col-sm-9 col-xs-12">';
    contenido +=                                '<textarea class="form-control" rows="2" placeholder="Espacio para aclaraciones"></textarea>';
    contenido +=                            '</div>';
    contenido +=                        '</div>';

    contenido +=                        '<div class="control-group">';
    contenido +=                            '<label class="control-label col-md-3 col-sm-3 col-xs-12">Respuestas</br><small class="text-navy">Sólo tipo Opciones</small></label>';
    contenido +=                            '<div class="col-md-9 col-sm-9 col-xs-12">';
    contenido +=                                '<input id="tags_1" type="text" class="tags form-control" value="social, adverts, sales" data-tagsinput-init="true" style="display: none;">';
    contenido +=                                '<div id="tags_1_tagsinput" class="tagsinput" style="width: auto; min-height: 100px; height: 100px;"><span class="tag"><span>social&nbsp;&nbsp;</span><a href="#" title="Removing tag">x</a></span><span class="tag"><span>adverts&nbsp;&nbsp;</span>';
    contenido +=                                   '<a href="#" title="Removing tag">x</a></span><span class="tag"><span>sales&nbsp;&nbsp;</span><a href="#" title="Removing tag">x</a></span>'
    contenido +=                                   '<div id="tags_1_addTag">';
    contenido +=                                        '<input id="tags_1_tag" value="" data-default="add a tag" style="color: rgb(102, 102, 102); width: 72px;">';
    contenido +=                                   '</div><div class="tags_clear"></div></div>';
    contenido +=                            '<div id="suggestions-container" style="position: relative; float: left; width: 250px; margin: 10px;"></div>';
    contenido +=                        '</div>';
    contenido +=                        '</div>';
    contenido +=                    '</form>';
    contenido +=                        '</div>';
    contenido +=                        '</div>';

        
    
    return contenido;
}


