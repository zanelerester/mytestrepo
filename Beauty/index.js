// script.js
// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const button = document.getElementById("myBtn");

  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents form from refreshing the page

    // Collect values from inputs
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    
    // Collect checkboxes
    const promotions = document.getElementById("promotion").checked;
    const college = document.getElementById("college").checked;
    const couple = document.getElementById("couple").checked;
    const products = document.getElementById("products").checked;

    // Example: Show collected data in console
    console.log({
      name,
      surname,
      email,
      gender,
      promotions,
      college,
      couple,
      products
    });

    // Example: Show confirmation message
    alert("Thank you, " + name + "! Your form has been submitted.");
    
    // If you want to actually send data to your PHP backend:
    // form.submit();
  });
});

