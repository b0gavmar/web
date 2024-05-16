const url = "https://vvri.pythonanywhere.com/api/courses";

function fetchData() {
fetch(url, {
  method: "GET",
  headers: {
  "Content-type": "application/json; charset=UTF-8",
  }
})
  .then(response => response.json())
  .then(data => {
      if (data)
        data.forEach(element => {
            console.log(element)
        })
  })
  .catch(error => console.log("Hiba történt: " + error))
}

async function fetchDataAsync() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
      "Content-type": "application/json; charset=UTF-8",
      }
    })
    const data = await response.json()
    if (data)
        data.forEach(element => {
            console.log(element)
    })
  

  } catch(error) { 
    console.log("Hiba történt: " + error)
  }
}

const fetchDataAsyncArrow = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
      "Content-type": "application/json; charset=UTF-8",
      }
    })
    const data = await response.json()
    return data
  } catch(error) { 
    console.log("Hiba történt: " + error)
  }
}

const displayData = async () => {
  const data = await fetchDataAsyncArrow()
  if (data)
    data.forEach(element => {
        console.log(element)
    })
}


// fetchData();
// fetchDataAsync();
displayData()
