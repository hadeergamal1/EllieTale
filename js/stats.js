
 var start_session_time=new Date().toLocaleString();
 var tpicalTime=60;
 var Tas=7.5;
 var implusivityScore ;
 var omissionScore;
 var Ds;
 var responseTime;
 var levelType;
 var Tir;
 var isclosed=false;
 var haveDs=false;
 function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours   = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}
AFRAME.registerComponent('timer', {
  
  init: function() 
  {
    
   // var time=0;
  //var count=-1;
var startSession=0;
var start_session_time=new Date().toLocaleString();
 var mysession=setInterval(function()  {
  
 
  document.getElementById("session").setAttribute("value", startSession); 

  startSession++;
var data=  new Date().toLocaleString();
console.log(data+"session : "+convertHMS(startSession)+start_session_time+Math.pow(10,-5));
}, 1000);
mysession;
 /*   console.log(this.el.id)"1PASH9A5579282 "
  if(count==-1) {
    count=  setInterval(function() {
     
       document.getElementById("time").setAttribute("value", time); 
        time++;
      }, 1000);       
}
document.getElementById("mybeach").addEventListener("click",e=>{
  clearInterval(count);
  //count=-1;
})
document.getElementById("Taxi").addEventListener("click",e=>{
  //clearInterval(count);
  count=-1;
  count=  setInterval(function() {
     
    document.getElementById("time").setAttribute("value", time); 
     time++;
   }, 1000); 
})
var xhr = new XMLHttpRequest();
var url = "https://dashboard.myvrapeutic.com/api/v1/module_sessions/find_room?" + encodeURIComponent(JSON.stringify({"headset": "1PASH9A0F69301", "vr_module_id": "8"}));
xhr.open("GET", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json.headset + ", " + json.vr_module_id);
    }
};
xhr.send();*/
    },
    tick: function(){
    var end_session_time=new Date().toLocaleString();
    var calculate= function newStats(){
    var Tar=document.getElementById("inps").getAttribute("value")/document.getElementById("Targets").children.length;
    var timeTaken=convertHMS(document.getElementById("session").getAttribute("value"));
    if (TaR == 0){
    implusivityScore = 1;}
   else
   {
      implusivityScore =(1*(-Tar))*((Math.log10(Tir)-1)+Math.pow(10,-5));
   }
   var AAS=document.getElementById("tasktime").getAttribute("value")/document.getElementById("taskcounter").getAttribute("value");
   if (AAS != 0)
   { 
    omissionScore = Tas /Math.pow(10,-5);
   }
   var TFD = AAS - Tas;
   if (haveDs)
   {
       Ds = 0;
   }
   else
   {
       Ds = (1 - (TFD / Tas));
   }
   if(haveDs)
   {
     responseTime= AAs;
   }
   else
   {
responseTime=(document.getElementById("tasktime").getAttribute("value")/document.getElementById("taskcounter").getAttribute("value")+
document.getElementById("dstime").getAttribute("value")/document.getElementById("sdcounter").getAttribute("value"))/2;
   }

   if (isclosed)
   {
       levelType = "Opend"; 
        Tir= timeTaken/tpicalTime;
   }
   else
   {
       levelType = "Closed"; 
       Tir=timeTaken/document.getElementById("counter").getAttribute("value");
   }
    }

    },
    remove: function () {
    console.log("bye bye")
    }
  }); 