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
let arrayProvRS = []
let arrayKotaRS = []
let ProvinsiRS = ""
let arrayProvOks = []
let arrayKotaOks = []
let ProvinsiOks = ""
let arrayProvVak = []
let arrayKotaVak = []
let ProvinsiVak = ""

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
  get("http://127.0.0.1:5000/statistik", fungsi)
}

function getStatistik(id) {
  var result = "";
  for(var i=0; i<respons.length; i++) {
    if (parseInt(id) === i) {
      result += "<p>Provinsi: " + respons[i].Province +"</p>"
      result += "<p>Kasus: " + respons[i].Cases +"</p>"
      result += "<p>Kasus per 1000 penduduk: " + respons[i].Cases_per_100000_population +"</p>"
      result += "<p>Kematian: " + respons[i].Deaths +"</p>"
      result += "<p>Kesembuhan: " + respons[i].Recoveries +"</p>"
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
      arrayProvRS = respons
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
    arrayKotaRS = respons
    ProvinsiRS = arrayProvRS[parseInt(id)]
    tab.innerHTML = result;
  }
  post("http://127.0.0.1:5000/hospital", fungsi, `{"Provinsi":"` + arrayProvRS[parseInt(id)] +`"}`)
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
  post("http://127.0.0.1:5000/hospital", fungsi,  `{"Kota":"` + arrayKotaRS[parseInt(id)] +`", "Provinsi":"`+ProvinsiRS+`"}`)
}

function getOxygenProvince() {
  tab.innerHTML = "Loading Provinsi..."
  tab2.innerHTML = "";
  function fungsi() {
    var result = "";
      for(var i=0; i<respons.length; i++) {
        result += "<button id=\""+ i + "\" onclick=\"getOxygenCity(this.id)\">";
        result += respons[i]
        result += "</button><br>";
      }
      arrayProvOks = respons
      tab.innerHTML = result;
    }
  get("http://127.0.0.1:5000//oksigen", fungsi)
}

function getOxygenCity(id) {
  tab2.innerHTML = "Loading Kota atau Kabupaten (agak lama)..."
  function fungsi() {
  var result = "";
    for(var i=0; i<respons.length; i++) {
      result += "<button id=\""+ i + "\" onclick=\"getOxygen(this.id)\">";
      result += respons[i]
      result += "</button><br>";
    }
    arrayKotaOks = respons
    ProvinsiOks = arrayProvOks[parseInt(id)]
    tab2.innerHTML = ""
    tab.innerHTML = result;
  }
  post("http://127.0.0.1:5000/oksigen", fungsi, `{"Provinsi":"` + arrayProvOks[parseInt(id)] +`"}`)
}

function getOxygen(id) {
  tab2.innerHTML = "Loading Oksigen (agak lama)..."
  function fungsi() {
    var result = "";
    if (respons.length == 0) {
      tab2.innerHTML = "Tidak ada data"
    }
    else {
        for(var i=0; i<respons.length; i++) {
          result += "<p>Nama Penyedia Oksigen: " + respons[i].Nama +"</p>"
          result += "<p>Alamat: " + respons[i].Alamat +"</p>"
          result += "<p>No. Telepon: " + respons[i].No_Telepon +"</p>"
          result += "<p>URL: " + respons[i].URL +"</p>"
          result += "<p>Waktu Update: " + respons[i].Waktu_Update +"</p>"
          result += "<br><hr>";
        }
        tab2.innerHTML = result;
    }
  }
  post("http://127.0.0.1:5000/oksigen", fungsi,  `{"Kota":"` + arrayKotaOks[parseInt(id)] +`", "Provinsi":"`+ProvinsiOks+`"}`)
}

function getVaksinProvince() {
  tab.innerHTML = "Loading Provinsi..."
  tab2.innerHTML = "";
  function fungsi() {
    var result = "";
      for(var i=0; i<respons.length; i++) {
        result += "<button id=\""+ i + "\" onclick=\"getVaksinCity(this.id)\">";
        result += respons[i]
        result += "</button><br>";
      }
      arrayProvVak = respons
      tab.innerHTML = result;
    }
  get("http://127.0.0.1:5000//vaksin", fungsi)
}

function getVaksinCity(id) {
  tab2.innerHTML = "Loading Kota atau Kabupaten (agak lama)..."
  function fungsi() {
  var result = "";
    for(var i=0; i<respons.length; i++) {
      result += "<button id=\""+ i + "\" onclick=\"getVaksin(this.id)\">";
      result += respons[i]
      result += "</button><br>";
    }
    arrayKotaVak = respons
    ProvinsiVak = arrayProvVak[parseInt(id)]
    tab2.innerHTML = ""
    tab.innerHTML = result;
  }
  post("http://127.0.0.1:5000/vaksin", fungsi, `{"Provinsi":"` + arrayProvVak[parseInt(id)] +`"}`)
}

function getVaksin(id) {
  tab2.innerHTML = "Loading Vaksin (agak lama)..."
  function fungsi() {
    var result = "";
    if (respons.length == 0) {
      tab2.innerHTML = "Tidak ada data"
    }
    else {
        for(var i=0; i<respons.length; i++) {
          result += "<p>Nama Penyedia Vaksin: " + respons[i].Nama +"</p>"
          result += "<p>Alamat: " + respons[i].Alamat +"</p>"
          result += "<p>No. Telepon: " + respons[i].No_Telepon +"</p>"
          result += "<p>URL: " + respons[i].URL +"</p>"
          result += "<p>Waktu Update: " + respons[i].Waktu_Update +"</p>"
          result += "<br><hr>";
        }
        tab2.innerHTML = result;
    }
  }
  post("http://127.0.0.1:5000/vaksin", fungsi,  `{"Kota":"` + arrayKotaVak[parseInt(id)] +`", "Provinsi":"`+ProvinsiVak+`"}`)
}

function getFeed() {
  tab.innerHTML = "Loading Feed..."
  tab2.innerHTML = "";
  function fungsi() {
    var result = "";
      for(var i=0; i<respons.length; i++) {
        result += "<button id=\""+ i + "\">";
        result += respons[i]
        result += "</button><br>";
      }
      tab.innerHTML = result;
    }
  get("http://127.0.0.1:5000//berita", fungsi)
}