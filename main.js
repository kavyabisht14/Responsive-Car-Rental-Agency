// JavaScript for form validation

// Function to validate the sign-up form
function validateSignUpForm() {
    var username = document.forms["signupForm"]["username"].value;
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;

    if (username == "") {
        alert("Please enter your username.");
        return false;
    }
    if (email == "") {
        alert("Please enter your email.");
        return false;
    }
    if (password == "") {
        alert("Please enter your password.");
        return false;
    }
    return true;
}

// Function to validate the sign-in form
function validateSignInForm() {
    var username = document.forms["signinForm"]["username"].value;
    var password = document.forms["signinForm"]["password"].value;

    if (username == "") {
        alert("Please enter your username.");
        return false;
    }
    if (password == "") {
        alert("Please enter your password.");
        return false;
    }
    return true;
}
