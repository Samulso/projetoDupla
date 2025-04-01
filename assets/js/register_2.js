document.addEventListener("DOMContentLoaded", function () {
    const nextBtn = document.getElementById("next-btn");
    const firstPage = document.getElementById("step-1");
    const secondPage = document.getElementById("step-2");
    const steps = document.querySelectorAll(".step");

    nextBtn.addEventListener("click", function () {
        firstPage.classList.add("hidden");
        secondPage.classList.add("visible");

        // Atualiza a barra de progresso
        steps[0].classList.remove("active");
        steps[1].classList.add("active");
    });
});