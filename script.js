var handlers = {
  addTodo: function() {
    const textInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(textInput.value);
    textInput.value = "";
    views.displayTodos();
  },
  changeTodo: function() {
    const changeTodoPosition = document.getElementById("changeTodoPosition");
    const changeTodoText = document.getElementById("changeTodoTextInput");

    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
    // Clear Input
    changeTodoPosition.value = "";
    changeTodoText.value = "";
    views.displayTodos();
  },
  deleteTodo: function() {
    const deleteTodoPosition = document.getElementById("deleteTodoPosition");

    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    deleteTodoPosition.value = "";
    views.displayTodos();
  },
  toggleTodo: function() {
    const toggleTodoPosition = document.getElementById("toggleTodoPosition");

    todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
    toggleTodoPosition.value = "";
    views.displayTodos();
  },
  toggleAll: function() {
    if (todoList.todos.length === 0) {
      displayList.innerHTML = "Can't Toggle Nothing!";
    } else {
      todoList.toggleAll();
      todoList.displayTodos();
      displayList.innerHTML = "Toggled All!";
    }
    views.displayTodos();
  }
};

let views = {
  displayTodos: function() {
    let todoUl = document.getElementById("displayList");
    todoUl.innerHTML = "";

    // If No Todos, display Empty Message
    if (todoList.todos.length === 0) {
      displayList.innerHTML = "Todo List Is Empty, Please Add Todo";
    }

    for (i = 0; i < todoList.todos.length; i++) {
      let todoLi = document.createElement("li");
      let todo = todoList.todos[i];
      var todoTextWithCompletion = "";

      if (todo.completed === true) {
        todoTextWithCompletion = `(x) ${todo.todoText}`;
      } else {
        todoTextWithCompletion = `( ) ${todo.todoText}`;
      }

      todoLi.textContent = todoTextWithCompletion;
      todoUl.appendChild(todoLi);
    }
  }
};

let todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your Todo List Is Empty");
    } else {
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(X)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });

    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    for (i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};
