fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        let li = `<tr><th>Name</th><th>Email</th></tr>`;
        json.forEach(todo => {
            li += `<tr>
                <td>${todo.title} </td>
                <td>${todo.completed}</td>        
            </tr>`;
        });
    document.getElementById("users").innerHTML = li;
});

fetch("https://jsonplaceholder.typicode.com/todos", {
   // Metódus hozzáadása
   method: "POST",
     
   // Küldendő test vagy tartalom hozzáadása
   body: JSON.stringify({
       title: "post",
       completed: false,
   }),
    
   // Fejlécek hozzáadása a kéréshez
   headers: {
       "Content-type": "application/json; charset=UTF-8"
   }
})

// Konvertálás JSON-ba
.then(response => response.json())

// Az eredmények megjelenítése a konzolon
.then(json => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos/1", {
     
    // Metódus hozzáadása
    method: "PUT",
     
    // Küldendő test vagy tartalom hozzáadása
    body: JSON.stringify({
        userId: 1,
        id: 1,
        title: "put",
        completed: false,
    }),
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => response.json())
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json));


fetch("https://jsonplaceholder.typicode.com/todos/2", {
     
    // Metódus hozzáadása
    method: "PATCH",
     
    // Küldendő test vagy tartalom hozzáadása
    body: JSON.stringify({
        title: "patch",
        completed: false,
    }), // Csak a módosítani kívánt adatokat kell küldeni
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => response.json())
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json));


fetch("https://jsonplaceholder.typicode.com/todos/3", {
     
    // Metódus  hozzáadása
    method: "DELETE",
     
    // Fejlécek hozzáadása a kéréshez
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Konvertálás JSON-ba
.then(response => {
    // Ha a válasz státusza OK, akkor visszatérünk egy üres JSON objektummal
    if (response.ok) {
        return response.json();
    }
    // Ha a válasz státusza nem OK, akkor dobunk egy hibát
    throw new Error('Network response was not ok.');
})
 
// Az eredmények megjelenítése a konzolon
.then(json => console.log(json))
// Hibakezelés
.catch(error => console.error('There was a problem with the fetch operation:', error));