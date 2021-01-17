
/*Funcion ajax */
function hola(btn){
    console.log(`${btn}`)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("contenido").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", `paginas/${btn}.html`, true);
    xhttp.send();
}