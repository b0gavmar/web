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

async function AddCourse(){
  if(kNev != NaN){
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          name: kNev,
        }),
      })
      const data = await response.json()
      if(data){
          console.log("Sikeres hozzáadás");
      }

    } catch(error) { 
      console.log("Hiba történt: " + error)
    }
  }
  else{
    console.log("Adjon meg kurzus nevet")
  }
}

async function SearchCourse(){
    if(Number.isNaN(kId) == true){
          try {
            const response = await fetch(url, {
              method: "GET",
              headers: {
              "Content-type": "application/json; charset=UTF-8",
              }
            })
            const data = await response.json();
            let li = `<div>`;
            if (data){
              
                data.forEach(element => {
                  
                  if(element.name == kNev){
                    li+=`${element.id}. ${element.name} 
                        <br><br>
                        Diákok:
                        <list>
                            <ul>
                        `;
                        element.students.forEach(student =>{
                            li+=`<li>id:${student.id} - név:${student.name} </li>`;
                        });
                        
                    }
                });
            }
            else{
              li+=`<div>Nincs ilyen kurzus</div>`;
            }
            li+=`</ul></list></div>`;
                document.getElementById("courses").innerHTML = li;
        
          } catch(error) { 
            console.log("Hiba történt: " + error)
          }
    }
    else{
        try{
            const response = await fetch(url+"/"+kId, {
                method: "GET",
                headers: {
                "Content-type": "application/json; charset=UTF-8",
                }
            })
            const course = await response.json()
            if (course){
                
                
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
                            
                      }        

        } 
        catch(error) { 
            console.log("Hiba kurzus kereséskor"+error);
        }
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
    if(Number.isNaN(dId)){
        try {
            const response = await fetch(url2, {
              method: "GET",
              headers: {
              "Content-type": "application/json; charset=UTF-8",
              }
            })
            const students = await response.json();
            if (students){
              
                students.forEach(student => {
                  if(student.name == dNev){
                    fetch(`https://vvri.pythonanywhere.com/api/students/${student.id}`, {
     
                        method: "DELETE",
        
                    })
                  }
                });
                console.log("Diák törölve");
            };         
          }
           catch(error) { 
            console.log("Hiba történt: " + error)
          }
        
    }
    else{
        try {
            const response = await fetch(url2+"/"+dId, {
              method: "DELETE",
              headers: {
              "Content-type": "application/json; charset=UTF-8",
              }
            })
            const students = await response.json();
            if (students){
                    console.log("Diák törölve");
            };         
          }
           catch(error) { 
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
        try {
          console.log(dId);
            const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${dId}`, {
              method: "GET",
              headers: {
              "Content-type": "application/json; charset=UTF-8",
              }
            })
            const diak = await response.json();
            let li="";
            if (diak){
              
              
                    if(diak.id == dId){
                        li = `<div>
                                ${diak.id}. ${diak.name} 
                                <br><br>
                                Adatok változtatása:

                                <div class="flex-container2">
                                    <div>
                                        <input type="string" name="diakkurzust" id="diakkurzus" placeholder="kurzus id">
                                        <input type="string" name="diaknevvalt" id="diaknevvalt" placeholder="új név">
                                        <button onclick="ChangeStudentName(${diak.id});">megváltoztat</button>
                                    </div>

                                </div>
                                
                                </div>`;
                                
                    }
                    if(diak.id == undefined){
                        li ="<div>Nincs ilyen diák</div>";
                    }
                    document.getElementById("courses").innerHTML = li;
      
             
            
          }
          else{
            li ="<div>Nincs ilyen diák</div>";
          }
          document.getElementById("courses").innerHTML = li;
        
          } catch(error) { 
            console.log("Hiba történt: " + error)
          }
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