function submitReceiveForm() {
    // You can perform further actions here, such as sending data to a server

    // Display alert for form submission
    alert("Form submitted successfully!");
}


// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJlGl7zGNF91fzssCyeSip0ihcILz2Hg8",
    authDomain: "resqfood-32712.firebaseapp.com",
    databaseURL: "https://resqfood-32712-default-rtdb.firebaseio.com",
    projectId: "resqfood-32712",
    storageBucket: "resqfood-32712.appspot.com",
    messagingSenderId: "5525829704",
    appId: "1:5525829704:web:742986df2074c1ead6007d"
  };

firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const receiveFoodDB = firebase.database().ref("ReceiveFood");

function submitReceiveForm() {
    // Get form values
    const receiverName = getElementVal("receiverName");
    const description = getElementVal("description");

    // Save form data to Firebase
    saveReceivedFood(receiverName, description);

    // Display alert for form submission
    alert("Form submitted successfully!");

    // Reset the form
    resetReceiveForm();
}

function saveReceivedFood(receiverName, description) {
    // Create a new entry in the database
    const newReceivedFood = receiveFoodDB.push();

    // Set data for the new entry
    newReceivedFood.set({
        ReceiverName: receiverName,
        Description: description,
        Timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

function getElementVal(id) {
    return document.getElementById(id).value;
}

function resetReceiveForm() {
    // Reset form fields
    document.getElementById("receiverName").value = "";
    document.getElementById("description").value = "";
}
