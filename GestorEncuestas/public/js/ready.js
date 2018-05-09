
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
	
	//copia automatica de titulo en crear paso 1

	$('#tituloes').on('keyup', function () {
		$('#titulo_autocarga').text($("#tituloes").val());
	});	

//=========================================================================================
	
	//crear nuevos bloques de apartados paso 3 y 4

	var cont_apartados = 1;

	$('#nuevoapartado').on('click', function () {
		//[idiomas] recoge cada div de los diferentes idiomas rellenados en el apartado 3
		idiomas = $('#contenidoapartados').contents('div');

		//contador de inputs
		cont = 0;

		//inicio de html de nuevos div para paso 3 y 4
		contenidoPaso3 = generaHTMLpaso3(cont_apartados);
		contenidoPaso4 = generaHTMLpaso4(cont_apartados);

		//selecciona los divs de idiomas del paso 1 
		$('#idiomaencuesta').find('input').each(function() {
				nuevoid = "apartado" + cont_apartados;
				idioma = idiomas[cont].id.substr(6,7).toUpperCase();
		
				//y cogemos solo los datos del paso 3 que correspondan al idioma chequeado en paso 1
				if($('#idiomaencuesta').find('input')[cont].checked == true){

					//recoje valores y vacia inputs
					titulo = idiomas.find('#apartadotitulo')[cont].value;
					idiomas.find('#apartadotitulo')[cont].value = "";

					descripcion = idiomas.find('#apartadodescripcion')[cont].value;
					idiomas.find('#apartadodescripcion')[cont].value= "";
					
					modalPaso4 = generaHTMLmodal(cont_apartados);    	

					//añade html div paso3
					contenidoPaso3 += "<p id='" + nuevoid + "'><strong>" + idioma + " | " + titulo + "</strong> - " + descripcion + ".</p>";
					
					//añade texto titulo al html div paso4
					if(idioma=="ES"){

						contenidoPaso4 += "<span id='paso4_apartado" + cont_apartados + "'><strong>" + titulo.toUpperCase() + "</strong> | Nº Preguntas [ 0 ]</span>";
					}
				}

				cont++;
			});

			//añade al id un digito de control del apartado (habría que hacerlo dinámico, adaptado a eliminaciones)
			cont_apartados++;
			contenidoPaso3 += "</div>";
			contenidoPaso4 += "</div>";
			//modalPaso4 +="</div>";

		//mostrar div con datos 
		$('#apartados').append(contenidoPaso3);
		$('#listaapartados').append(contenidoPaso4);
		$('#modals').append(modalPaso4);

	});	

//=========================================================================================

	//dinámica general de inputs al hacer click o soltar
	
	$('input').on("click",function(){
		valor = $(this).attr('placeholder');
		$(this).attr("placeholder","")

	}).on("blur",function(){
		$(this).attr("placeholder",valor);
					
	});

//=========================================================================================
});


