/**
 * http://usejsdoc.org/
 */

// -------------------------------------
function Todo(id, title, completed) {
	this.id = id;
	this.title = title;
	this.completed = completed;
}
// -------------------------------------
var todoService = {
	todos : [],
	add : function(title) {
		var id = Math.random() * 1000;
		var newTodo = new Todo(id, title, false);
		this.todos.push(newTodo);
	},
	markCompleted : function(id) {

	},
	render : function(status) {
		// if status === all
		if (status === undefined) {
			this.todos.forEach(function(elt, i) {
				console.log(elt);
			});
		}
		// if status === completed
		// if status === active

	},
	deleteCompleted : function() {
		// if completed == true
		// delete those todos
	}
};
// -------------------------------------
todoService.add('sleep');
todoService.add('eat');
todoService.add('work');

todoService.render();