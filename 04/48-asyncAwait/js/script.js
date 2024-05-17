var kNev = "";
var kId;
var dNev = "";
var dId;
var kurzusokSzama;
var diakokSzama;
const url = "https://vvri.pythonanywhere.com/api/courses";
const url2 = "https://vvri.pythonanywhere.com/api/students";

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

async function fetchCoursesAsync() {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        }
      })
      const data = await response.json();
      if (data){
        let li="";
        data.forEach(course => {
            li += `
            <div class="course" onclick="ShowCourse(this)" data-id='${course.id}'>
                ${course.id}. 
                ${course.name}   
                </div>`;

      });
      document.getElementById("courses").innerHTML = li;
    }
    
  
    } catch(error) { 
      console.log("Hiba történt: " + error)
    }
}

function ShowCourse(ezAKurzus){
    let valahanyadik = parseInt(ezAKurzus.dataset.id);
    kId =valahanyadik;
    SearchCourse();
}

function ShowStudent(ezADiak){
    let valahanyadik = parseInt(ezADiak.dataset.id);
    dId = valahanyadik;
    SearchStudent();
}

async function fetchStudentsAsync() {
    try {
      const response = await fetch(url2, {
        method: "GET",
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        }
      })
      const data = await response.json();
      if (data){
        let li="";
        data.forEach(student => {
            li += `
            <div class="student" onclick="ShowStudent(this)" data-id='${student.id}'>
                ${student.id}. 
                ${student.name}  
                </div>`;

      });
      document.getElementById("courses").innerHTML = li;
    }
    
  
    } catch(error) { 
      console.log("Hiba történt: " + error)
    }
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
            let li2 = "";
                course.students.forEach(student =>{
                    li2+=`<li>id:${student.id} - név:${student.name} </li>`;
                });
            if(li2 == ""){
                li+=`<li>nincsenek diákok</li>`;
            }
            else{
                li+=li2;
            }
                li+=`</ul></list></div>`;
                document.getElementById("courses").innerHTML = li;
                    
        }).catch(() => (console.log("Hiba kurzus kereséskor")));
        
    }
}

async function AddStudent(){
    if(dNev == "" || typeof kId == null){
        
    }
    else{
        try {
            const response = await fetch(url2, {
              method: "POST",
              headers: {
              "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify({
                name: dNev,
                course_id: kId,
              })
            })
            const data = await response.json();
            if (data){
                console.log("Diák hozzáadva");
            }
          
        
          } catch(error) { 
            console.log("Hiba történt: " + error)
          }

    }
    
}

async function RemoveStudent(){
    //console.log(dId);
    let torolniAkartDiakId;
    if(Number.isNaN(dId)){
        /*try {
            const response = await fetch(url, {
              method: "GET",
              headers: {
              "Content-type": "application/json; charset=UTF-8",
              }
            })
            const students = await response.json();
            if (students){
                    students.forEach(student => {
                        if(student.name == dNev){
                            try{
                            const response2 = await fetch(url2, {
                                method: "DELETE",
                                headers: {
                                "Content-type": "application/json; charset=UTF-8",
                                },
                              })
                              const data2 = await response2.json();
                              if (data2){
                                  console.log("Diák törölve");
                              }
                            
                          
                            } catch(error) { 
                              console.log("Hiba történt: " + error)
                            }
                        }
                    });
            };         
          }
           catch(error) { 
            console.log("Hiba történt: " + error)
          }*/
        /*
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
        });*/
    }
    else{
        try{
            const response2 = await fetch(`https://vvri.pythonanywhere.com/api/students/${dId}`, {
                method: "DELETE",
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                },
              })
              const data2 = await response2.json();
              if (data2){
                  console.log("Diák törölve");
              }
            
          
            } catch(error) { 
              console.log("Hiba történt: " + error)
            }
    }
}



async function SearchStudent(){
    if(Number.isNaN(dId) == true){
        try {
            const response = await fetch(url2, {
              method: "GET",
              headers: {
              "Content-type": "application/json; charset=UTF-8",
              }
            })
            const data = await response.json();
            if (data){
              let li="";
              data.forEach(student => {
                if(student.name == dNev){
                    li = `<div>
                            ${student.id}. ${student.name} 
                            <br><br>
                            Adatok változtatása:
                            
                            <div class="flex-container2">
                                <div>
                                    <input type="string" name="diakkurzust" id="diakkurzus" placeholder="kurzus id">
                                    <input type="string" name="diaknevvalt" id="diaknevvalt" placeholder="új név">
                                    <button onclick="ChangeStudentName(${student.id});">megváltoztat</button>
                                </div>

                            </div>
                            
                            </div>`;
                    
                }
      
            });
            document.getElementById("courses").innerHTML = li;
          }
          
        
          } catch(error) { 
            console.log("Hiba történt: " + error)
          }
    }
    else{
        /*try {
            const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${dId}`, {
              method: "GET",
              headers: {
              "Content-type": "application/json; charset=UTF-8",
              }
            })
            const diakok = await response.json();
            if (diakok){
              let li="";
              const elegemvan = jsonParse(diakok);
              diakok.forEach(student => {
                    if(student.name == dNev){
                        let li = `<div>
                                ${student.id}. ${student.name} 
                                <br><br>
                                Adatok változtatása:

                                <div class="flex-container2">
                                    <div>
                                        <input type="string" name="diakkurzust" id="diakkurzus" placeholder="kurzus id">
                                        <input type="string" name="diaknevvalt" id="diaknevvalt" placeholder="új név">
                                        <button onclick="ChangeStudentName(${student.id});">megváltoztat</button>
                                    </div>

                                </div>
                                
                                </div>`;
                        
                    }
                    if(student.id == undefined){
                        li ="<div>Nincs ilyen diák</div>";
                    }
                    
      
              });
            
          }
          else{
            li ="<div>Nincs ilyen diák</div>";
          }
          document.getElementById("courses").innerHTML = li;
        
          } catch(error) { 
            console.log("Hiba történt: " + error)
          }*/
        
        fetch(`https://vvri.pythonanywhere.com/api/students/${dId}`)
        .then(response => response.json())
        .then(student => {
            let li = `<div>
                            ${student.id}. ${student.name} 
                            <br><br>
                            Adatok változtatása:

                            <div class="flex-container2">
                                <div>
                                    <input type="string" name="diakkurzust" id="diakkurzus" placeholder="kurzus id">
                                    <input type="string" name="diaknevvalt" id="diaknevvalt" placeholder="új név">
                                    <button onclick="ChangeStudentName(${student.id});">megváltoztat</button>
                                </div>

                            </div>
                            
                            </div>`;
                if(student.id == undefined){
                    li ="<div>Nincs ilyen diák</div>";
                }
                document.getElementById("courses").innerHTML = li;
                
                    
        }).catch(error => console.log("Hiba diák keresésekor:"+error));
    }
}

async function ChangeStudentName(kapottId){
    try {
        let ujDiakNev = document.getElementById("diaknevvalt").value;
        let diakKurzus = document.getElementById("diakkurzus").value;
        const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${kapottId}`, {
          method: "PUT",
          headers: {
          "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            name: ujDiakNev,
            course_id: diakKurzus,
          })
        })
        const data = await response.json();
        if (data){
            console.log("Diák frissítve");
        }
      
    
      } catch(error) { 
        console.log("Hiba történt: " + error)
      }
}