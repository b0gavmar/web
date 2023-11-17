const tomb = ["","","",""];
var aktual = "red";



function changeColor(element){
    //let index = document.querySelector(".item").dataset.index;                
    let index = element.dataset.index;
    if(tomb[index-1]==""){
        document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = aktual;
        tomb[index-1]=aktual;
        if(aktual == "red")
        {
            aktual = "blue";
            console.log(aktual);
        }
        else{
            aktual = "red";
            console.log(aktual);
        }
    }
    else if(tomb[index-1]=="red"){
        document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = "blue";
        tomb[index-1]="blue";
        aktual = "red";
        console.log(aktual);
    }
    else if(tomb[index-1] =="blue"){
        document.querySelector(".item:nth-of-type("+index+")").style.backgroundColor = "red";
        tomb[index-1]="red";
        aktual = "blue";
        console.log(aktual);
    }
    


    if(tomb[0] == "red"&& tomb[1] == "red" && tomb[2] == "red" && tomb[3] == "red"){
        window.alert("Gratulálunk")
        setTimeout(render,5000);
        tomb[0] = ""; tomb[1] = ""; tomb[2] = ""; tomb[3] = "";

    }
    else if(tomb[0] == "blue"&& tomb[1] == "blue" && tomb[2] == "blue" && tomb[3] == "blue"){
        window.alert("Gratulálunk")
        setTimeout(render,5000);
        tomb[0] = ""; tomb[1] = ""; tomb[2] = ""; tomb[3] = "";
    
    }
}

function render(){
    let elem = document.querySelector(".container");
    elem.remove();
    document.body.innerHTML +=
    `<div class="container">
    <div class="item" onclick="changeColor(this)" data-index="1"></div>
    <div class="item" onclick="changeColor(this)" data-index="2"></div>
    <div class="item" onclick="changeColor(this)" data-index="3"></div>
    <div class="item" onclick="changeColor(this)" data-index="4"></div>
    </div>`;
}
