//añade nuevo paso a apartado preguntas

var contPreguntas = 2;

function anadirdivpreguntas(){
    
	$('#menupreguntasprueba').prepend('<li class="pasos"><a href="#step-' + contPreguntas + '"><span class="step_no">' + contPreguntas + '</span><span class="step_descr"></span></a></li>');
    $('#nuevosapartados').append('<div id="step-' + contPreguntas + '"><div class="x_title"><h4 class="StepTitle">Pregunta ' + contPreguntas + '</h4><div class="clearfix"></div></div><p>Selecciona el o los idiomas en los que realizar la encuesta.</p></br><div class="accordion">panel ' + contPreguntas + '</div></div>');
    
        contPreguntas++;
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

    contenido ='<div id="modal' +  cont_apartados  + '" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">';
    contenido +='<div class="modal-dialog modal-lg"><div class="modal-content">';
    contenido +='<div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button><h4 class="modal-title" id="myModalLabel">Apartado ' +  cont_apartados + ' </h4></div>';
    contenido +='<div class="modal-body">';

    //seccion de introducción de preguntas WIZARD
    contenido +='<div id="wizard2" class="form_wizard wizard_horizontal">';
    contenido +='<ul id="menupreguntas" class="wizard_steps">';
    contenido +=    '<li class="pasos"><a onclick="anadirdivpreguntas();"><span class="step_no">+</span><span class="step_descr"></span></a></li>';
    contenido +=    '<li class="pasos"><a href="#step-B1"><span class="step_no">1</span><span class="step_descr"></span></a></li>';
    contenido +=    '<li class="pasos"><a href="#step-B2"><span class="step_no">1</span><span class="step_descr"></span></a></li>';

    contenido +='</ul>';
    
    contenido +='<div id="step-B1">';
    contenido +=    '<div class="x_title"><h4 class="StepTitle">Numero de pregunta</h4>';
    contenido +=         '<div class="clearfix"></div></div>';
    contenido +=         '<p>Selecciona el tipo de pregunta y formatosdfasdfasef.</p></br>';
    contenido +=           '<div class="accordion">panel 1 </div>';
    contenido +=    '</div>'
    contenido +='<div id="step-B2">';
    contenido +=    '<div class="x_title"><h4 class="StepTitle">Numero de pregunta</h4>';
    contenido +=         '<div class="clearfix"></div></div>';
    contenido +=         '<p>Selecciona el tipo de pregunta y formatosdfasdfasef.</p></br>';
    contenido +=           '<div class="accordion">panel 1 </div>';
    contenido +=    '</div>'
    contenido +='</div>';
    //FIN WIZARD
    contenido +=    '<div class="modal-footer">';
    contenido +=        '<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>';
    contenido +=        '<button type="button" class="btn btn-primary">Guardar cambios</button></div>';
    contenido +=    '</div>';
    contenido +='</div></div>';

    return contenido;

}


