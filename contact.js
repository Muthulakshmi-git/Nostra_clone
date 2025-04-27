//Contact form

var namee = document.getElementById("namee")
var mail = document.getElementById("mail")
var msg = document.getElementById("msg")
var submitbtn = document.getElementById("submitbtn")


submitbtn.addEventListener("click",function(event)
{
   event.preventDefault();

    var nameRegex = /^[a-zA-Z]+$/;
    var mailRegex = /^[a-z0-9.]+@gmail\.com$/;

    var nameerror = document.getElementById("nameerror")
    var mailerror = document.getElementById("mailerror")

    var validate = true
    if(nameRegex.test(namee.value) == false)
    {
        nameerror.style.display = "inline"
        validate = false
    }
    else{
        nameerror.style.display = "none"
    }

    if(mailRegex.test(mail.value)==false)
    {
        mailerror.style.display = "inline"
        validate = false
    }
    else{
        mailerror.style.display = "none"
    }
    if(msg.value == "")
    {
        validate = false
    }
    if(validate == true)
    {
        alert("Your details submited !")
    }
}
)