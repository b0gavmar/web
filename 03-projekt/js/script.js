var kNev = "";
var kId;
var dNev = "";
var dId;

/*
document.getElementById("kid").addEventListener("input", function() {
    kId = parseInt(document.getElementById("kid").value);
    console.log("asd");
});

document.getElementById("knev").addEventListener("input", event => {
    kNev = document.getElementById("knev").value;
});

document.getElementById("dnev").addEventListener("input", event => {
    dNev = document.getElementById("dnev").value;
});
*/

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
    }).then(function(){
        document.getElementById("kid").addEventListener("input", function() {
            kId = parseInt(document.getElementById("kid").value);
        });
        
        document.getElementById("knev").addEventListener("input", function() {
            kNev = document.getElementById("knev").value;
        });
        
        document.getElementById("dnev").addEventListener("input", function() {
            dNev = document.getElementById("dnev").value;
        });

        document.getElementById("did").addEventListener("input", function() {
            dId = parseInt(document.getElementById("did").value);
        });

        document.getElementById("kid").value = parseInt();
        document.getElementById("knev").value = "";
        document.getElementById("dnev").value = "";
        document.getElementById("did").value = parseInt();
    }).catch(error => console.error('Hiba:', error));
}



function AddCourse(){
    if(kNev == "" || kNev ==" ")
    {
        alert("Adjon a kurzusnak nevet!");
    }
    else{
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
        }).then(a => {
            console.log("Kurzus sikeresen hozzáadva");
            Load();
        }).catch(()=>(console.log("Hiba kurzus hozzáadásakor")));
    }
    
}


function SearchCourse(){
    //console.log(kId);
    if(Number.isNaN(kId) == true){
        Load();
    }
    else{
        fetch(`https://vvri.pythonanywhere.com/api/courses/${kId}`)
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
                    
        }).catch(() => (console.log("Hiba kurzus kereséskor")));
        
    }
}

function AddStudent(){
    if(dNev == "" || typeof kId == null){
        
    }else{
        fetch(`https://vvri.pythonanywhere.com/api/students`, {
     
        // Metódus hozzáadása
        method: "POST",
         
        // Küldendő test vagy tartalom hozzáadása
        body: JSON.stringify({
            name: dNev,
            course_id: kId,
        }),
         
        // Fejlécek hozzáadása a kéréshez
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        }).then(response => response.json())
        .then(diak =>{
            console.log("Diák hozzáadva")
        }).catch(error => (console.log("Hiba diák hozzáadásakor:"+error)));
    }
    
}

function RemoveStudent(){
    //console.log(dId);
    if(Number.isNaN(dId)){

    }
    else{
        fetch(`https://vvri.pythonanywhere.com/api/students/${dId}`, {
     
        // Metódus hozzáadása
        method: "DELETE",
        
        }).then(response => response.json())
        .then(() =>{
            console.log("Diák törölve")
        })
        .then(() => (SearchCourse()))
        /*.catch(error => (console.log("Hiba diák törlésekor: "+error)))*/;
    }
}


//hha túl nagy az id, az nem megy
function SearchStudent(){
    console.log(`https://vvri.pythonanywhere.com/api/students/${dId}`);
    if(Number.isNaN(dId)){

    }else{
        fetch(`https://vvri.pythonanywhere.com/api/students/${dId}`)
        .then(response => response.json())
        /*.then(response => {
            if (!response.ok) {
                throw new Error("A diák nincs.");
            }
            return response.json();
        })*/
        .then(student => {
            let li = `<div>
                            ${student.id}. ${student.name} 
                            <br><br>
                            Adatok változtatása:

                            
                            </div>`;
                document.getElementById("courses").innerHTML = li;
                
                    
        }).catch(error => console.log("Hiba diák keresésekor:"+error));
    }
}