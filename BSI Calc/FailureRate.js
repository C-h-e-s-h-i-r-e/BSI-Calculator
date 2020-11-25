//Aleksander Bober i Maciej Dudzik
(function() {
  var counter = 0;
  var btn = document.getElementById('btn');
  var form = document.getElementById('form');
  var addInput = function() {
    counter++;
    var input = document.createElement("input");
    input.id = 'input-' + counter;
    input.type = 'number';
    input.name = 'name';   
    form.appendChild(input);
    
    var a = document.createTextNode(" after ");
    form.appendChild(a); 
      
    counter++;
    var input2 = document.createElement("input");
    input2.id = 'input-' + counter;
    input2.type = 'number';
    input2.name = 'name';    
    form.appendChild(input2); 
  
    var h = document.createTextNode(" hours");
    form.appendChild(h);
      
    form.appendChild(document.createElement("br"));
      
  };
    if(btn){
  btn.addEventListener('click', function() {
    addInput();
  }.bind(this));
    }
})();

function FR(){
    
    var Result = document.getElementById("Result1");
    
    var Produced_Chips = document.getElementById('number1').value;
    var Tested_Chips = document.getElementById('number2').value;
    var Operating_Hours = document.getElementById('number3').value;
    var sumoferrors = 0;
    
    var accounts = [];

    for (var i = 1; i < 100; i++) {
        var input = "input-"+i;
        i++;
        var input2 = "input-"+i;
        if(document.getElementById(input) != undefined && document.getElementById(input2) != undefined){
        accounts[i-1] = document.getElementById(input).value;
        accounts[i] = document.getElementById(input2).value;
            }
        }
     
     
    
    var Down_Time = 0;
    var ob = "";
        
    for (let i = 1; i < accounts.length; i +=  2){
        var x = parseInt(accounts[i]);
        var y = parseInt(accounts[i+1]);
        var l = Operating_Hours - y;
        ob += accounts[i]+"("+l+")";
        
        if(i+2 < accounts.length){
          ob += " + ";   
        }
        
        sumoferrors += x;
         Down_Time += x*(Operating_Hours-y);
        }
    
    var FR_Percent = (sumoferrors/Tested_Chips);
    var Total_time = Tested_Chips*Operating_Hours;
    var Operating_Time = Total_time-Down_Time;
    var FR_Time = (sumoferrors/Operating_Time); 
    
    var flag1 = true;
    var flag2 = true;
    var flag3 = true;
    
    if(sumoferrors>parseInt(Tested_Chips)){
       flag1 = false;
        var warning1 = document.createTextNode("Sum number of failed chips is bigger then chips tested.");
            Result.appendChild(warning1);
        Result.appendChild(document.createElement("br"));
       }
    
    if(parseInt(Tested_Chips)>parseInt(Produced_Chips)){
       flag2 = false;
        var warning2 = document.createTextNode("There is more tested chips then produced.");
           Result.appendChild(warning2);
        Result.appendChild(document.createElement("br"));
       }
    
    for(var i = 1 ;i <accounts.length; i = i+2)
        {
        if(accounts[i+1]>parseInt(Operating_Hours)){
            flag3 = false;
        var warning2 = document.createTextNode("Failed after more hours then it was testd.");
            Result.appendChild(warning2);
       Result.appendChild(document.createElement("br"));
        }
        }
    
    if(flag1 == false || flag2 == false || flag3 == false){
        var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
   Result.appendChild(spacer);
    Result.appendChild(document.createElement("br"));
    }
       
    
   if(flag1 && flag2 && flag3){
    
    var line1 = document.createTextNode("FR(%) = failures per number tested = "+sumoferrors+"/"+Tested_Chips+" = "+FR_Percent+" = "+(FR_Percent*100)+"%");
    Result.appendChild(line1);
    Result.appendChild(document.createElement("br"));
    
    var line2 = document.createTextNode("FR(N) = failures per operating time:");
    Result.appendChild(line2);
    Result.appendChild(document.createElement("br"));
    
    var line3 = document.createTextNode("Total time = "+Tested_Chips+" * "+Operating_Hours+" = "+Total_time+" hours");
    Result.appendChild(line3);
    Result.appendChild(document.createElement("br"));
    
    var line4 = document.createTextNode("Downtime = "+ob+" = "+Down_Time+" hours");
    Result.appendChild(line4);
    Result.appendChild(document.createElement("br"));
    
    var line5 = document.createTextNode("Operating time = Total time – Downtime = "+Total_time+" – "+Down_Time+" = "+Operating_Time);
    Result.appendChild(line5);
    Result.appendChild(document.createElement("br"));
    
    var line6 = document.createTextNode("Therefore: FR(N) = "+sumoferrors+"/"+Operating_Time+" = "+FR_Time+" failures/hour");
    Result.appendChild(line6);
    Result.appendChild(document.createElement("br"));

    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    Result.appendChild(spacer);
    Result.appendChild(document.createElement("br"));
    }
       
    }