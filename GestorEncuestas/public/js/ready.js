$(document).ready(function() {
	//datatable
	$('#init_table').DataTable({
		"language": {
			"url": "spanish.json"
		},

		"lengthMenu": [[5, 10, 20, -1], [5, 10, 20, "Todos"]],

		"columnDefs": [
			{ "orderable": false, "targets": 5 }
		  ]

	});
	
} );
