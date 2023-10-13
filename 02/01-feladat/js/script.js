var tomb = ["elem1","elem2","elem3"];

function elsoElemMegjelen(){
    document.getElementById("szoveg").innerHTML = tomb[0];
}

function masodikElemMegjelen(){
    document.getElementById("szoveg").innerHTML = tomb[1];
}

function harmadikElemMegjelen(){
    document.getElementById("szoveg").innerHTML = tomb[2];
}

function osszesElemMegjelen(){
    document.getElementById("szoveg").innerHTML = tomb;
}

function ujElemHozaad(){
    tomb.push(document.getElementById("ujelemszoveg").value);
}

function tombHosszMegjelen(){
    document.getElementById("szoveg").innerHTML = "A tömb "+tomb.length+" elemet tartalmaz.";
}

function indexTorol(){
    var index = document.getElementById("indextorlesszoveg").value;
    tomb.splice(index,1);
}