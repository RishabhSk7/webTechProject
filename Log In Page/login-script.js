document.addEventListener("DOMContentLoaded", function() {
    const usernameGroup = document.getElementById("username-group");
    const emailGroup = document.getElementById("email-group");
    const passwordInput = document.getElementById("password");
    const forgotUsernameLink = document.getElementById("forgot-username");
    const forgotEmailLink = document.getElementById("forgot-email");

    const toggleFields = () => {
        if (usernameGroup.style.display === "none") {
            usernameGroup.style.display = "block";
            emailGroup.style.display = "none";
            forgotUsernameLink.textContent = "Forgot username?";
            forgotEmailLink.textContent = "Forgot email";
            passwordInput.setAttribute("required", "true");
            document.getElementById("email").removeAttribute("required"); 
            document.getElementById("username").setAttribute("required", "true"); 
        } else {
            usernameGroup.style.display = "none";
            emailGroup.style.display = "block";
            forgotUsernameLink.textContent = "Forgot username";
            forgotEmailLink.textContent = "Forgot email?";
            passwordInput.setAttribute("required", "true");
            document.getElementById("username").removeAttribute("required"); 
            document.getElementById("email").setAttribute("required", "true"); 
        }
    };

    forgotUsernameLink.addEventListener("click", toggleFields);

    forgotEmailLink.addEventListener("click", toggleFields);
});
