$(document).ready(function(){
  var c = 0;
    $("#prezentare1").click(function(){
      if(c == 1){
        $("#locations").fadeToggle("slow", function(){$("#presentation").fadeToggle("slow");});
        c = 0;
      }

    });

    $("#locatii").click(function(){
      if(c == 0){
        $("#presentation").fadeToggle("slow", function(){$("#locations").fadeToggle("slow");});
        c = 1;
      }
    });
});
