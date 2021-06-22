// Code institute's EmailJs walkthrough referenced
//Creates the sendEmail function to be called from contact form
function sendEmail(contactForm) {
    emailjs.send("gmail", "rent_a_drone", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_number": contactForm.contactnumber.value,
        "package_option": $('input[name=package]:checked', '#contactForm').val(),
        "message": contactForm.message.value
    })

    .then(

        // Alert pop up to user if email is sent
        function (response) {
            alert("Thank you, your email has been sent successfully.", response);
        },

        // Alert pop up to user if email fails to send
        function (error) {
            alert("Opps sorry that didn't work, please try again.", error);    
        }
    );
    
    // Resets contact form once email is sent
    document.getElementById("contactForm").reset();

    // Stops page from reloading
    return false;
}