function FetchZips(){
    let zip = document.getElementById("selectedZip").value;
  
    fetch('https://hur.webmania.cc/zips/'+zip+'.json')
    .then(response => {
      return response.json(); //1 utasitasnal nem kell return a then-nél, ha tobb van akkor return nélkül a következő nem kap adatot
    })
    .then(zip => {
      console.log(zip);
      //consoleKi(zip);
      KiIr(zip);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }

function KiIr(zip){
    document.getAnimations("ki").innerHTML
    document.getElementById("ki").innerHTML += zip.zip.name;
}