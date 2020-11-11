function zad5(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;   
    var myResult2 =Math.pow((1-a/100), b);
    var zad5form = document.getElementById("zad5form");
    var w = document.createTextNode("Probability: "+myResult2.toFixed(2)*100+"%");
    zad5form.appendChild(document.createElement("br"));
    zad5form.appendChild(w);
}