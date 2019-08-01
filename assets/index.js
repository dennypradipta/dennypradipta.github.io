const colors = [ "#000000", "#1F2041", "#4B3F72", "#6C464E", "#119DA4", "#19647E"];

setInterval(function() {
    const index = Math.floor(Math.random() * 6);
    document.getElementById('app').style.backgroundColor === colors[index] ? change() : document.getElementById('app').style.backgroundColor = colors[index];
}, 3000);