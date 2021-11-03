$(document).ready(function() {
	let tasks = [];
	$('#submit').on("click", function() {
		let newTask = $('#newTask').val();
		
		if (newTask !== "") {
			tasks.push(newTask);
	
			$('#taskList').empty()
        
			tasks.forEach( t => 
    			$('#taskList').append(
        		`<div class="task">${t}</div>`
    			)
			);
		}		
	})
	$('#clearButton').on("click", function () {
		$('.task').remove();
		tasks = [];
    })	

});