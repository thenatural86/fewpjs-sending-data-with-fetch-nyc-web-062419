// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name,
      email
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      document.body.innerHTML = object["id"];
    })
    .catch(function(error) {
      document.body.innerHTML = error.message;
    });
}

// fetch("http://localhost:3000/dogs", configObject)
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => alert("bad moon rising"));
// console.log(error.message);
