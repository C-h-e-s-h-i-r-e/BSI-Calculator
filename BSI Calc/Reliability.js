//Aleksander Bober i Maciej Dudzik
function Reliability(){
    var Result = document.getElementById("Result4");
    
    var  Failures_per_hour = document.getElementById('number9').value;
    var Continuous_Service_Time = document.getElementById('number10').value;   
    myResult = Math.exp(-( Failures_per_hour*Continuous_Service_Time));
    var z = document.createTextNode("Reliability: "+myResult.toFixed(4)*100+"%");
    Result.appendChild(z);
    Result.appendChild(document.createElement("br"));
    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    Result.appendChild(spacer);
    Result.appendChild(document.createElement("br"));
}