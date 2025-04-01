function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        alert("Welcome to the website!");
        window.location.href = "../Proj1.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
}