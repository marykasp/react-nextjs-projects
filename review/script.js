// get jsonplaceholder data of users - create a list item for every user

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // data is a list of user objects
    data.forEach((user) => {
      const markup = `<li>${user.name}</li>`;

      document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
    });
  });

fetch("https://reqres.in/api/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
