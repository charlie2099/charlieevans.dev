// Fixed Nav bar
window.onscroll = function() {myFunction()};
var header = document.getElementById("headerID");
var container = header.offsetTop;

function myFunction(x) 
{
  if (!x.matches)  // If media query matches
  {
    if (window.pageYOffset >= container)
    {
      header.classList.add("headerToggle");
    }

    else
    {
      header.classList.remove("headerToggle");
    }
  }
}

var x = window.matchMedia("(max-width: 850px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes