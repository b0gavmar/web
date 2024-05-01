var kNev = "";
var kId;
var dNev = "";
var dId;
var kurzusokSzama;
var diakokSzama;

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

function Basic(){
    document.getElementById("kid").addEventListener("input", function() {
        kId = parseInt(document.getElementById("kid").value);
        kNev = NaN;
        document.getElementById("knev").value = "";
    });
    
    document.getElementById("knev").addEventListener("input", function() {
        kNev = document.getElementById("knev").value;
        kId = NaN;
        document.getElementById("kid").value ="";
    });
    
    document.getElementById("dnev").addEventListener("input", function() {
        dNev = document.getElementById("dnev").value;
        dId =NaN;
        document.getElementById("did").value ="";
    });

    document.getElementById("did").addEventListener("input", function() {
        dId = parseInt(document.getElementById("did").value);
        dNev =NaN;
        document.getElementById("dnev").value ="";
    });

    document.getElementById("kid").value = parseInt();
    document.getElementById("knev").value = "";
    document.getElementById("dnev").value = "";
    document.getElementById("did").value = parseInt();
}

function LoadCourses(){
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
    }).catch(error => console.error('Hiba:', error));
}



function AddCourse(){
    if(kNev == "" || kNev ==" ")
    {
        alert("Adjon a kurzusnak nevet!");
    }
    else{
        fetch("https://vvri.pythonanywhere.com/api/courses", {

            method: "POST",
              
            body: JSON.stringify({
                name: kNev,
            }),
             
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(() => {
            console.log("Kurzus sikeresen hozzáadva");
            LoadCourses();
        }).catch(error=>(console.log("Hiba kurzus hozzáadásakor: "+ error)));
    }
    
}


function SearchCourse(){
    //console.log(kId);
    if(Number.isNaN(kId) == true){
        fetch(`https://vvri.pythonanywhere.com/api/courses`)
        .then(response => response.json())
        .then(courses => {
            let li = `<div>`;
                courses.forEach(course =>{
                if(course.name == kNev){
                    li+=`${course.id}. ${course.name} 
                    <br><br>
                    Diákok:
                    <list>
                        <ul>
                    `
                    course.students.forEach(student =>{
                        li+=`<li>id:${student.id} - név:${student.name} </li>`;
                    });
                    li+=`</ul></list></div>`;
                }
            });
            
            li+=`</ul></list></div>`;
            document.getElementById("courses").innerHTML = li;
                    
        }).catch(() => (console.log("Hiba kurzus kereséskor")));
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
     
        method: "POST",
         
        body: JSON.stringify({
            name: dNev,
            course_id: kId,
        }),
         
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        }).then(response => response.json())
        .then(() =>{
            console.log("Diák hozzáadva")
        }).catch(error => (console.log("Hiba diák hozzáadásakor:"+error)));
    }
    
}

function TorolDiakID(){
    let tor;
    return tor;
}

function RemoveStudent(){
    //console.log(dId);
    let torolniAkartDiakId;
    if(Number.isNaN(dId)){
        
        fetch(`https://vvri.pythonanywhere.com/api/students`)
        .then(response => response.json())
        .then(students => {
            students.forEach(student => {
                if(student.name == dNev){
                    fetch(`https://vvri.pythonanywhere.com/api/students/${student.id}`, {
     
                        method: "DELETE",
        
                    })
                }
            });
        })
        .then(() =>{
            console.log("Diák törölve")
        });
    }
    else{
        fetch(`https://vvri.pythonanywhere.com/api/students/${dId}`, {
     
        method: "DELETE",
        
        }).then(response => response.json())
        .then(() =>{
            console.log("Diák törölve")
        });
        /*.catch(error => (console.log("Hiba diák törlésekor: "+error)))*/;
    }
}


//hha túl nagy az id, az nem megy
function SearchStudent(){
    if(Number.isNaN(dId) == true){
        fetch(`https://vvri.pythonanywhere.com/api/students`)
        .then(response => response.json())
        .then(students => {
            let li;
            students.forEach(student => {
                if(student.name == dNev){
                    li = `<div>
                            ${student.id}. ${student.name} 
                            <br><br>
                            Adatok változtatása:

                            
                            </div>`;
                }
            })

            
                document.getElementById("courses").innerHTML = li;
                
                    
        }).catch(error => console.log("Hiba diák keresésekor:"+error));
    }
    else{
        fetch(`https://vvri.pythonanywhere.com/api/students/${dId}`)
        .then(response => response.json())
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