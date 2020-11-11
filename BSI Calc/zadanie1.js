(function() {
  var counter = 0;
  var btn = document.getElementById('btn');
  var form = document.getElementById('form');
  var addInput = function() {
    counter++;
    var input = document.createElement("input");
    input.id = 'input-' + counter;
    input.type = 'text';
    input.name = 'name';   
    form.appendChild(input);
    
    var a = document.createTextNode(" after ");
    form.appendChild(a); 
      
    counter++;
    var input2 = document.createElement("input");
    input2.id = 'input-' + counter;
    input2.type = 'text';
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

function zad1(){
    
    var wynik = document.getElementById("wynik1");
    
    var n1 = document.getElementById('number1').value;
    var n2 = document.getElementById('number2').value;
    var n3 = document.getElementById('number3').value;
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
     
     
    
    var dt = 0;
    var ob = "";
        
    for (let i = 1; i < accounts.length; i +=  2){
        var x = parseInt(accounts[i]);
        var y = parseInt(accounts[i+1]);
        var l = n3 - y;
        ob += accounts[i]+"("+l+")";
        
        if(i+2 < accounts.length){
          ob += " + ";   
        }
        
        sumoferrors += x;
         dt += x*(n3-y);
        }
    
    var fpnt = sumoferrors/n2;
    var tt = n2*n3;
    var ot = tt-dt;
    var fpot = sumoferrors/ot; 
    
    var flag1 = true;
    var flag2 = true;
    var flag3 = true;
    
    if(sumoferrors>n2){
       flag1 = false;
        var warning1 = document.createTextNode("Sum number of failed chips is bigger then chips tested.");
            wynik.appendChild(warning1);
        wynik.appendChild(document.createElement("br"));
       }
    if(n2>n1){
       flag2 = false;
        var warning2 = document.createTextNode("There is more tested chips then produced.");
            wynik.appendChild(warning2);
        wynik.appendChild(document.createElement("br"));
       }
    
    for(var i = 1 ;i <accounts.length; i = i+2)
        {
        if(accounts[i+1]>n3){
            flag3 = false;
        var warning2 = document.createTextNode("Failed after more hours then it was testd.");
            wynik.appendChild(warning2);
        wynik.appendChild(document.createElement("br"));
        }
        }
    if(flag1 == false || flag2 == false || flag3 == false){
        var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    wynik.appendChild(spacer);
    wynik.appendChild(document.createElement("br"));
    }
       
    
   if(flag1 && flag2 && flag3){
    
    var line1 = document.createTextNode("FR(%) = failures per number tested = "+sumoferrors+"/"+n2+" = "+fpnt+" = "+fpnt*100+"%");
    wynik.appendChild(line1);
    wynik.appendChild(document.createElement("br"));
    
    var line2 = document.createTextNode("FR(N) = failures per operating time:");
    wynik.appendChild(line2);
    wynik.appendChild(document.createElement("br"));
    
    var line3 = document.createTextNode("Total time = "+n2+" * "+n3+" = "+tt+" hours");
    wynik.appendChild(line3);
    wynik.appendChild(document.createElement("br"));
    
    var line4 = document.createTextNode("Downtime = "+ob+" = "+dt+" hours");
    wynik.appendChild(line4);
    wynik.appendChild(document.createElement("br"));
    
    var line5 = document.createTextNode("Operating time = Total time – Downtime = "+tt+" – "+dt+" = "+ot);
    wynik.appendChild(line5);
    wynik.appendChild(document.createElement("br"));
    
    var line6 = document.createTextNode("Therefore: FR(N) = "+sumoferrors+"/"+ot+" = "+fpot+" failures/hour");
    wynik.appendChild(line6);
    wynik.appendChild(document.createElement("br"));

    var spacer = document.createTextNode("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    wynik.appendChild(spacer);
    wynik.appendChild(document.createElement("br"));
    }
       
    }