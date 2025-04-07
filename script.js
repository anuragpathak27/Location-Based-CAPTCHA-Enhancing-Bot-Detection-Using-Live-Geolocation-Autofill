// Function to get the user's live location and autofill the address
function getAddress() {
    const locationMessage = document.getElementById('locationMessage');
    const submitButton = document.getElementById('submitButton');
    const addressField = document.getElementById('address');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            // Autofill the address field with latitude and longitude
            addressField.value = `Latitude: ${lat}, Longitude: ${lon}`;
            locationMessage.textContent = "Human detected. You can login.";
            locationMessage.style.color = "green"; // Change text color to green

            // Enable the submit button
            submitButton.disabled = false;
            submitButton.style.backgroundColor = "#007BFF"; // Reset to original color
        }, (error) => {
            console.error(error);
            alert('Unable to retrieve your location. Please enter your address manually.');
            locationMessage.textContent = "Bot detected. Not login.";
            locationMessage.style.color = "red"; // Change text color to red

            // Disable the submit button
            submitButton.disabled = true;
            submitButton.style.backgroundColor = "#ccc"; // Change to gray color
        });
    } else {
        alert('Geolocation is not supported by this browser.');
        locationMessage.textContent = "Bot detected. Not login.";
        locationMessage.style.color = "red"; // Change text color to red

        // Disable the submit button
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "#ccc"; // Change to gray color
    }
}

// Call the function to get the address when the page loads
window.onload = getAddress;

// Handle form submission
document.getElementById('userForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    // You can handle form data submission here
};
