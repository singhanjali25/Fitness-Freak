// contact.js

document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    var contactSuccess = document.getElementById("contactSuccess");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Retrieve form data
      var name = document.getElementById("contactName").value;
      var email = document.getElementById("contactEmail").value;
      var subject = document.getElementById("contactSubject").value;
      var message = document.getElementById("contactMessage").value;
  
      // Process the data (you could send it to a server)
      console.log("Contact form submitted:", { name, email, subject, message });
  
      // Display a success message on the page
      contactSuccess.innerText = "Thank you for contacting us! We will get back to you soon.";
      contactSuccess.style.display = "block";
  
      // Optionally, clear the form fields after submission
      contactForm.reset();
  
      // Hide the success message after 3 seconds
      setTimeout(function() {
        contactSuccess.style.display = "none";
      }, 3000);
    });
  });
  