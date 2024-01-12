//const arrowFuggveny = (parameter) => 1*1;
var szoveg = "";
var forditott = "";

const Reverse = () =>  { szoveg = document.getElementById("txt").value;for(let i = szoveg.length-1; i>=0;i--){forditott+=szoveg[i];}};

const Kiiras = () => {Reverse(); document.getElementById("output").innerHTML = forditott;console.log(szoveg); szoveg = ""; forditott=""};


//{ let a = document.getElementById("txt").value;; document.getElementById("output").innerHTML += a}