function Load(){
    fetch("https://vvri.pythonanywhere.com/api/courses")
    .then(response => response.json())
    .then(json => {
        let li = ``;
        json.forEach(course => {
            li += `
            <div>
                ${course.id}. 
                ${course.name}   
            </div>`;
        });
    document.getElementById("courses").innerHTML = li;
});
}



function AddCourse(){
    let kNev = document.getElementById("knev").value;
    fetch("https://vvri.pythonanywhere.com/api/courses", {
        // Metódus hozzáadása
        method: "POST",
          
        // Küldendő test vagy tartalom hozzáadása
        body: JSON.stringify({
            name: kNev,
        }),
         
        // Fejlécek hozzáadása a kéréshez
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    Load(); //nem mukszik
}


function SearchCourse(){
    let sorSzam = parseInt(document.getElementById("sorszam").value);
    fetch(`https://vvri.pythonanywhere.com/api/courses/${sorSzam}`)
    .then(response => response.json())
    .then(course => {
        let li = `<div>
                        ${course.id}. ${course.name} 
                        <br><br>
                        Diákok:
                        <list>
                            <ul>
                        `;

        course.students.forEach(student =>{
            li+=`<li>id:${student.id} - név:${student.name} </li>`;
        });
        li+=`</ul></list></div>`;
    document.getElementById("courses").innerHTML = li;
});
}


function AddStudent(){
    fetch(`https://vvri.pythonanywhere.com/api/courses/${sorSzam}`, {
     
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
});
}