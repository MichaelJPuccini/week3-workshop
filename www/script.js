$(document).ready(function() {
    console.log("Document Loaded...");
    $("#loginform").submit(function(event) {
        event.preventDefault();
        post();
    });
});

function post() {
    console.log("Posting data...");
    var formData = {
        email : $("#email").val(),
        password : $("#password").val()
    };

    // Post via AJAX
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/account",
        data: JSON.stringify(formData),
        dataType : "json",
        success: function(customer) {
            if (customer.valid == true) {
                console.log("Successful Login...");
                // Turn display on for success message
                $("#successmsg").removeClass("hidden");
                $("#successmsg").addClass("showmessage");
                // Turn display off for error message
                $("#errormsg").removeClass("showmessage");
                $("#errormsg").addClass("hidden");
            } else {
                console.log("Unsuccessful Login...");
                // Turn display on for error message
                $("#errormsg").removeClass("hidden");
                $("#errormsg").addClass("showmessage");
                // Turn display off for success message
                $("#successmsg").removeClass("showmessage");
                $("#successmsg").addClass("hidden");
            }
        }
    });
}
