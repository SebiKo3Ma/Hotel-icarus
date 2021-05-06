$(document).ready(function(){
  var c1 = 0;
  setInterval(function(){
    if(c1 == 0){
      c1 = 1;
      $("#rest1").fadeToggle("slow", function(){$("#rest2").fadeToggle("slow");});
      return;
    }
    if(c1 == 1){
      c1 = 0;
      $("#rest2").fadeToggle("slow", function(){$("#rest1").fadeToggle("slow");});
      return;
    }
  }, 30000);
});
