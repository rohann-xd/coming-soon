document.getElementById("email-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    // Display notify modal instead of alert
    var notifyModal = document.getElementById("notify-modal");
    notifyModal.style.display = "block";
    document.getElementById("email").value = ""; // Clear the email field
  } else {
    alert("Please enter a valid email.");
  }
});

// Get the modals
var contactModal = document.getElementById("contact-modal");
var notifyModal = document.getElementById("notify-modal");

// Get the link that opens the contact modal
var contactLink = document.getElementById("contact-link");

// Get the <span> elements that close the modals
var closeButtons = document.getElementsByClassName("close");

// When the user clicks the contact link, open the contact modal
contactLink.onclick = function (event) {
  event.preventDefault();
  contactModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modals
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function () {
    contactModal.style.display = "none";
    notifyModal.style.display = "none";
  };
}

// When the user clicks anywhere outside of the modals, close them
window.onclick = function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
  if (event.target == notifyModal) {
    notifyModal.style.display = "none";
  }
};
