 function getFormvalue(event) {
            // Prevent the default form submission behavior (page reload)
            if (event) {
                event.preventDefault();
            }

            // Reference the form element
            const form = document.getElementById('form1');
            
            // Retrieve values using the elements' name attributes, stripping extra spaces
            const firstName = form.elements['fname'].value.trim();
            const lastName = form.elements['lname'].value.trim();

            // Edge Case Handling: Check if fields are empty
            if (firstName === "" && lastName === "") {
                alert("Please enter both First Name and Last Name.");
                return;
            }

            // Construct the full name string
            const fullName = `${firstName} ${lastName}`.trim();

            // Display the full name using alert()
            alert(fullName);
        }
