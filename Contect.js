function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "selvaraj975112@gmail.com",
        Password : "diodinesh2012@",
        To : 'tamilwebseries528@gmail.com',
        From : document.getElementById("email").value,
        Subject : "new contect form enquiry",
        Body : "Name:" + document.getElementById("name").value
        + "<br> Email:" +  document.getElementById("email").value
        + "<br> Phone no:" +  document.getElementById("phone").value
        + "<br> Message:" +  document.getElementById("message").value
    }).then(
      message => alert("Meaage send successfully")
    );

}