function objekt(){
    let fizetes = {
        Anna : 2100,
        Cecil : 1890,
        Emil : 2050,
        Gerald : 2920
    }
    
    let osszegek = Object.values(fizetes);
    let osszeg = 0;

    osszegek.forEach((penz) =>{
        osszeg += penz;
    });

    console.log(osszeg);
    document.getElementById("kiiras").innerHTML += osszeg;
}