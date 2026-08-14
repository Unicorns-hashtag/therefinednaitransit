// ===============================
// NAI'S TRANSIT AUTHENTICATION
// ===============================


// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    const rememberMe = document.getElementById("rememberMe");

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const user = JSON.parse(localStorage.getItem("user"));

        // Check if account exists
        if (!user) {

            alert("No admin account found.");
            return;

        }

        // Check credentials
        if (
            email !== user.email ||
            password !== user.password
        ) {

            alert("Invalid Admin Credentials.");
            return;

        }

        // Login successful
        if (rememberMe.checked) {

            // Remember login
            localStorage.setItem("loggedIn", "true");

            // Remove temporary session
            sessionStorage.removeItem("loggedIn");

        } else {

            // Login only for this browser session
            sessionStorage.setItem("loggedIn", "true");

            // Remove remembered login if one exists
            localStorage.removeItem("loggedIn");

        }

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    });

}


// ===============================
// CHECK IF USER IS LOGGED IN
// ===============================

function isLoggedIn() {

    const rememberedLogin =
        localStorage.getItem("loggedIn");

    const sessionLogin =
        sessionStorage.getItem("loggedIn");

    return rememberedLogin === "true" ||
        sessionLogin === "true";
}


// ===============================
// LOGOUT
// ===============================

function logout() {

    // Remove both types of login
    localStorage.removeItem("loggedIn");
    sessionStorage.removeItem("loggedIn");

    // Send user back to login
    window.location.href = "/admin/login.html";

}