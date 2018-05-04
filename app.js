//Todo List App

//Version 4 Requirements

var todoList = {
	
	//store todos array in an object
	todos: [],
	
	//create display todos method
	displayTodos: function(){
		console.log('My Todos:', this.todos);
	},
	
	//todoList.addTodo() should add objects
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	
	//todoList.changeTodo() should change todoText property
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	
	//create delete todo method
	deleteTodo: function(position){
		this.todos.splice(position, 1);
		this.displayTodos();
	},
	
	//todoList.toggleCompleted() should change the completed property
	toggleCompleted: function(position){
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}
	
	
}



