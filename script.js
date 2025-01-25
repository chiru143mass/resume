// JavaScript for form handling, template selection, and pop-up
document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Form Submitted Successfully!");

  // Show the template selection popup after form submission
  document.getElementById("templatePopup").style.display = "flex";
});

// Function to close the pop-up
function closePopup() {
  document.getElementById("templatePopup").style.display = "none";
}

// Function to handle template selection
function selectTemplate(template) {
  document.getElementById("templatePreview").innerHTML = `<p>You selected ${template} template.</p>`;
}

// Function to print the resume
function printResume() {
  window.print();
}

// Function to enable resume editing
function editResume() {
  alert("You can edit your details by going back to the registration form.");
}

// Function to choose a template from the pop-up
function chooseTemplate(templateId) {
  document.getElementById("templatePreview").innerHTML = `<p>You selected Template ${templateId}.</p>`;
  closePopup();
}

// Function to scroll company logos
function scrollLogos() {
  const logos = document.querySelector('.logos-container');
  logos.scrollBy(100, 0); // Scroll by 100px to the right
}

setInterval(scrollLogos, 3000); // Scroll logos every 3 seconds
