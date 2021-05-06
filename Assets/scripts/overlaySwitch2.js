$(document).ready(function(){
  var c = 1;
    $("#prezentare2").click(function(){
      if(c == 1){
        $("#restMenu").fadeToggle("slow", function(){$("#restPresent").fadeToggle("slow");});
        c = 0;
      }

    });

    $("#meniu").click(function(){
      if(c == 0){
        $("#restPresent").fadeToggle("slow", function(){$("#restMenu").fadeToggle("slow");});
        c = 1;
      }
    });
});
