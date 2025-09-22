document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if(username === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            window.location.href = 'principal.html';
        }
    });
});
