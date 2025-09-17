// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {

    // Captura o formulário pelo ID
    const form = document.getElementById("formulario");

    // Captura o elemento onde será exibida a mensagem
    const mensagem = document.getElementById("mensagem");

    // Adiciona o evento de submissão ao formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores dos campos
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const idade = document.getElementById("idade").value.trim();

        // Validação simples dos campos obrigatórios
        if (nome === "" || email === "") {
            mensagem.innerText = "Por favor, preencha os campos obrigatórios.";
            mensagem.style.color = "red";
            return;
        }

        // Se tudo estiver correto, mostra mensagem de sucesso
        mensagem.innerText = `Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}\nIdade: ${idade || "Não informado"}`;
        mensagem.style.color = "green";

        // Limpa o formulário
        form.reset();
    });
});