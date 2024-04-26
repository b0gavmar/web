fetch("https://vvri.pythonanywhere.com/api/courses")
    .then(response => response.json())
    .then(json => {
        let li = `
        

        <table>
            <tr>
                <th>Kurzus sorszáma</th>
                <th>Kurzus neve</th>
                </tr>`
        ;
        json.forEach(course => {
            li += `<tr>
                <td>${course.id} </td>
                <td>${course.name}</td>        
            </tr>`;
        });
        li+="</table>";
    document.getElementById("courses").innerHTML += li;
});

function Post(){
    fetch("https://jsonplaceholder.typicode.com/todos", {
        // Metódus hozzáadása
        method: "POST",
          
        // Küldendő test vagy tartalom hozzáadása
        body: JSON.stringify({
            name: "mukszik a post",
        }),
         
        // Fejlécek hozzáadása a kéréshez
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
     })
}


function Search(){
    let a = parseInt(document.getElementById("sorszam").value);
    console.log(a);
}