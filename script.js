// let todoList = {
//   todos: [],
//   addTodo: function(todoText) {
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//   },
//   changeTodo: function(position, todoText) {
//     this.todos[position].todoText = todoText;
//   },
//   deleteTodo: function(position) {
//     this.todos.splice(position, 1);
//   },
//   toggleCompleted: function(position) {
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//   },
//   toggleAll: function() {
//     let totalTodos = this.todos.length;
//     let completedTodos = 0;

//     this.todos.forEach(function(todo) {
//       if (todo.completed === true) {
//         completedTodos++;
//       }
//     });

//     //* Old forEach ( This is the same as the NEW forEach() below )
//     // if (completedTodos === totalTodos) {
//     //   this.todos.forEach(function(todo) {
//     //     todo.completed = false;
//     //   });
//     // } else {
//     //   this.todos.forEach(function(todo) {
//     //     todo.completed = true;
//     //   });
//     // }

//     this.todos.forEach(function(todo) {
//       if (completedTodos === totalTodos) {
//         todo.completed = false;
//       } else {
//         todo.completed = true;
//       }
//     });
//   }
// };

// var handlers = {
//   addTodo: function() {
//     const textInput = document.getElementById("addTodoTextInput");
//     todoList.addTodo(textInput.value);
//     textInput.value = "";
//     views.displayTodos();
//     // console.log(textInput.innerText);

//     // if (textInput.value === "") {
//     //   displayList.innerHTML = "Nothing To Add";
//     // }
//   },
//   changeTodo: function() {
//     const changeTodoPosition = document.getElementById("changeTodoPosition");
//     const changeTodoText = document.getElementById("changeTodoTextInput");

//     if (todoList.todos.length === 0) {
//       displayList.innerHTML = "Todo List Is Empty, Nothing To Change";
//     }

//     todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
//     //* Clear Input
//     changeTodoPosition.value = "";
//     changeTodoText.value = "";
//     views.displayTodos();
//   },
//   deleteTodo: function(position) {
//     if (todoList.todos.length === 0) {
//       displayList.innerHTML = "Todo List Is Empty, Nothing To Delete";
//     }

//     todoList.deleteTodo(position);
//     views.displayTodos();
//   },
//   toggleTodo: function() {
//     const toggleTodoPosition = document.getElementById("toggleTodoPosition");

//     if (todoList.todos.length === 0) {
//       displayList.innerHTML = "Todo List Is Empty, Nothing To Toggle";
//     }
//     todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
//     toggleTodoPosition.value = "";
//     views.displayTodos();
//   },
//   toggleAll: function() {
//     if (todoList.todos.length === 0) {
//       displayList.innerHTML = "Can't Toggle Nothing!";
//     } else {
//       todoList.toggleAll();
//       displayList.innerHTML = "Toggled All!";
//     }
//     views.displayTodos();
//   }
// };

// let views = {
//   displayTodos: function() {
//     let todoUl = document.getElementById("displayList");
//     todoUl.innerHTML = "";

//     //* If No Todos, display Empty Message
//     if (todoList.todos.length === 0) {
//       displayList.innerHTML = "Todo List Is Empty, Please Add Todo";
//     }

//     //* Old For Loop ( This is the same as the forEach() below )
//     // for (i = 0; i < todoList.todos.length; i++) {
//     //   let todoLi = document.createElement("li");
//     //   let todo = todoList.todos[i];
//     //   var todoTextWithCompletion = "";

//     //   if (todo.completed === true) {
//     //     todoTextWithCompletion = `(x) ${todo.todoText}`;
//     //   } else {
//     //     todoTextWithCompletion = `( ) ${todo.todoText}`;
//     //   }

//     //   todoLi.id = i;
//     //   todoLi.textContent = todoTextWithCompletion;
//     //   todoLi.appendChild(this.createDeleteBtn());
//     //   todoUl.appendChild(todoLi);
//     // }

//     todoList.todos.forEach(function(todo, position) {
//       let todoLi = document.createElement("li");
//       var todoTextWithCompletion = "";

//       if (todo.completed === true) {
//         todoTextWithCompletion = `(x) ${todo.todoText}`;
//       } else {
//         todoTextWithCompletion = `( ) ${todo.todoText}`;
//       }

//       todoLi.id = position; //* position replaces [i]
//       todoLi.textContent = todoTextWithCompletion;
//       todoLi.appendChild(this.createDeleteBtn());
//       todoUl.appendChild(todoLi);
//     }, this); //* 'this' here refers back to the views
//   },
//   createDeleteBtn: function() {
//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.className = "deleteBtn";

//     return deleteButton;
//   },
//   setupEventListeners: function() {
//     var todosUl = document.querySelector("ul");
//     todosUl.addEventListener("click", function(event) {
//       let elementClicked = event.target;

//       if (elementClicked.className === "deleteBtn") {
//         handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
//       }
//     });
//   }
// };

// views.setupEventListeners();

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

// let name = {
//   names: ["nathan", "Steve", "Dave"]
// };

// name.names.forEach(function(names) {
//   console.log(names);
// });

// fire = bool => {
//   let foo = "bar";
//   if (bool) {
//     // var foo = "bar";
//     console.log(foo);
//   } else {
//     console.log(foo);
//   }
// };

