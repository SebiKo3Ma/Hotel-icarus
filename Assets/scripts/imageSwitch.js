$(document).ready(function(){
  $("#suite1").click(function(){
    $("#suite1").fadeToggle("slow", function(){$("#suite2").fadeToggle("slow");});

  });
  $("#suite2").click(function(){
    $("#suite2").fadeToggle("slow", function(){$("#suite1").fadeToggle("slow");});
  });

  $("#dxSuite1").click(function(){
    $("#dxSuite1").fadeToggle("slow", function(){$("#dxSuite2").fadeToggle("slow");});

  });
  $("#dxSuite2").click(function(){
    $("#dxSuite2").fadeToggle("slow", function(){$("#dxSuite1").fadeToggle("slow");});
  });
});
