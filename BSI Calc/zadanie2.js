function zad2(){
    
    var wynik = document.getElementById("wynik2");
    
    var n1 = document.getElementById('number4').value;
    var n2 = document.getElementById('number5').value;
    
    var FEper1 = (n2*24*30).toFixed(3);
    var FEpern1 = (FEper1*n1).toFixed(2);
    var MTBF = (1/FEpern1).toFixed(2);
    
    var line1 = document.createTextNode("Converting the units of FR(N) to months :");
    wynik.appendChild(line1);
    wynik.appendChild(document.createElement("br"));
    
    var line2 = document.createTextNode("FR(N) = "+n2+" * 24 hours/day * 30 days/month = "+FEper1+" failures/month");
    wynik.appendChild(line2);
    wynik.appendChild(document.createElement("br"));
    
    var line3 = document.createTextNode("FR(N) for the "+n1+" units:");
    wynik.appendChild(line3);
    wynik.appendChild(document.createElement("br"));
    
    var line4 = document.createTextNode(" FR(N) = "+FEper1+" failures/month * "+n1+" units = "+FEpern1+" failures/month");
    wynik.appendChild(line4);
    wynik.appendChild(document.createElement("br"));
    
    var line5 = document.createTextNode("MTBF for the mainframe:");
    wynik.appendChild(line5);
    wynik.appendChild(document.createElement("br"));
    
    var line6 = document.createTextNode("MTBF = 1/FR(N) = 1/"+FEpern1+" = "+MTBF+" month = "+MTBF+" * 30 = "+MTBF*30+" days");
    wynik.appendChild(line6);
    wynik.appendChild(document.createElement("br"));

    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    wynik.appendChild(spacer);
    wynik.appendChild(document.createElement("br"));
    
}

//                Converting the units of FR(N) to months : <br>
//
//                FR(N) = 0.0000405 * 24 hours/day * 30 days/month = 0.029 failures/month<br>
//
//                FR(N) for the 300 units:<br>
//
//                FR(N) = 0.029 failures/month * 300 units = 8.75 failures/month<br>
//                
//                MTBF for the mainframe:<br>
//
//                MTBF = 1/FR(N) = 1/8.75 = 0.11 month = 0.11 * 30 = 3.4 days<br>