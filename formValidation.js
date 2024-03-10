function validateSecondForm() {                                             // JS File for html project part 2 
                                                                            // code learnt from https://www.w3schools.com/js/js_validation.asp
                                                                            // code learnt from https://www.youtube.com/watch?v=In0nB0ABaUk
    let fullName = document.getElementById("fname").value;                  // retrieves the value inputted into the fullname text box
    let email = document.getElementById("email").value;                     // retrieves the value inputted into the email text box
    let subject = document.getElementById("subject").value;                 // retrieves the value inputted into the subject text box

    if (fullName == "") {
        alert("Full Name must be filled out");                              // if the full name text box isint inputted an error will return stating it must be fulfilled
        return false;
    } else if (email == "") {
        alert("Email must be filled out");                                  // if the email text box isint inputted an error will return stating it must be fulfilled
        return false;
    } else if (subject == "") {
        alert("Subject must be filled out");                                // if the subject text box isint inputted an error will return stating it must be fulfilled
        return false;
    } else {
        alert("Form submitted successfully!");                              // if all forms are submitted it will return a success statement
        return true;  }}


                                                                            // JS Commenting learnt from https://www.w3schools.com/js/js_comments.asp
                                                                            