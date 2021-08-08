// Fixed Nav bar
window.onscroll = function() {myFunction()};
var header = document.getElementById("headerID");
var container = header.offsetTop;

function myFunction() 
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