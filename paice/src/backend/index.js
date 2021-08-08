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
function post(url, fungsi, data) {
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

let tab = document.getElementById("table")
let tab2 = document.getElementById("table2")

function statistik() {
  tab.innerHTML = "Loading Provinsi..."
  tab2.innerHTML = "";
  function fungsi() {
    var result = "";
      for(var i=0; i<respons.length; i++) {
        result += "<button id=\""+ i + "\" onclick=\"getStatistik(this.id)\">";
        result += respons[i].Province
        result += "</button><br>";
      }
      tab.innerHTML = result;
  }
  get("http://127.0.0.1:5000//statistik", fungsi)
}

function getStatistik(id) {
  var result = "";
  for(var i=0; i<respons.length; i++) {
    if (parseInt(id) === i) {
      result += "<p>Provinsi: " + respons[i].Province +"</p>"
      result += "<p>Kasus: " + respons[i].Cases +"</p>"
      result += "<p>Kasus per 1000 penduduk: " + respons[i].Cases_per_100000_population +"</p>"
      result += "<p>Kematian: " + respons[i].Deaths +"</p>"
      result += "<p>Recoveries: " + respons[i].Recoveries +"</p>"
      result += "<br><hr>";
      break;
    }
  }
  tab2.innerHTML = result;
}

function getHospitalProvince() {
  tab.innerHTML = "Loading Provinsi..."
  tab2.innerHTML = "";
  function fungsi() {
    var result = "";
      for(var i=0; i<respons.length; i++) {
        result += "<button id=\""+ i + "\" onclick=\"getHospitalCity(this.id)\">";
        result += respons[i]
        result += "</button><br>";
      }
      tab.innerHTML = result;
    }
  get("http://127.0.0.1:5000//hospital", fungsi)
}

function getHospitalCity(id) {
  function fungsi() {
  var result = "";
    for(var i=0; i<respons.length; i++) {
      result += "<button id=\""+ i + "\" onclick=\"getHospital(this.id)\">";
      result += respons[i]
      result += "</button><br>";
    }
    tab.innerHTML = result;
  }
  post("http://127.0.0.1:5000//hospital", fungsi, `{"Provinsi":` + id +`}`)
}

function getHospital(id) {
  tab2.innerHTML = "Loading Rumah Sakit..."
  function fungsi() {
    var result = "";
    if (respons.length == 0) {
      tab2.innerHTML = "Tidak ada data"
    }
    else {
        for(var i=0; i<respons.length; i++) {
          result += "<p>Nama Rumah Sakit: " + respons[i].Nama +"</p>"
          result += "<p>Alamat: " + respons[i].Alamat +"</p>"
          result += "<p>Ketersediaan: " + respons[i].Ketersediaan +"</p>"
          result += "<p>Antrian Pasien: " + respons[i].Antrian_Pasien +"</p>"
          result += "<p>Waktu Update: " + respons[i].Waktu_Update +"</p>"
          result += "<br><hr>";
        }
        tab2.innerHTML = result;
    }
  }
  post("http://127.0.0.1:5000//hospital", fungsi,  `{"Kota":` + id +`}`)
}
