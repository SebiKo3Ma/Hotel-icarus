var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date1").setAttribute("min", today);
document.getElementById("date2").setAttribute("min", today);
document.getElementById("date3").setAttribute("min", today);
document.getElementById("date4").setAttribute("min", today);
