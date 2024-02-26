document.addEventListener('DOMContentLoaded', () => {
    // Retrieving user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        // Displaying the user profile data
        displayUserProfile(userData);
    }
});

function displayUserProfile(userData) {
    // Getting profile fields
    const firstNameField = document.getElementById('firstName');
    const lastNameField = document.getElementById('lastName');
    const dobField = document.getElementById('dob');
    const genderField = document.getElementById('gender');

    // Populating profile with user data
    firstNameField.textContent = userData.firstName;
    lastNameField.textContent = userData.lastName;
    dobField.textContent = userData.dob;
    genderField.textContent = userData.gender;
}
