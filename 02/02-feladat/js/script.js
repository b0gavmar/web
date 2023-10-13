let tomb = [];
let a;
var b;

function hozzaad(){
    a=document.getElementById("ujadat").value;
    b = 0;
    
    for(let elem in tomb)
    {
        if(tomb[elem] == a)
        {
            b=1;
            break;
        }
    }

    if(b==1){

    }
    else if(document.getElementById("ujadat").value == ""){

    }
    else{
        tomb.push(document.getElementById("ujadat").value);
        console.log(document.getElementById("ujadat").value)
        kiir();
    }
    
    
}

function kiir(){
    document.getElementById("container2").innerHTML += `<div>${(tomb[tomb.length-1])}</div>`;
}

//kétszer ugyna az ne és ures mezo se