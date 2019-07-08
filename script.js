// const button = document.getElementById('button').innerText

// button

let todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your Todo List Is Empty");
    } else {
      // console.log(this.todos)
      for (i = 0; i < this.todos.length; i++) {
        // console.log(this.todos[i].todoText)
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
        console.log("current Completion before: ", this.todos[i].completed);
      }
    }
    if (completedTodos === totalTodos) {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
        console.log(
          "current Completion after toggle: ",
          this.todos[i].completed
        );
      }
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

todoList.addTodo("Test 1");
todoList.addTodo("Test 2");
// todoList.toggleCompleted(0)
// todoList.toggleCompleted(1)
todoList.toggleAll();
