let currentStep = 1;

function nextStep(step) {
    document.getElementById(`step-${currentStep}`).style.display = "none";
    document.getElementById(`step-${step}`).style.display = "block";
    document.querySelectorAll(".step")[currentStep - 1].classList.remove("active");
    document.querySelectorAll(".step")[step - 1].classList.add("active");
    currentStep = step;
}

function prevStep(step) {
    document.getElementById(`step-${currentStep}`).style.display = "none";
    document.getElementById(`step-${step}`).style.display = "block";
    document.querySelectorAll(".step")[currentStep - 1].classList.remove("active");
    document.querySelectorAll(".step")[step - 1].classList.add("active");
    currentStep = step;
}

// Enable "Next Step" button when file is uploaded
document.getElementById("fileUpload").addEventListener("change", function() {
    document.getElementById("nextBtn").disabled = false;
});

// Fix symptom selection issue
document.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("click", function() {
        this.parentElement.classList.toggle("selected");
    });
});
