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
			console.log('prueba');
		});
		
	// PASO 1 | Mostrar/ocultar div de paso 2 correspondientes a los idiomas seleccionados en paso 1
	

	function mostrarDivPaso1(idioma){
		console.log("hola");
		alert(idioma);

		if ( $('#paso1_es' ).is(':checked') )
		{
			$("pasos2_es").show(); 
		}else{
			$("pasos2_es").show(); 
		}
	}
	
        $('input.flat').iCheck({
           
        }).on('ifChanged', function (event) { 
            var a = $('input.flat').iCheck('check');
            //mostrarDivPaso1('es')
		});

		$('#paso1_es').on('ifChanged', function (event) {
			var a =$('#paso1_es').iCheck('check');//funciones de icheck
			console.log(a);
				
		});

} );


