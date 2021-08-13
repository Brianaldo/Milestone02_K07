async function fetchText() {
    let response = await fetch('http://127.0.0.1:5000/statistik');
    let data = await response.json();
    console.log(data.Response);
}
fetchText() 