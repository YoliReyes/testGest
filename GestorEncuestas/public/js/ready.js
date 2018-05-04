$(document).ready(function() {

//=========================================================================================

	//personalización datatable

	$('#init_table').DataTable({
		"language": {
			"url": "spanish.json"
		},

		"lengthMenu": [[5, 10, 20, -1], [5, 10, 20, "Todos"]],

		"columnDefs": [
			{ "orderable": false, "targets": 5 }
		  ]

	});

//=========================================================================================
	
	//copia automatica de titulo en crear

	$('#tituloes').on('keyup', function () {
		$('#titulo_autocarga').text($("#tituloes").val());
	});	

//=========================================================================================
	
	//crear nuevos bloques de apartados

	var cont_apartados = 1;

	$('#nuevoapartado').on('click', function () {
		//recoge cada div de los diferentes idiomas
		idiomas = $('#contenidoapartados').contents('div')
		//contador de inputs
		cont = 0;

		//inicio de html de nuevos div para paso 3 y 4
		contenidoPaso3 = '<div class="alert alert-success alert-dismissible fade in" role="alert"><button onclick = "$(\'#apartado' + cont_apartados + '_paso4\').remove();" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button><p><strong class="textosemidestacado"> APARTADO ' + cont_apartados + ' </strong></p>';
		contenidoPaso4 = '<div id="apartado' + cont_apartados + '_paso4" class="alert alert-success alert-dismissible fade in" role="alert"><button type="button" class="close" data-toggle="modal" data-target="#modals"><i class="fa fa-pencil"></i></button><strong class="textosemidestacado">' + cont_apartados + ' . - </strong>';
		modalPaso4 = '<div id="modal' +  cont_apartados  + '" class="modal fade bs-example-modal-lg in" tabindex="-1" role="dialog" aria-hidden="true" style="display: block; padding-right: 15px;"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button><h4 class="modal-title" id="myModalLabel">Añadir preguntas</h4></div><div class="modal-body"><h4>En este apartado vamos a incluir todas las preguntas que correspondan al apartado ' +  cont_apartados  + '</h4><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p><p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button><button type="button" class="btn btn-primary">Guardar Cambios</button></div></div></div></div>';    
			
		$('#idiomaencuesta').find('input').each(function() {
		
				//Recogida solo de los valores de los idiomas seleccionados
				if($('#idiomaencuesta').find('input')[cont].checked == true){

					//recoje valor y vacia input
					titulo = idiomas.find('#apartadotitulo')[cont].value;
					idiomas.find('#apartadotitulo')[cont].value = "";

					//recoje valor y vacia input
					descripcion = idiomas.find('#apartadodescripcion')[cont].value;
					idiomas.find('#apartadodescripcion')[cont].value= "";

					nuevoid = "apartado" + cont_apartados;
					idioma = idiomas[cont].id.substr(6,7).toUpperCase();
					
					//añade html div paso3
					contenidoPaso3 += "<p id='" + nuevoid + "'><strong>" + idioma + " | " + titulo + "</strong> - " + descripcion + ".</p>";
					
					//añade html div paso4
					if(idioma=="ES"){

						contenidoPaso4 += "<span id='paso4_apartado" + cont_apartados + "'><strong>" + titulo.toUpperCase() + "</strong> | Nº Preguntas [ 0 ]</span>";
					}
				}

				cont++;
			});
			//añade al id un digito de control del apartado
			cont_apartados++;
			contenidoPaso3 += "</div>";
			contenidoPaso4 += "</div>";
			//modalPaso4 +="</div>";

		//Generar div con datos 
		$('#apartados').append(contenidoPaso3);
		$('#listaapartados').append(contenidoPaso4);
		//$('#modals').append(modalPaso4);

	});	

//=========================================================================================

	//dinámica general de inputs al hacer click o soltar
	$('input').on("click",function(){
		valor = $(this).attr('placeholder');
		$(this).attr("placeholder","")


	}).on("blur",function(){
			$(this).attr("placeholder",valor);
					
	});
});


