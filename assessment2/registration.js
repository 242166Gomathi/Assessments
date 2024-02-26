document.addEventListener("DOMContentLoaded", function () {
    // Retrieving the form inputs
    const username = document.getElementById("username");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const dob = document.getElementById("dob");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Retrieve error elements from each field
    const usernameError = document.getElementById("usernameError");
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const dobError = document.getElementById("dobError");
    const genderError = document.getElementById("genderError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Retrieving submit button
    const registerButton = document.getElementById("registerButton");

    // Function to validate form
    function validateForm() {
        let isValid = true;

        // Checking each field for validity
        if (username.value.trim() === '') {
            showError(usernameError, "Please enter a username");
            isValid = false;
        } else {
            clearError(usernameError);
        }

        if (firstName.value.trim() === '') {
            showError(firstNameError, "Please enter your first name");
            isValid = false;
        } else {
            clearError(firstNameError);
        }

        if (lastName.value.trim() === '') {
            showError(lastNameError, "Please enter your last name");
            isValid = false;
        } else {
            clearError(lastNameError);
        }

        // const dobValue = new Date(dob.value);
        // const currentDate = new Date();
        // // Check if the date of birth is after the current date
        // if (isNaN(dobValue) || dobValue >= currentDate) {
        //     showError(dobError, "Please select a valid date of birth");
        //     isValid = false;
        // } else {
        //     clearError(dobError);
        // }

        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            showError(genderError, "Please select your gender");
            isValid = false;
        } else {
            clearError(genderError);
        }

        if (!validatePassword()) {
            isValid = false;
        }

        if (isValid) {
            registerButton.removeAttribute("disabled");
        } else {
            registerButton.setAttribute("disabled", "disabled");
        }

        return isValid;
    }

    // Function to validate password
    function validatePassword() {
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();

        if (passwordValue === '' || confirmPasswordValue === '') {
            showError(passwordError, "Please enter your password");
            showError(confirmPasswordError, "Please enter and confirm your password");
            return false;
        } else if (passwordValue !== confirmPasswordValue) {
            showError(passwordError, "Passwords do not match");
            showError(confirmPasswordError, "Passwords do not match");
            return false;
        } else {
            clearError(passwordError);
            clearError(confirmPasswordError);
            return true;
        }
    }

    // Function to show error messages
    // function showError(element, message) {
    //     element.textContent = message;
    //     element.style.display = "block";
    // }

    // Function to clear error messages
    function clearError(element) {
        element.textContent = "";
        element.style.display = "none";
    }

    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Validating form and saving data to local
        if (validateForm()) {
            const userData = {
                username: username.value.trim(),
                firstName: firstName.value.trim(),
                lastName: lastName.value.trim(),
                dob: dob.value.trim(),
                gender: document.querySelector('input[name="gender"]:checked').value,
                password: password.value.trim()
            };
            localStorage.setItem("userData", JSON.stringify(userData));

            alert("Registration successful!");
            window.location.href = "profile.html";
        }
    });

    // Adding input fields to validate on input/change
    username.addEventListener("input", validateForm);
    firstName.addEventListener("input", validateForm);
    lastName.addEventListener("input", validateForm);
    dob.addEventListener("change", validateForm);
    document.querySelectorAll('input[name="gender"]').forEach(radio => radio.addEventListener("change", validateForm));
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validatePassword);

    // Validation form
    validateForm();
});
