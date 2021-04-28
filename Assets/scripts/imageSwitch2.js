$(document).ready(function(){

  $("#rest1").click(function(){
    $("#rest1").fadeToggle("slow", function(){$("#rest2").fadeToggle("slow");});

  });
  $("#rest2").click(function(){
    $("#rest2").fadeToggle("slow", function(){$("#rest1").fadeToggle("slow");});
  });
});
