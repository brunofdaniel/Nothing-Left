document.getElementById('result-alert').style.display = "none";

function check() {
    var fileName = location.href.split("/").slice(-1); 
    var userEntry = document.getElementsByName("userEntry")[0].value;

    if ((fileName == "index.html") && (userEntry == "yes")) {
        alert("Correto!");
    }
    else {
        document.getElementById('result-alert').style.display = "block";  
    }
}