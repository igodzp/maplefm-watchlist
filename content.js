$(document).ready(function(){

  var f = function(){
        var buttonOnSite = document.getElementById("gnt_play");
        if(buttonOnSite != undefined){
          parent = buttonOnSite.parentElement;
          next = buttonOnSite.nextSibling;
          button = document.createElement("button");
          text = document.createTextNode("test");

          button.appendChild(text);
          if (next) parent.insertBefore(button, next);
          else parent.appendChild(button);
          return ;
        }

        console.log("NOPE2");

        setTimeout(function() {
          f();
        }, 1000);
  }

  f();

});
