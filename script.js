let todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    //* This is the same as the forEach() below
    // if (completedTodos === totalTodos) {
    //   this.todos.forEach(function(todo) {
    //     todo.completed = false;
    //   });
    // } else {
    //   this.todos.forEach(function(todo) {
    //     todo.completed = true;
    //   });
    // }

    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
};

var handlers = {
  addTodo: function() {
    const textInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(textInput.value);
    textInput.value = "";
    views.displayTodos();
    // console.log(textInput.innerText);

    // if (textInput.value === "") {
    //   displayList.innerHTML = "Nothing To Add";
    // }
  },
  changeTodo: function() {
    const changeTodoPosition = document.getElementById("changeTodoPosition");
    const changeTodoText = document.getElementById("changeTodoTextInput");

    if (todoList.todos.length === 0) {
      displayList.innerHTML = "Todo List Is Empty, Nothing To Change";
    }

    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
    //* Clear Input
    changeTodoPosition.value = "";
    changeTodoText.value = "";
    views.displayTodos();
  },
  deleteTodo: function(position) {
    if (todoList.todos.length === 0) {
      displayList.innerHTML = "Todo List Is Empty, Nothing To Delete";
    }

    todoList.deleteTodo(position);
    views.displayTodos();
  },
  toggleTodo: function() {
    const toggleTodoPosition = document.getElementById("toggleTodoPosition");

    if (todoList.todos.length === 0) {
      displayList.innerHTML = "Todo List Is Empty, Nothing To Toggle";
    }
    todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
    toggleTodoPosition.value = "";
    views.displayTodos();
  },
  toggleAll: function() {
    if (todoList.todos.length === 0) {
      displayList.innerHTML = "Can't Toggle Nothing!";
    } else {
      todoList.toggleAll();
      displayList.innerHTML = "Toggled All!";
    }
    views.displayTodos();
  }
};

let views = {
  displayTodos: function() {
    let todoUl = document.getElementById("displayList");
    todoUl.innerHTML = "";

    //* If No Todos, display Empty Message
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

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteBtn());
      todoUl.appendChild(todoLi);
    }
  },
  createDeleteBtn: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteBtn";

    return deleteButton;
  },
  setupEventListeners: function() {
    var todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function(event) {
      let elementClicked = event.target;

      if (elementClicked.className === "deleteBtn") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

views.setupEventListeners();

// runWithDebugger(
//   (logTenNumbers = () => {
//     for (i = 0; i < 10; i++) {
//       console.log(i);
//     }
//   })
// );

// runWithDebugger = myFunction => {
//   debugger;
//   myFunction();
// };

// setTimeout(function() {
//   console.log("Wake up");
// }, 4000);

// var students = ["Nathan", "Billy", "steve"];

// students.forEach(
//   (logName = name => {
//     console.log(name);
//   })
// );
// console.log("================");
// students.push("Stanley");
// students.forEach(logName);

// console.log("================");

// function forEach(myArray, myFunction) {
//   for (var i = 0; i < myArray.length; i++) {
//     myFunction(myArray[i]);
//   }
// }

// forEach(students, function(student) {
//   console.log(student);
// });

// console.log("================");
// forEach(students, logName);

// multiplyTwoNumbers = (a, b) => {
//   return a * b;
// };

// var theProductOf2And10 = multiplyTwoNumbers(2, 10);
