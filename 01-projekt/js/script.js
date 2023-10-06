let dark=0

function SwitchDL(){
    
    if(dark == 0){
        document.body.style.backgroundImage = "url('./images/dark.jpeg')";
        document.body.style.color = "white";
        document.getElementById("container").style.backgroundColor = " rgba(60, 60, 60, 0.6)";
        var p = document.querySelectorAll("p");
        p.forEach(p => {p.style.color="rgb(210, 210, 210)"});
        var classname = document.querySelectorAll(".classname");
        classname.forEach(classname => {classname.style.color="rgb(247, 238, 238)"});
        
        var div = document.querySelectorAll(".lesson");
        div.forEach(div => {div.style.backgroundColor="rgb(35, 35, 35)"; div.style.border = "2px solid rgb(196, 161, 219)"});
        dark=1;
        
    }
    else{
        document.body.style.backgroundImage = "url('./images/light.jpeg')";
        document.body.style.color = "black";
        document.getElementById("container").style.backgroundColor = "rgba(243, 236, 236, 0.685)";
        var p2 = document.querySelectorAll("p");
        p2.forEach(p2 => {p2.style.color="rgb(68, 68, 68)"}); 
        var classname2 = document.querySelectorAll(".classname");
        classname2.forEach(classname2 => {classname2.style.color="black"});
        
        var div2 = document.querySelectorAll(".lesson");
        div2.forEach(div2 => {div2.style.backgroundColor="rgb(247, 238, 238)"; div2.style.border = "2px solid black"});
        
        
        dark=0;
        
    }
}