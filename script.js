function register() {


    var firstName = document.getElementById('fname').value;
    var lasttName = document.getElementById('lname').value;
    var quantity = document.getElementById('qty').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('retypePassword').value;


    if (firstName == "") {
        document.getElementById("fnameError").innerHTML = "This field is required..!!";
        $(document).ready(function() {
            $("#fname").focus();
        });
        return false;
    } else {
        document.getElementById("fnameError").innerHTML = "";
    }



    if (lasttName == "") {
        document.getElementById("lnameError").innerHTML = "This field is required..!!";
        $(document).ready(function() {
            $("#lname").focus();
        });
        return false;
    } else {
        document.getElementById("lnameError").innerHTML = "";
    }



    if (quantity == "" || quantity < 1 || quantity > 12) {
        document.getElementById("qtyError").innerHTML = "Quantity should be 1 - 12..!!";
        $(document).ready(function() {
            $("#qty").focus();
        });
        return false;
    } else {
        document.getElementById("qtyError").innerHTML = "";
    }



    if (email == "") {
        document.getElementById("emailError").innerHTML = "This field is required..!!";
        $(document).ready(function() {
            $("#email").focus();
        });
        return false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }



    if (password == "") {
        document.getElementById("passwordError").innerHTML = "This field is required..!!";
        $(document).ready(function() {
            $("#password").focus();
        });
        return false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }



    if (rePassword == "") {
        document.getElementById("rePasswordError").innerHTML = "This field is required..!!";
        $(document).ready(function() {
            $("#retypePassword").focus();
        });
        return false;
    } else {
        document.getElementById("rePasswordError").innerHTML = "";
    }



    if (password != rePassword) {
        document.getElementById("rePasswordError").innerHTML = "Passwords are not match..!!";
        $(document).ready(function() {
            $("#retypePassword").focus();
        });
        return false;
    } else {
        document.getElementById("rePasswordError").innerHTML = "";
    }



    window.location = "registered.html"; // Redirecting to register success page.


}