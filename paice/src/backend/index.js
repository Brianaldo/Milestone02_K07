// baca file "Baca ini dulu.txt"
let xhttp = new XMLHttpRequest();

// fungsi untuk melakukan HTTP GET method
function get(url, fungsi) {
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
     if (xhttp.readyState === 4)  {
       let serverResponse = JSON.parse(xhttp.responseText);
       respons = serverResponse.Response
       fungsi()
     }
   };
}


// fungsi untuk melakukan HTTP POST method
function post(url, data, fungsi) {
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(data);
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4)  {
        let serverResponse = JSON.parse(xhttp.responseText);
        respons = serverResponse.Response
        fungsi()
      }
    };
  }


// fungsi untuk bikin tabel di html dari array
function makeTableHTML(myArray) {
    var result = "<table border=1>";
    for(var i=0; i<myArray.length; i++) {
        result += "<tr>";
        for(var j=0; j<myArray[i].length; j++){
            result += "<td>"+myArray[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}

tab = document.getElementById("table")
button = document.getElementById("button")
button.addEventListener('click',function() {
    function fungsi(){
      tab.innerHTML = makeTableHTML(respons)
    }
    get("{masukin url yang dicopy disini}/statistik", fungsi)
  })
