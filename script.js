const validUser = {
    username: "admin",
    password: "12345"
};

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === validUser.username && password === validUser.password) {
        alert("Login successful!");
        window.location.href = 'formulario_inicial.html'; // Redirect on success
    } else {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = "block";
    }
});
