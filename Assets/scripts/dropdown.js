var drop = 0;

document.getElementById('dropdown').onclick = function(){
  if(drop == 0)
  {
    document.getElementById("menuSelectors").className = "menuSelectors";
      drop = 1;
  }
  else {

    if(drop == 1)
    {
      drop = 0;
      document.getElementById("menuSelectors").className = "menuSelectors showMenuFalse";
    }

  }
};
