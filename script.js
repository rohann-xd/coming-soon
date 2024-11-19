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
