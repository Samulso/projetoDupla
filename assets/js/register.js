document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();


    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    const user = { name, email, password };

    const existingUser = JSON.parse(localStorage.getItem(email));
    if (existingUser) {
        alert("E-mail já cadastrado!");
        return;

    }

    localStorage.setItem(email, JSON.stringify(user));
    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
});