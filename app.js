//Todo List App

//Version 3 Requirements

var todoList = {
	
	//store todos array in an object
	todos: [],
	
	//create display todos method
	displayTodos: function(){
		console.log(`My Todos: ${this.todos}`);
	},
	
	//create add todo method
	addTodo: function(todo){
		this.todos.push(todo);
	},
	
	//create change todo method
	changeTodo: function(position, newValue){
		this.todos[position] = newValue;
	},
	
	//create delete todo method
	deleteTodo: function(position){
		this.todos.splice(position, 1);
	}
	
}



