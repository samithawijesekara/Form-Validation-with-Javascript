function register() {
    var firstName = document.getElementById('fname').value;
    var lasttName = document.getElementById('lname').value;
    var quantity = document.getElementById('qty').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('retypePassword').value;


    if (firstName == "") {

        document.getElementById("fnameError").innerHTML = "This field is required..!!";
        firstName.focus();
    } else {
        document.getElementById("fnameError").innerHTML = "";
    }


    if (lasttName == "") {
        document.getElementById("lnameError").innerHTML = "This field is required..!!";
        lasttName.focus();
    } else {
        document.getElementById("lnameError").innerHTML = "";
    }


    if (quantity == "" || quantity < 0 || quantity > 11) {
        document.getElementById("qtyError").innerHTML = "Quantity should be 1 - 10..!!";
        quantity.focus();
    } else {
        document.getElementById("qtyError").innerHTML = "";
    }


    if (email == "") {
        document.getElementById("emailError").innerHTML = "This field is required..!!";
        email.focus();
    } else {
        document.getElementById("emailError").innerHTML = "";
    }


    if (password == "") {
        document.getElementById("passwordError").innerHTML = "This field is required..!!";
        password.focus();
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }


    if (rePassword == "") {
        document.getElementById("rePasswordError").innerHTML = "This field is required..!!";
        rePassword.focus();
    } else {
        document.getElementById("rePasswordError").innerHTML = "";
    }


    if (password != rePassword) {
        document.getElementById("rePasswordError").innerHTML = "Passwords are not match..!!";
        rePassword.focus();
    } else {
        document.getElementById("rePasswordError").innerHTML = "";
    }


    window.location = "registered.html"; // Redirecting to register success page.

}