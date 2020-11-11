function zad4(){
    var wynik = document.getElementById("wynik4");
    
    var x = document.getElementById('number9').value;
    var t = document.getElementById('number10').value;   
    myResult = Math.exp(-(x*t));
    var z = document.createTextNode("Reliability: "+myResult.toFixed(4)*100+"%");
    wynik.appendChild(z);
    wynik.appendChild(document.createElement("br"));
    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    wynik.appendChild(spacer);
    wynik.appendChild(document.createElement("br"));
}