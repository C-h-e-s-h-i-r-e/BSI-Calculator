function zad3(){
    
    var wynik = document.getElementById("wynik3");
    
    var n1 = document.getElementById('number6').value;
    var n2 = document.getElementById('number7').value;
    var n3 = document.getElementById('number8').value;
    
    if(( parseInt(n2)+ parseInt(n3))>100){
        var warning = document.createTextNode("Probability exeeds 100%");
            wynik.appendChild(warning);
        wynik.appendChild(document.createElement("br"));
        return 0;
    }
    
    var drow = 100-n2-n3;
    
    n2 = parseInt(n2)/100;
    n3 = parseInt(n3)/100;
    
    var tB3 = n3;
    var tB1 = (1-n3);
    
    tB3 = Math.pow(tB3,n1);
    tB1 = Math.pow(tB1,n1);
    
    tB3 = tB3*100;
    tB1 = tB1*100;
    
    tB3 = tB3.toFixed(2);
    tB1 = tB1.toFixed(2);
    
    var line1 = document.createTextNode("a) The probability of a draw is "+drow+"%");
    wynik.appendChild(line1);
    wynik.appendChild(document.createElement("br"));
    
    var line2 = document.createTextNode("b) Probability of team B winning all matches is "+tB3+"%");
    wynik.appendChild(line2);
    wynik.appendChild(document.createElement("br"));
    
    var line3 = document.createTextNode("c) Probability of team B winning at least one match is "+tB1+"%");
    wynik.appendChild(line3);
    wynik.appendChild(document.createElement("br"));
    
    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    wynik.appendChild(spacer);
    wynik.appendChild(document.createElement("br"));
    
}