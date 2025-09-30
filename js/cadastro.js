document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-form");
  const cadastroBtn = document.getElementById("cadastroBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const terms = document.getElementById("terms").checked;

    if (!fullname || !email || !username || !password || !confirmPassword) {
      alert("Preencha todos os campos!");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    if (password.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    if (!terms) {
      alert("Você deve aceitar os termos de uso!");
      return;
    }

    cadastroBtn.textContent = "Criando conta...";
    cadastroBtn.disabled = true;

    setTimeout(() => {
      alert("Conta criada com sucesso!");
      window.location.href = "principal.html";
    }, 1000);
  });
});
