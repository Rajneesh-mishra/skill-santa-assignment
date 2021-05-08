// 6. Write a JavaScript program to pass a 'JavaScript function' as
// parameter.

const greetUser = (username) => {
  alert(`hello ${username}.`);
};

const executeFunction = (func) => {
  func("Rajneesh");
};

executeFunction(greetUser);
