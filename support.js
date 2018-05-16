    var e = 1;
var suport_src="";

function myFunctionclose() {
    var x = document.getElementById("div_botton");
    if (x.style.display === "bocke") {
        x.style.display = "none";
       
    } else {
        x.style.display = "none";
       
    }
    
    
 
}
   

function myFunction() {
    var x = document.getElementById("div_botton");
    if (x.style.display === "none") {
        x.style.display = "block";
       
    } else {
        x.style.display = "none";
       
          myFunctionsup();
         
       
    }
   
    
}

function myFunctionsup() {
   var yz= document.createElement("div");
    yz.id="some-z";
    
    document.getElementById("sup2").append(yz);
    
   var imz= document.createElement("img");
    imz.id="img_support";
    
   document.getElementById("sup3").append(imz);
    
    myFunctionsupport();

    
    
}

function myFunctionsupport(){
 var supporterRequest = new XMLHttpRequest(); 
supporterRequest.open("GET", "http://51.15.59.130:46260/support", true); 
supporterRequest.send(); 
supporterRequest.onreadystatechange = function (){ 
    if (this.readyState == 4 && this.status == 200)
    { var myObj = JSON.parse(this.responseText);
     document.getElementById("some-z").innerHTML =" پشتیبان بخش فروش  "+ "<br>" + "<br>"+ myObj.support.first + " " + myObj.support.last; document.getElementById("img_support").src = myObj.support.picture;
     suport_src = myObj.support.picture;
     
      } };

   myFunction2();
}








function myFunction1() {
    var x = document.createElement("li");
    x.id="some";
    
    document.getElementById("bot444").append(x);
    
    var y= document.createElement("div");
      document.getElementById("some").appendChild(y);
    y.id="some-text";
    x.appendChild(y);
     
var time1= document.createElement("div");
    time1.id="some-t1";
    x.appendChild(time1);
    time1.innerHTML="time1";
       var d = new Date();
     time1.innerHTML = formatAMPM(d);
    
   
   var im= document.createElement("img");
    im.id="some-img";
    im.innerHTML="1";
    im.src="cap.jpg"
    im.className="rounded-circle"
    x.appendChild(im); 
    y.innerHTML= document.getElementById("frame").value;
func_send();



}
            








function myFunction2() {
    var x2 = document.createElement("li");
    x2.id="some2";
  
    document.getElementById("bot444").append(x2);
  
var y2= document.createElement("div");
    y2.id="some-text2";
    y2.innerHTML="2";   
   x2.appendChild(y2);
     
var time2= document.createElement("div");
    time2.id="some-t2";
    x2.appendChild(time2);
    var d = new Date();
     time2.innerHTML = formatAMPM(d);
    
   
   var im2= document.createElement("img");
    im2.id="some-img2";
    im2.innerHTML="2";
    im2.className="rounded-circle2"
   x2.appendChild(im2);
    
myFunctionrespons();

    
}



function myFunctionrespons(){
 var supporterRequest = new XMLHttpRequest(); 
supporterRequest.open("GET", "http://51.15.59.130:46260/fetch", true); 
supporterRequest.send(); 
supporterRequest.onreadystatechange = function (){ 
    if (this.readyState == 4 && this.status == 200)
    { var myObj = JSON.parse(this.responseText);
     document.getElementById("some-text2").innerHTML = myObj.responses[0].message;
     document.getElementById("some-img2").src=suport_src;    
      } };   
}



function func_send(){
var data = {};

var url = "http://51.15.59.130:46260/send";

var data = {};
data.firstname = "John";
data.lastname  = "Snow";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "201") {
		myObj.message = document.getElementById("some-text").innerHTML ;
	} else {
		console.error(users);
	}
}
xhr.send(json);

}


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}  


