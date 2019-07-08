const dispTodosBtn = document.getElementById("dispTodosBtn");
const toggleAllBtn = document.getElementById("toggleAllBtn");
const btnDisplay = document.getElementById("btnDisplay");

dispTodosBtn.addEventListener("click", () => {
  dispTodosBtn.classList.toggle("active");
  todoList.displayTodos();
  for (i = 0; i < todoList.todos.length; i++) {
    btnDisplay.innerHTML = todoList.todos[i].todoText;
  }
});

toggleAllBtn.addEventListener("click", () => {
  toggleAllBtn.classList.toggle("active");
  todoList.toggleAll();
  todoList.displayTodos();
});

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
    debugger;
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

todoList.addTodo("Test 1");
// todoList.addTodo("Test 2");
// todoList.toggleCompleted(0);
// todoList.toggleCompleted(1)
// todoList.toggleAll();

//===================================================
// OBJECT COMPARISONS

// var myHouse1 = { color: "blue" };
// var myHouse2 = { color: "blue" };
// myHouse2.color = "red";
// console.log(myHouse1); //blue
// console.log(myHouse2); //red
