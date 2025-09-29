document.getElementById("cadastroBtn").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username !== "" && password !== ""){
        alert("Conta criada com sucesso!");
        window.location.href = "index.html"; 
    } else {
        alert("Preencha todos os campos!");
    }
});