let login = document.getElementsByClassName("Log-In");
login.addEventListener("submit", function ()
{
    
    const username = document.getElementById("Name").value;
    const password = document.getElementById("Password").value;
    if (username === 'AdminSEF123' && password === 'SeF@ctORy$$456'){
        window.location.assign= "todolist.html";
    }
    else{
        alert("invalid credentials")
    }
});



    
