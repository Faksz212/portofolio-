const textElement = document.querySelector(".typing-text");
const texts = ["Problem Solver", "Code Explorer", "AI Explorer", "Web Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;
    
    // Kecepatan mengetik
    let typeSpeed = 100;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        // Jeda setelah selesai mengetik satu kata
        typeSpeed = 2000; 
    }

    setTimeout(type, typeSpeed);
}());

// Smooth Scroll untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});