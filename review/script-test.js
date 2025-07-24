// ARRAYS

const numbers = [99, 5, 8, 16];

// length number of elements in array
numbers.length;

numbers.push(10);

// iterate through each item in the array and perform a task
numbers.forEach((number) => console.log(number));

// modifies each element in the array
numbers.map((number) => number * 2);

// returns the first value that meets the condition in the callback
numbers.find((number) => number < 8);

// returns an array of the items that match the conditions
numbers.filter((number) => number > 10);

// returns a boolean value - is there at least one item that matches the condition
numbers.some((number) => number !== 0);

// FETCH API - fetch data from server to display in UI

// fetch data - returns response - convert to js object form json
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
