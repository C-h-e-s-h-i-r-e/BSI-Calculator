//Aleksander Bober i Maciej Dudzik
//MTBF – Średni czas pomiędzy awariami (ang. Mean time between failures)
function MFTB(){
    
    var Result = document.getElementById("Result2");
    
    var Number_of_Chips = document.getElementById('number4').value;
    var n2 = document.getElementById('number5').value;
    
    var FE_for_1 = (n2*24*30).toFixed(3);
    var FE_for_All = (FE_for_1*Number_of_Chips).toFixed(2);
    var MTBF = (1/FE_for_All).toFixed(2);
    
    var line1 = document.createTextNode("Converting the units of FR(N) to months :");
    Result.appendChild(line1);
    Result.appendChild(document.createElement("br"));
    
    var line2 = document.createTextNode("FR(N) = "+n2+" * 24 hours/day * 30 days/month = "+FE_for_1+" failures/month");
    Result.appendChild(line2);
    Result.appendChild(document.createElement("br"));
    
    var line3 = document.createTextNode("FR(N) for the "+Number_of_Chips+" units:");
    Result.appendChild(line3);
    Result.appendChild(document.createElement("br"));
    
    var line4 = document.createTextNode(" FR(N) = "+FE_for_1+" failures/month * "+Number_of_Chips+" units = "+FE_for_All+" failures/month");
    Result.appendChild(line4);
    Result.appendChild(document.createElement("br"));
    
    var line5 = document.createTextNode("MTBF for the mainframe:");
    Result.appendChild(line5);
    Result.appendChild(document.createElement("br"));
    
    var line6 = document.createTextNode("MTBF = 1/FR(N) = 1/"+FE_for_All+" = "+MTBF+" month = "+MTBF+" * 30 = "+(MTBF*30)+" days");
    Result.appendChild(line6);
    Result.appendChild(document.createElement("br"));

    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    Result.appendChild(spacer);
    Result.appendChild(document.createElement("br"));
    
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