$(document).ready(function(){
var c1 = 0;
var c2 = 0;
  $("#switch1").click(function(){
    if(c1 == 0){
      $("#suite1").fadeToggle("slow", function(){$("#suite2").fadeToggle("slow");});
      c1 = 1;
      return;
    }
    if(c1 == 1){
      $("#suite2").fadeToggle("slow", function(){$("#suite1").fadeToggle("slow");});
      c1 = 0;
      return;
    }
  });

  $("#switch2").click(function(){
    if(c2 == 0){
      $("#dxSuite1").fadeToggle("slow", function(){$("#dxSuite2").fadeToggle("slow");});
      c2 = 1;
      return;
    }
    if(c2 == 1){
      $("#dxSuite2").fadeToggle("slow", function(){$("#dxSuite1").fadeToggle("slow");});
      c2 = 0;
      return;
    }
  });






});
