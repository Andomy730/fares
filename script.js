const loginForm = document.querySelector(".login-box-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const feedback = document.querySelector("#login-feedback");
const passwordToggle = document.querySelector(".password-toggle");

passwordToggle.addEventListener("click", () => {
    const showPassword = passwordInput.type === "password";
    passwordInput.type = showPassword ? "text" : "password";
    passwordToggle.textContent = showPassword ? "Hide" : "Show";
    passwordToggle.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
    passwordToggle.setAttribute("aria-pressed", String(showPassword));
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    feedback.hidden = false;
    if (email.length <= "@gmail.com".length || !email.endsWith("@gmail.com")) {
        feedback.textContent = "Please enter an email that ends with @gmail.com.";
        feedback.className = "feedback feedback-error";
        return;
    }

    if (!password) {
        feedback.textContent = "Please enter a password.";
        feedback.className = "feedback feedback-error";
        return;
    }

    window.location.href = "orbit.html";
});