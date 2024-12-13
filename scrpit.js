// Toggle menu visibility on mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the "show" class to display the mobile menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function selectPlan(plan) {
    alert(`You have selected the ${plan} plan!`);
}

const faqQuestions = document.querySelectorAll('.faq-question');
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple form validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        document.getElementById("success-message").classList.remove("hidden");

        // Clear form fields
        document.getElementById("contact-form").reset();

        // Hide the message after 3 seconds
        setTimeout(() => {
            document.getElementById("success-message").classList.add("hidden");
        }, 3000);
    }
});



