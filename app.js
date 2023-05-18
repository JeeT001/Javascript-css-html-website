// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".links");

// hamburger.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
// })


// trying some javascript at upper but not working



document.querySelectorAll (" .nav-link"). forEach (n => n.
    addEventListener ("click", () => {
    hamburger.classList.remove("active"); navMenu.classList. remove ("active");
    }))

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 