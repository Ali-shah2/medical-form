// Get all the form steps
var formSteps = document.querySelectorAll('.form-step');

// Set up the next button event listeners
for (var i = 0; i < formSteps.length; i++) {
  var step = formSteps[i];
  var nextButton = step.querySelector('button[type="button"]');
  
  // Move to the next step on click
  nextButton.addEventListener('click', function() {
    var currentStep = this.parentNode;
    var nextStep = currentStep.nextElementSibling;
    currentStep.style.display = 'none';
    nextStep.style.display = 'block';
  });
}

function nextStep(currentStep, nextStep){
    currentStep.style.display= "none";
    nextStep.step.display= "block";
}