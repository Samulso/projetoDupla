document.getElementById("reset-password-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    
    alert(`Um link de redefinição de senha foi enviado para ${email}.`);
    emailInput.value = "";

    
    window.location.href = "login.html";
});


document.getElementById("reset-password-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    const response = await fetch("http://localhost:3000/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (result.success) {
        alert("E-mail de redefinição enviado com sucesso!");
        window.location.href = "login.html";
    } else {
        alert("Erro ao enviar o e-mail. Verifique o endereço informado.");
    }
});