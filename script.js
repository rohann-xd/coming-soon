document.getElementById("email-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    alert("Thank you! We'll notify you when the site is live.");
    // Here you can handle email submission, for example, sending it to a server or storing it.
    document.getElementById("email").value = ""; // Clear the email field
  } else {
    alert("Please enter a valid email.");
  }
});

// Get the modal
var modal = document.getElementById('contact-modal');

// Get the link that opens the modal
var link = document.getElementById('contact-link');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the link, open the modal
link.onclick = function(event) {
  event.preventDefault();
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
