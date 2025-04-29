document.getElementById("Form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Guardado exitoso"); // Display success message
    // Clear the form
    e.target.reset();
});