document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (result.sucess) {
        alert ("Login bem sucedido!");
        window.location.href = "dashBoard.html";
    } else {
        alert("E-mail ou senha inválidos!");
    }
});