function validation() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;

    if (name === "") {
        alert("Name must be filled out");
        document.forms["contactForm"]["name"].select();
        document.forms["contactForm"]["name"].focus();
        return false;
    }
    
    if (email === "") {
        alert("Email must be filled out");
        document.forms["contactForm"]["email"].select();
        document.forms["contactForm"]["email"].focus();
        return false;
    }
    
    if (message === "") {
        alert("Message must be filled out");
        document.forms["contactForm"]["message"].select();
        document.forms["contactForm"]["message"].focus();
        return false;
    }

    return true;
}
