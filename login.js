document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Captura os valores dos campos de email e senha
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Recupera os usuários do localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Busca um usuário com o email fornecido
    const user = users.find(user => user.email === email);

    // Verifica se o email está registrado
    if (!user) {
        alert("E-mail não encontrado!");
        return;
    }

    // Verifica se a senha fornecida está correta
    if (user.password !== password) {
        alert("Senha incorreta!");
        return;
    }

    // Login bem-sucedido
    alert(`Bem-vindo, ${user.name}!`);

    // Redireciona para a página desejada
    window.location.href = "dashboard.html"; // Altere para a página que deseja redirecionar
});
