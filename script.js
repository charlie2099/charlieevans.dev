// Fixed Nav bar
window.onscroll = function() {myFunction()};
var header = document.getElementById("headerID");
var container = header.offsetTop;

function myFunction() 
{
  if (window.pageYOffset > container) 
  {
    header.classList.add("headerToggle");
  } 

  else 
  {
    header.classList.remove("headerToggle");
  }
}

// Menu Dropdown
function dropdownMenu() 
{
  var nav_bar = document.getElementById("myLinks");
  if (nav_bar.style.display === "block") 
  {
    nav_bar.style.display = "none";
  } 

  else 
  {
    nav_bar.style.display = "block";
  }
}