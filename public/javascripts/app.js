var url = "http://localhost:3000/api/login";

var init = function() {
    $("#Button").click(function(e) {
        e.preventDefault();
        var text = document.getElementById("EnterText").value;
        var password = document.getElementById("EnterPassword").value;
        var data = {username:text,password:password};
        $.post(url,data,function (response) {
           console.log(response);
            alert('login '+response.status);
        },'json');

        /* works as well but
        var settings = {
            "url": url,
            "method": "POST",
            "headers": {
            "content-type": "application/json",
        },
        "data": "{\"username\":\""+text+"\",\"password\":\""+password+"\"}"
        }

        $.ajax(settings).done(function (response) {
        console.log(response.status);
        alert("Login "+response.status)
    });
    */
  });
};

$(document).ready(init);