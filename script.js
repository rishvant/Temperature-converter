var func=document.getElementById("bt");
var func1=document.getElementById("value");
func.addEventListener("click",function(){
    var celsius=parseFloat(document.getElementById("value").value);
    var kelvin=celsius + 273.15;
    var farenheit=(9*celsius)/5 + 32;
    var v1=document.getElementById("outputk").innerHTML=kelvin + " K";
    var v2=document.getElementById("outputf").innerHTML=farenheit + " °F";
    document.getElementById("done").innerHTML="Done!";
});

func1.addEventListener("click",function(){
    document.getElementById("done").innerHTML="";
})
