# digital-clock
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>

</head>
<body>
    <div class="container">
        <span id="hours">00</span>
        <span>:</span>
        <span id="minutes">00</span>
        <span>:</span>
        <span id="seconds">00</span> 
        <span id="ampm">AM</span>   
    </div>
</body>
</html>

body{ 
    margin: 0%;
    padding: 0%;
    background-color: black;
}
.container{
    font-family: 'Orbitron', sans-serif;
    font-size: 70px;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: darkgray;
    position: absolute;
    color: white;
}

function displayTime(){
   var dateTime = new Date();
   var hrs = dateTime.getHours();
   var min = dateTime.getMinutes();
   var sec = dateTime.getSeconds();
   var ampm = document.getElementById('ampm');

   if(hrs >= 12){
    ampm.innerHTML = 'PM';
   
   }else{
    ampm.innerHTML = 'AM';
   }

   document.getElementById('hours').innerHTML = hrs;
   document.getElementById('minutes').innerHTML = min;
   document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10)

