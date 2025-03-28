document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("passoword").value;
    const confirmPassword = document.getElementById("confimarsenha").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    // Simulação de comunicação com o backend
    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    const result = await response.json();

    if (result.success) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    } else {
        alert("Erro ao cadastrar. Tente novamente.");
    }
});