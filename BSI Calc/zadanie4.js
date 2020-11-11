function zad4(){
    var x = document.getElementById('x').value;
    var t = document.getElementById('t').value;   
    myResult = Math.exp(-(x*t));
    var zad5form = document.getElementById("zad4form");
    var z = document.createTextNode("Reliability: "+myResult.toFixed(4)*100+"%");
    zad4form.appendChild(document.createElement("br"));
    zad4form.appendChild(z);
}