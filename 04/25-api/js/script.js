function FetchZips(){
  let zip = document.getElementById("selectedZip").value;

  fetch('https://hur.webmania.cc/zips/'+zip+'.json')
  .then(response => {
    return response.json(); //1 utasitasnal nem kell return a then-nél, ha tobb van akkor return nélkül a következő nem kap adatot
  })
  .then(zip => {
    console.log(zip);
    KiIr(zip);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

function KiIr(zip){
  //document.getElementById("ki").innerHTML ="";
  
  document.getElementById("ki").innerHTML += zip.zips[0].name + " - " + zip.zips[0].zip;
  document.getElementById("ki").innerHTML +="<br>";
}