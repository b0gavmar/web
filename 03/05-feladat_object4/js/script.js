let heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"},
    {firstName: "Koppány Attila", lastName: "Tóth-Kalocsai", job: "fortnite esportoló"},
    {firstName: "Mereel", lastName: "Jaster", job: "sereg vezér"},
    {firstName: "Marka", lastName: "Ragnos", job: "sötét Jedi"},
    {firstName: "Miles", lastName: "Morales", job: "pókember"},
    {firstName: "Ezio", lastName: "Auditore", job: "assassin"},
]

function render(){
    let generalt = `<h1 id="elsosor">A hősök felsorolva:</h1><div id="container2">`;
    for(let i=0;i<heroes.length;i++){  
        generalt+= `<div class="hos"> A hős neve: ${heroes[i].lastName} ${heroes[i].firstName},<br> foglalkozása: ${heroes[i].job} </div>`;
    }
    generalt+=`</div>`;
    document.getElementById("container").innerHTML += generalt;
}

function table(){
    let table=`<table><caption>A hősök táblázatban</caption><tr><th>Név</th><th>foglalkozás</th></tr>`;
    for(let i=0;i<heroes.length;i++){
        table+=`<tr><td>${heroes[i].lastName} ${heroes[i].firstName}</td><td>${heroes[i].job}</td></tr>`;
    }
    table+=`</table>`;
    document.getElementById("container3").innerHTML+=table;
}
