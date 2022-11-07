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
setInterval(displayTime, 10);

