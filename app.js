//Todo List App

//Version 11 Requirements

var todoList = {
	
	//store todos array in an object
	todos: [],
	
	//create add todo method
	addTodo: function(todo){
		this.todos.push(todo);
	},
	
	//create change todo method
	changeTodo: function(position, newValue){
		this.todos[position] = newValue;
	},

	//todoList.addTodo() should add objects
	addTodo: function(todoText){
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	
	//todoList.changeTodo() should change todoText property
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
	},
	
	//create delete todo method
	deleteTodo: function(position){
		this.todos.splice(position, 1);
	},
	
	//todoList.toggleCompleted() should change the completed property
	toggleCompleted: function(position){
		var todo = this.todos[position];
		todo.completed = !todo.completed;
	},
	
	toggleAll: function(){
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		
		this.todos.forEach(function(todo){
			if(todo.completed === true){
				completedTodos++;
			}
		});
		
		this.todos.forEach(function(todo){
			if(completedTodos === totalTodos){
				todo.completed = false;
			} else {
				todo.completed = true;
				}
			});
		},
};
//Refactoring display todos and toggle all DOM methods

var handlers = {
	
	toggleAll: function(){
		todoList.toggleAll();
	},
	
	addTodo: function(){
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	
	changeTodo: function(){
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput = '';
		changeTodoTextInput = '';
		view.displayTodos();
	},
	
	deleteTodo: function(position){
		todoList.deleteTodo(position);
		view.displayTodos();
	},
	
	toggleCompleted: function(){
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.value);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();
	},
	
	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodos();
	}
};

var view = {
	
	//create an li element for every todo
	displayTodos: function(){
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		
		todoList.todos.forEach(function(todo, position) {
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';
			
			if(todo.completed === true){
				todoTextWithCompletion = '[X] ' + todo.todoText;
			} else {
				todoTextWithCompletion = '[ ] ' + todo.todoText;
			}
			
			todoLi.id = position;
		// 	//each li element should contain .todoText
		// 	//each li element should show .completed
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}, this)
		
	},
	
	//there should be a delete button for each todo
	createDeleteButton: function(){
		
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
			
	},
	
	setUpEventListeners: function(){
		
		var todosUl = document.querySelector('ul');

		//delete button should have access to todo id
		todosUl.addEventListener('click', function(event){
		console.log(event.target.parentNode.id);
	
		var elementClicked = event.target;
			if(elementClicked.className === 'deleteButton'){
			handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();