// fire(false);

// var hero = {
//   name: "john Doe",
//   getSecretIdentity: function() {
//     return this.name;
//   }
// };

// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// let vals = [1, 2, 3, undefined, 4, 5];

// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return "Number is Odd";
//   }
// }

// isOdd = x => x % 2 != 0;

// evenVals = vals.filter(isEven);
// vals = vals.filter(x => !(x % 2));

// console.log(vals);

// class Counter {
//   constructor(start, wait) {
//     this.count = start;
//     // this.p = document.createElement("p");
//     this.p = document.querySelector(".lrnClass");

// let p = document.createElement("p");
// let node = document.createTextNode(this.count);
// p.appendChild(node);

// let element = document.querySelector(".lrnClass");
// element.appendChild(p);

//     setInterval(() => {
//       this.count++;
//       this.p.innerText = this.count;
//     }, wait);
//   }
// }

// function setup1() {
//   const counter1 = new Counter(0, 1000);
// }

// setup1();

// function setup1() {
//   const counter1 = new Counter(100, 500);
// }
// function setup2() {
//   const counter2 = new Counter(200, 500);
// }
// function setup3() {
//   const counter3 = new Counter(300, 500);
// }

// setup1();
// setup2();
// setup3();

// const twoSum = (nums, target) => {
//   debugger;
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
//============================================================
//Add two sums together to equal a selected Value
// const twoSum2 = (nums, target) => {
//   let diff = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (diff.hasOwnProperty(nums[i])) return [diff[nums[i]], i];
//     diff[target - nums[i]] = i;
//   }
// };

// console.log(twoSum2([2, 7, 11, 15], 26));

//============================================================

// const nameParts = ["Mrs.", "Anne", "Marie", "Stuart"];

// const [salutation, firstName, middleName, lastName] = nameParts;

// const [first, second, , last] = nameParts;

// console.log(`hello ${first} ${second} ${last}!`);

//============================================================

//============================================================
//! Learning Reduce()

// let sum = 0;
// let numbers = [1, 2, 3, 4, 5];

// let reduction = numbers.reduce((a, b) => a - b);

// console.log(reduction);

// let orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 }
// ];

// let totalAmount = 0;
// for (let i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount;
// }

// console.log(totalAmount);

// let totalAmount = orders.reduce((x, order) => x + order.amount, 0);

// console.log(totalAmount);

//============================================================
//! using Map() with fill()

// vals = Array(100)
//   .fill()
//   .map(Math.random);

// console.log(vals);

//! Learning Map()

// let vals = [1, 2, 3, 4, 5];

// multiplier = x => x * 2;

// let doubler = vals.map(multiplier);

// console.log(doubler);

// var animals = [
//   { name: "Fluffykins", species: "rabbit" },
//   { name: "Caro", species: "dog" },
//   { name: "Hamilton", species: "dog" },
//   { name: "Harold", species: "fish" },
//   { name: "Ursula", species: "cat" },
//   { name: "Jimmy", species: "fish" }
// ];

// let animalNames = animals.map(x => x.name);

// let eachAnimal = animals.map(x => `${x.name} is a ${x.species}`);

// console.log(eachAnimal);

//============================================================
//! using bind()

// let dog = {
//   sound: "woof",
//   talk: function() {
//     console.log(this.sound);
//   }
// };

// //* You Must bind (dog.talk) to dog object
// let dogTalk = dog.talk.bind(dog);
// dogTalk();

// //* create button, add click event that displays dog.sound
// let button = document.createElement("button");
// let buttonName = document.createTextNode("button");
// button.appendChild(buttonName);
// document.getElementById("test").appendChild(button);

// let para = document.createElement("p");
// let paraText = (para.innerText = dog.sound);

// button.addEventListener("click", function() {
//   document.getElementById("test").appendChild(para);
// });

// let p = document.getElementById("p").innerText;
// console.log(p);

//============================================================
//!

// let li = document.querySelectorAll("li");

// let test = document.getElementById("test");
// let newUl = document.createElement("ul");
// let newLi = document.createElement("li");
// newUl.appendChild(newLi);
// test.appendChild(newUl);
// newLi.innerText = "test";

// // //* this takes each li and put them into an array
// let li_array = Array.prototype.slice.call(li);

// console.log(li_array);

// li_array.pop();

// console.log(li_array);

// li_array.pop();

// console.log(li_array);

//============================================================
//!

// let numberA = 27;
// let stringA = "92";

// let toString = String(numberA);
// let toNumber = Number(stringA);

// console.log(toString);
// console.log(toNumber);

//==================================================
//! RegEx

// let str = "I love JavaScript";

// let regex = /java|php|JavaScript/;

// let result = str.match(regex);

// console.log(result);

//==================================================
//! Create Server

let http = require("http"); //access to HTTP module (to create server)
let dt = require("./myfirstmodule");
let ourApp = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  // console.log(req.url);
  if (req.url == "/") {
    res.end(`Hello, and Welcome to our Homepage ${dt.myDateTime()}`);
  }
  if (req.url == "/about") {
    res.end("About Page");
  }
});

ourApp.listen(3000);
