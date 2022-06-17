//storing the hamburger button and nav element in a variable
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");

// Storing fucntion in vareiableupdate hamburger button and nav class to add .active which will activate postion change for nav to move on screen
const slideInMenu = function () {
    hamburger.classList.toggle("active")
    navLinks.classList.toggle("active")
}

// add the event listener to the hamburger button
hamburger.addEventListener("click", slideInMenu)


//storing each link within the nav in a variable.
const menuLink = document.querySelectorAll(".menuLink");

// Storing fucntion in vareiable to update hamburger button and nav class to remove .active which will activate postion change for nav to move off screen.
const closeMenu = function() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}

// forEach loop that adds eventlistener for when a link in the nav is clicked to call the callback function closeMenu 
menuLink.forEach(link => link.addEventListener("click", closeMenu));

// const contactForm = document.querySelector(".contactForm")

// const handleForm = (event) => {
//     event.preventDefault();
// }

// contactForm.addEventListener('submit', handleForm)