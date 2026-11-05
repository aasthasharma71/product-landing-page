
// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Monthly / annual pricing toggle
const billingToggle = document.getElementById("billing-toggle");
const priceAmounts = document.querySelectorAll(".amount");
const pricePeriods = document.querySelectorAll(".period");

function updatePricing() {
    const isAnnual = billingToggle.checked;

    priceAmounts.forEach(amount => {
        amount.textContent = isAnnual
            ? amount.dataset.annual
            : amount.dataset.monthly;
    });

    pricePeriods.forEach(period => {
        period.textContent = isAnnual
            ? "/ month, billed yearly"
            : "/ month";
    });
}

billingToggle.addEventListener("change", updatePricing);

// Set the default monthly prices
updatePricing();
