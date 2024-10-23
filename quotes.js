
// Array af quotes
const quotes = [
    "quote1",
    "quote2",
    "quote3",
    "quote4",
    "qoute5",
    "qoute6"
];

// Variable
let currentIndex = 0;

// Function for at tjekke om det mobil eller desktop
function isMobile() {
    return window.innerWidth <= 768; // Bredde på mobil
} 

// De qoutes der vises når siden først loader eller resized
function initializeQoutes() {
    const quote1Div = document.getElementById("quote-1");
    const quote2Div = document.getElementById("quote-2");
    const quote3Div = document.getElementById("quote-3");

    if (isMobile()) {
        // For mobil, vis kun 1 qoute
        quote1Div.textContent = quotes[currentIndex];
        quote2Div.textContent = "";
        quote3Div.textContent = "";
    } else {
        // For desktop, vis 3 qoutes
        quote1Div.textContent = quotes[currentIndex];
        quote2Div.textContent = quotes[(currentIndex + 1) % quotes.length];
        quote3Div.textContent = quotes[(currentIndex + 2) % quotes.length];
    }
}

// Function til at opdatere qoutes
function updateQuotes() {
    // Henter qoute divs
    const quote1Div = document.getElementById("quote-1");
    const quote2Div = document.getElementById("quote-2");
    const quote3Div = document.getElementById("quote-3");

    // Fade på qoutes
    quote1Div.style.opacity = 0;
    quote2Div.style.opacity = 0;
    quote3Div.style.opacity = 0;

    // Vent og derefter skift qoutes
    setTimeout(() => {
        if (isMobile()) {
            // For mobil, vis kun 1 qoute
            quote1Div.textContent = quotes[currentIndex];
            quote2Div.textContent = "";
            quote3Div.textContent = "";
        } else {
            // For dekstop, vis 3 qoutes
            quote1Div.textContent = quotes[currentIndex];
            quote2Div.textContent = quotes[(currentIndex + 1) % quotes.length];
            quote3Div.textContent = quotes[(currentIndex + 2) % quotes.length];
        }

        // Fade ind de næste qoutes
        quote1Div.style.opacity = 1;
        quote2Div.style.opacity = 1;
        quote3Div.style.opacity = 1;

        // Opdater index til at vise de næste qoutes
        if (isMobile()) {
            currentIndex = (currentIndex + 1) % quotes.length;
        } else {
            currentIndex = (currentIndex + 3) % quotes.length;
        }
    }, 1000); // 1 sekundt
}

// Hvor ofte opdateres qoutes
setInterval(updateQuotes, 7000); // 7 sekunder