// JavaScript Validation Examples

// 1 email validation 




function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(password)) {
        return true;
    } else {
        return false;
    }
}

const password = "Password123!";
if (validatePassword(password)) {
    console.log("Password is valid");
} else {
    console.log("Password is not valid");
}

// 3. Phone Number Validation

function validateCreditCardNumber(cardNumber) {
    const cardNumberRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3(?:[0-9]{4}|[0-9]{4}\\s?4[0-9]{6}\\s?(?:[0-9]{5})?)$)/;
    if (cardNumberRegex.test(cardNumber)) {
        return true;
    } else {
        return false;
    }
}

const cardNumber = "4111111111111111";
if (validateCreditCardNumber(cardNumber)) {
    console.log("Credit card number is valid");
} else {
    console.log("Credit card number is not valid");
}