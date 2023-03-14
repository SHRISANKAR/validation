function validateForm() {
    const firstName = document.forms["myForm"]["firstName"].value;
    const lastName = document.forms["myForm"]["lastName"].value;
    const email = document.forms["myForm"]["email"].value;
    const phone = document.forms["myForm"]["phone"].value;
    const address = document.forms["myForm"]["address"].value;
    const city = document.forms["myForm"]["city"].value;
    const state = document.forms["myForm"]["state"].value;
    const zip = document.forms["myForm"]["zip"].value;
    const username = document.forms["myForm"]["username"].value;
    const password = document.forms["myForm"]["password"].value;
    const confirmPassword = document.forms["myForm"]["confirmPassword"].value;
    const terms = document.forms["myForm"]["terms"].checked;
  
    if (firstName == "" || lastName == "" || email == "" || phone == "" || address == "" || city == "" || state == "" || zip == "" || username == "" || password == "" || confirmPassword == "" || !terms) {
      alert("Please fill out all fields and agree to the terms and conditions");
      return false;
    }
  
    if (password != confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    
    return true;
  }