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
		contenidoPaso4 = '<div id="apartado'+ cont_apartados +'_paso4" class="alert alert-success alert-dismissible fade in" role="alert"><button type="button" class="close"><i class="fa fa-pencil"></i></button><p><strong class="textosemidestacado"> APARTADO ' + cont_apartados + '</strong></p>';

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

						contenidoPaso4 += "<p id='paso4_apartado" + cont_apartados + "'><strong>" + titulo.toUpperCase() + "</strong> | Nº Preguntas [ 0 ]</p>";
					}
				}

				cont++;
			});
			//añade al id un digito de control del apartado
			cont_apartados++;
			contenidoPaso3 += "</div>"

		//Generar div con datos 
		$('#apartados').append(contenidoPaso3);
		$('#listaapartados').append(contenidoPaso4);
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


