document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       MENU MOBILE
    ================================= */
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Fecha menu ao clicar em link
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });


    /* ================================
       CALCULADORA AGROECOLÓGICA
    ================================= */
    const inputHectares = document.getElementById("hectares");
    const resultadoBox = document.getElementById("resultado");

    window.calcularImpacto = function () {
        const hectares = Number(inputHectares.value);

        if (!hectares || hectares <= 0) {
            alert("Insira um número válido de hectares.");
            return;
        }

        // lógica simulada
        const aguaSalva = hectares * 45000;
        const carbono = hectares * 1.5;

        document.getElementById("economia-agua").innerHTML =
            `💧 <strong>${aguaSalva.toLocaleString("pt-BR")}</strong> litros de água economizados por ano.`;

        document.getElementById("creditos-carbono").innerHTML =
            `🌱 <strong>${carbono.toFixed(1)}</strong> toneladas de CO₂ evitadas/retidas.`;

        resultadoBox.style.display = "block";
    };


    /* ================================
       VALIDAÇÃO DO FORMULÁRIO
    ================================= */
    const form = document.querySelector(".form-contato");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = form.querySelector("input").value.trim();

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Inscrição realizada com sucesso!");
        form.reset();
    });


    /* ================================
       ANIMAÇÃO SCROLL (FADE-IN)
    ================================= */
    const faders = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    faders.forEach(el => observer.observe(el));
});
