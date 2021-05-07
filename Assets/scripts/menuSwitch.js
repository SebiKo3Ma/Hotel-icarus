$(document).ready(function(){
  var id = "#fp";
    $("#fpb").click(function(){
      if(id != "#fp"){
        $(id).fadeToggle("slow", function(){$("#fp").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#fpb").addClass("menuTitleSelected");
        id="#fp";
      }
    });

    $("#dpgb").click(function(){
      if(id != "#dpg"){
        $(id).fadeToggle("slow", function(){$("#dpg").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#dpgb").addClass("menuTitleSelected");
        id="#dpg";
      }
    });

    $("#scb").click(function(){
      if(id != "#sc"){
        $(id).fadeToggle("slow", function(){$("#sc").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#scb").addClass("menuTitleSelected");
        id="#sc";
      }
    });

    $("#db").click(function(){
      if(id != "#d"){
        $(id).fadeToggle("slow", function(){$("#d").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#db").addClass("menuTitleSelected");
        id="#d";
      }
    });

    $("#pb").click(function(){
      if(id != "#p"){
        $(id).fadeToggle("slow", function(){$("#p").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#pb").addClass("menuTitleSelected");
        id="#p";
      }
    });

    $("#rb").click(function(){
      if(id != "#r"){
        $(id).fadeToggle("slow", function(){$("#r").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#rb").addClass("menuTitleSelected");
        id="#r";
      }
    });

    $("#pstb").click(function(){
      if(id != "#pst"){
        $(id).fadeToggle("slow", function(){$("#pst").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#pstb").addClass("menuTitleSelected");
        id="#pst";
      }
    });

    $("#apb").click(function(){
      if(id != "#ap"){
        $(id).fadeToggle("slow", function(){$("#ap").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#apb").addClass("menuTitleSelected");
        id="#ap";
      }
    });

    $("#gb").click(function(){
      if(id != "#g"){
        $(id).fadeToggle("slow", function(){$("#g").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#gb").addClass("menuTitleSelected");
        id="#g";
      }
    });

    $("#sb").click(function(){
      if(id != "#s"){
        $(id).fadeToggle("slow", function(){$("#s").fadeToggle("slow");});
        id2 = id + "b"
        $(id2).removeClass("menuTitleSelected");
        $("#sb").addClass("menuTitleSelected");
        id="#s";
      }
    });
});
