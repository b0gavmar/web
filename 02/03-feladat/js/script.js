function veletlenSorrend(){
    let tomb = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
    var szamlalo=0;


    for(let i = 0; i<tomb.length;i++){
        document.getElementById("eredeti").innerHTML += " "+tomb[i]+";";
        //document.getElementById("demo").innerHTML = 5 + 6;
    }

    function legyenVeletlenSorrend(valamiTomb){
        var tomb2 = [];
        let random = Math.floor(Math.random()*valamiTomb.length);

        for(let i=valamiTomb.length-1;i>=0;i--){
            tomb2.push(valamiTomb.splice(random,1));
            random = Math.floor(Math.random()*i);
        }


        

        document.getElementById("container").innerHTML += `<div id="ujtomb${(szamlalo)}"> Az új tömb elemei: </div><br>`;

        for(let i = 0; i<tomb2.length;i++){
            document.getElementById("ujtomb"+szamlalo).innerHTML += `${(tomb2[i])}; `;
        }

        szamlalo+=1;
        console.log(tomb2);
    }

    legyenVeletlenSorrend(tomb);
    legyenVeletlenSorrend([1, 2, 3, 4, 5, 6, 7, 8, 9]);
}



   