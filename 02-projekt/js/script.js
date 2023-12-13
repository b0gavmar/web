var elements = ["a","a","b","b","c","c","d","d","e","e","f","f"];
var tomb = [];
var clicked = 0;
var clickedIndex = [];
var clickedValue1;
var clickedValue2;
var talalat = 0;

function Random(){   
        let random = Math.floor(Math.random()*elements.length);
        console.log("hossz:"+elements.length)
        console.log("random, ami hossz-1, max11:"+random);

        for(let i=elements.length-1;i>=0;i--){
            tomb.push(elements.splice(random,1));
            random = Math.floor(Math.random()*i);
            console.log(random);
        }
        console.log(tomb);
}

function TurnUp(clickedCard){
    let a =document.querySelector(".card:nth-of-type("+clickedCard.dataset.index+")");
    if(clickedCard.dataset.value=="a"){
        a.classList.add("duck");
    }
    else if(clickedCard.dataset.value=="b"){
        a.classList.add("kreon");
    }
    else if(clickedCard.dataset.value=="c"){
        a.classList.add("weharharhar");
    }
    else if(clickedCard.dataset.value=="d"){
        a.classList.add("zsoli");
    }
    else if(clickedCard.dataset.value=="e"){
       a.classList.add("ady");
    }
    else if(clickedCard.dataset.value=="f"){
        a.classList.add("aaa");
    }
}

function Disappear(){
    for(let l=0;l<2;l++){
        console.log(clickedIndex);
        document.querySelector(".card:nth-of-type("+clickedIndex[l]+")").style.visibility = 'hidden';
    }
    console.log(clickedValue1);
    console.log(clickedValue2);
    talalat+=1;
    if(talalat == 6){
        alert("Gratulálok!");
        setTimeout(() => {
            Render();
        }, 5000); 
    }
}

function TurnBack(){
    for(let k=0;k<2;k++){
        document.querySelector(".card:nth-of-type("+clickedIndex[k]+")").classList = "card";
    }
    clicked =0;
    clickedIndex = [];
}

function Turn(clickedCard){
    console.log(clickedCard);
    if(clicked+1 ==2){
        console.log(clickedIndex[0]);
        console.log(clickedCard.dataset.index);
        if(clickedIndex[0]== clickedCard.dataset.index){

        }
        else{
            clickedIndex.push(clickedCard.dataset.index);
            console.log(clickedIndex);
            clicked+=1;
            clickedValue2=clickedCard.dataset.value;
            TurnUp(clickedCard);
            
            if(clickedValue1 == clickedValue2){
                setTimeout(() => {
                    Disappear();
                }, 1000);
            }
    
            setTimeout(() => {
                TurnBack();
            }, 1000); 
        }    
    }
    else if(clicked >=2){

    }
    else{
        clickedIndex.push(clickedCard.dataset.index);
        console.log(clickedIndex);
        clicked+=1;
        clickedValue1=clickedCard.dataset.value;
        TurnUp(clickedCard);
    } 
}

function Render(){
    Random();
    document.getElementById("flex-container").innerHTML ="";
    for(let j=1;j<=tomb.length;j++){
        console.log(tomb[j-1]);
        document.getElementById("flex-container").innerHTML += '<div class="card" onclick="Turn(this)" data-value="'+tomb[j-1]+'" data-index="'+j+'"></div>';
    } 
}
