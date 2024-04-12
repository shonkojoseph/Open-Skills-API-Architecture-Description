
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    console.log(formObject);
    // I used the "IF ELSE statement" in the submiting form

    if (true) { 
        alert('Thank you for choosing Enashipae nails bar, your application was successfully submitted!');
    } else {
        alert('There was an error submitting your application. Please try again later.');
    }
});



// uding the IIFE functin  a comment for welcoming the customer
const greeting = function() {
    console.log('Hello customer, how may I help you??');
}();
