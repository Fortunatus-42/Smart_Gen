// Mobile Navigation Menu
const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });
}

// Dark Mode
const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            darkBtn.innerHTML = "☀";
        } else {
            darkBtn.innerHTML = "🌙";
        }

    });

}

// Counter Animation (Home Page)
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = Number(counter.getAttribute("data-target"));
        const current = Number(counter.innerText);

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});

// Image Slider (Home Page)
const slider = document.getElementById("sliderImage");

if (slider) {

    const images = [

        "images/samsung.jpg",
        "images/apple.jpg",
        "images/google.jpg",
        "images/xiaomi.jpg",
        "images/oppo.jpg",
        "images/vivo.jpg"

    ];

    let index = 0;

    setInterval(() => {

        index++;

        if (index >= images.length) {
            index = 0;
        }

        slider.src = images[index];

    }, 3000);

}

// Scroll To Top Button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// For menu button
// function toggleMenu(){
//     document.getElementById('navLinks').classList.toggle('active');
// }

// Adding to cart
function addToCart(){
    alert("Product is successful added to cart.\nPlease wait for confirmation, Thank you!");
}

// Contact Form Validation
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]');
        const email = form.querySelector('input[type="email"]');
        const message = form.querySelector("textarea");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            alert("Please fill in all required fields.");

            return;

        }

        alert("Thank you! Your message has been sent.");

        form.reset();

    });

}

// Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// Welcome Message
window.addEventListener("load", () => {

    console.log("Welcome to Smartphone Gen!");

});