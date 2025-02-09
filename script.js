// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});

// Form Navigation
const formSections = document.querySelectorAll('.form-section');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const predictBtn = document.querySelector('.predict-btn');
const steps = document.querySelectorAll('.step');
let currentStep = 0;

function updateStep() {
    formSections.forEach((section, index) => {
        section.classList.toggle('active', index === currentStep);
        steps[index].classList.toggle('active', index <= currentStep);
    });
}

nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentStep++;
        updateStep();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentStep--;
        updateStep();
    });
});

predictBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('slide4').classList.add('active');
});

// Symptoms Selection
const symptomBoxes = document.querySelectorAll('.symptom-box');
symptomBoxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});

// Image Upload Handling (Modified)
const scanUpload = document.getElementById('scanUpload');
const fileNameDisplay = document.getElementById('fileNameDisplay');
const nextBtn3 = document.getElementById('nextBtn3');

scanUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        fileNameDisplay.textContent = "Uploaded: " + file.name;
        nextBtn3.disabled = false; // Enable Next button after file upload
    }
});

// Prediction Logic
function predict() {
    let percentage = Math.floor(Math.random() * 100) + 1; // Simulated percentage
    document.getElementById("predictionResult").textContent = `COVID-19 Probability: ${percentage}%`;
    document.getElementById("reattempt").style.display = "block";
}

// Reattempt Function
function resetAll() {
    location.reload(); // Reload the page to start fresh
}

// Initial Step Setup
updateStep();
