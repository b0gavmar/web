function FetchUser(){
  let id = parseInt(document.getElementById("selectedId").value);

  console.log(id);
  fetch('https://jsonplaceholder.org/users/?id=1'+id)
  .then(response => {
    return response.json(); //1 utasitasnal nem kell return a then-nél, ha tobb van akkor return nélkül a következő nem kap adatot
  })
  .then(user => {
    console.log(user);
    consoleKi(user);
    KiIr(user);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}


// Id, kereszt és utónév, telefonszám, 
//email, részletes cím adatok, geolokációs adatok,
//weblap cím, cégadatok.

function consoleKi(user){
    console.log(user.id);
    console.log(user.firstname);
    console.log(user.lastname);
    console.log(user.phone);
    console.log(user.email);
    console.log(user.address.zipcode);
    console.log(user.address.city);
    console.log(user.address.street);
    console.log(user.address.suite);
    console.log(user.address.geo.lat);
    console.log(user.address.geo.lng);
    console.log(user.website);
    console.log(user.company.name);
    console.log(user.company.catchPhrase);
    console.log(user.company.bs);
}

function KiIr(user){
  document.getElementById("ki2").innerHTML = '<div id="ki">';
  document.getElementById("ki").innerHTML += user.id +"<br>" 
  +user.firstname +"<br>" 
  +user.lastname +"<br>" 
  +user.phone +"<br>" 
  +user.email +"<br>" 
  +user.address.zipcode +"<br>" 
  +user.address.city +"<br>" 
  +user.address.street+"<br>" 
  +user.address.suite +"<br>" 
  +user.address.geo.lat +"<br>" 
  +user.address.geo.lng +"<br>" 
  +user.website +"<br>" 
  +user.company.name +"<br>"
  +user.company.catchPhrase +"<br>"
  +user.company.bs +"</div>"
}