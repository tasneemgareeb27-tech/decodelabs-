// Dark Mode
let darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// Cart Counter
let count = 0;
let cartCount = document.getElementById("cart-count");

let cartButtons = document.querySelectorAll(".cart-btn");
let addCartButtons = document.querySelectorAll(".add-cart");

function updateCart() {
    count++;
    cartCount.textContent = count;
}

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateCart();
        alert("Added To Cart");
    });
});

addCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        updateCart();
        alert("Added To Cart");
    });
});

// Favorite Buttons

let favButtons = document.querySelectorAll(".favorite-btn");

favButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        let icon = button.querySelector("i");

        icon.classList.toggle("fa-solid");
        icon.classList.toggle("fa-regular");

    });

});

// Search System
let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    let value = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// Newsletter Form

let newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Subscribed Successfully");

    newsletterForm.reset();

});

// Contact Form
let contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Message Sent Successfully");
    contactForm.reset();
});