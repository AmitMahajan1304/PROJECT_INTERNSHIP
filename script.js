// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual form submission
      alert("Thank you! Your AM Mobile order has been placed.");
      form.reset(); // Clear the form
    });
  }
});
