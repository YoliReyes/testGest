$(document).ready(function() {

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

	//copia automatica de titulo en crear

	$('#tituloes').on('keyup', function () {
		$('#titulo_autocarga').text($("#tituloes").val());
	});	

	//crear nuevos bloques de apartados

	var cont_apartados = 1;

	$('#nuevoapartado').on('click', function () {
		
		idiomas = $('#contenidoapartados').contents('div')
		cont = 0;

		//inicio de contenido de nuevos div paso 3 y 4
		
		contenidoPaso3 = '<div class="alert alert-success alert-dismissible fade in" role="alert"><button onclick = "function(){$().};" type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>'
		contenidoPaso4 = '<div class="alert alert-success alert-dismissible fade in" role="alert"><button type="button" class="close"><i class="fa fa-pencil"></i></button>'

			$('#idiomaencuesta').find('input').each(function() {
				//Recogida de valores de los idiomas chequeados
				if($('#idiomaencuesta').find('input')[cont].checked == true){

					titulo = idiomas.find('#apartadotitulo')[cont].value
					descripcion = idiomas.find('#apartadodescripcion')[cont].value
					nuevoid = "apartado" + cont_apartados;
					idioma = idiomas[cont].id.substr(6,7).toUpperCase();

					contenidoPaso3 += "<p id='" + nuevoid + "'><strong>" + idioma + " | " + titulo + "</strong> - " + descripcion + ".</p>";
					
					if(idioma=="ES"){
						contenidoPaso4 += "<p id='paso4_apartado" + cont_apartados + "'><strong>" + titulo.toUpperCase() + "</strong> | Nº Preguntas [ 0 ]</p>";
					}
				}

				cont++;
			});
			cont_apartados++;
			contenidoPaso3 += "</div>"

		//Generar div con datos 
		$('#apartados').append(contenidoPaso3);
		$('#listaapartados').append(contenidoPaso4);

	});	
} );


