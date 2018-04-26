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

} );


