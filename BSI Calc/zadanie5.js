function zad5(){
    var wynik = document.getElementById("wynik5");
    
    var a = document.getElementById('number11').value;
    var b = document.getElementById('number12').value;
     if(a>100){
        var warning1 = document.createTextNode("Failure rate is above 100%.");
            wynik.appendChild(warning1);
            wynik.appendChild(document.createElement("br"));
            var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
            wynik.appendChild(spacer);
            wynik.appendChild(document.createElement("br"));
       }else{
           
       
    var myResult2 =Math.pow((1-a/100), b);
    var w = document.createTextNode("Probability: "+myResult2.toFixed(2)*100+"%");
    wynik.appendChild(w);
    wynik.appendChild(document.createElement("br"));
    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    wynik.appendChild(spacer);
    wynik.appendChild(document.createElement("br"));
       }
}