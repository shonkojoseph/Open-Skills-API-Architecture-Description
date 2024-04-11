document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // You can handle the form submission here, for example, sending the form data to a server using AJAX
    // For demonstration purposes, let's just log the form data to the console
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    console.log(formObject);
    
    // After handling the form submission, you can perform any additional actions, such as showing a confirmation message
    alert('Appointment submitted successfully!');
  });
