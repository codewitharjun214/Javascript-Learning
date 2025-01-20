function validation() {
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    var userError = document.getElementById('userError');
    var passError = document.getElementById('passError');
    var isValid = true;

    // Username validation
    if (username.trim() === "") {
        userError.innerHTML = "Username is required";
        isValid = false;
    }

    // Password validation
    if (password.trim() === "") {
        passError.innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passError.innerHTML = "Password must be at least 6 characters long";
        isValid = false;
    }

    return isValid;
}

function clearError() {
    document.getElementById('userError').innerHTML = "";
    document.getElementById('passError').innerHTML = "";
}