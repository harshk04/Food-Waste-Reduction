function submitForm() {
    const donorName = document.getElementById('donorName').value;
    const foodItem = document.getElementById('foodItem').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const description = document.getElementById('description').value;

    // You can perform further actions with the collected data, such as sending it to a server or displaying it on the page
    console.log("Donor Name: " + donorName);
    console.log("Food Item: " + foodItem);
    console.log("Phone Number: " + phoneNumber);
    console.log("Description: " + description);

    // Display thank you message
    document.getElementById('thankYouMessage').classList.remove('hidden');

    // Optionally, you can reset the form after submission
    resetForm();
}

function resetForm() {
    document.getElementById('donationForm').reset();
}


function showThankYouAlert() {
    // You can customize the alert message or perform additional actions here
    alert("Thank you for your donation!");
    
    // Optional: Show the thank you message
    document.getElementById("thankYouMessage").classList.remove("hidden");
}
