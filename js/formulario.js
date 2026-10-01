export function configurarFormulario() {

    const formulario = document.getElementById("formulario");

    const toast = document.getElementById("toast");

    const mensagem = document.getElementById("mensagem");

    const contador = document.getElementById("contador");

    if (mensagem && contador) {

        mensagem.addEventListener("input", function () {

            contador.textContent =
                mensagem.value.length + " caracteres";

        });

    }

    if (formulario && toast) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            let formularioValido = true;

            const nome = document.getElementById("nome");

            if (nome.value.trim() === "") {

                mostrarErro(nome, "Informe seu nome.");

                formularioValido = false;

            } else {

                removerErro(nome);

            }

            const email = document.getElementById("email");

            const emailValido =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

            if (email.value.trim() === "") {

                mostrarErro(email, "Informe seu e-mail.");

                formularioValido = false;

            } else if (!emailValido) {

                mostrarErro(email, "Digite um e-mail válido.");

                formularioValido = false;

            } else {

                removerErro(email);

            }

            const telefone = document.getElementById("telefone");

            const telefoneValido =
                telefone.value.replace(/\D/g, "").length >= 10;

            if (telefone.value.trim() === "") {

                mostrarErro(telefone, "Informe seu telefone.");

                formularioValido = false;

            } else if (!telefoneValido) {

                mostrarErro(telefone, "Digite um telefone válido.");

                formularioValido = false;

            } else {

                removerErro(telefone);

            }

            const cpf = document.getElementById("cpf");

            const cpfValido =
                cpf.value.replace(/\D/g, "").length === 11;

            if (cpf.value.trim() === "") {

                mostrarErro(cpf, "Informe seu CPF.");

                formularioValido = false;

            } else if (!cpfValido) {

                mostrarErro(cpf, "Digite um CPF válido.");

                formularioValido = false;

            } else {

                removerErro(cpf);

            }

            const nascimento =
                document.getElementById("nascimento");

            if (nascimento.value === "") {

                mostrarErro(
                    nascimento,
                    "Informe sua data de nascimento."
                );

                formularioValido = false;

            } else {

                removerErro(nascimento);

            }

            const endereco =
                document.getElementById("endereco");

            if (endereco.value.trim() === "") {

                mostrarErro(
                    endereco,
                    "Informe seu endereço."
                );

                formularioValido = false;

            } else {

                removerErro(endereco);

            }

            const numero =
                document.getElementById("numero");

            if (numero.value.trim() === "") {

                mostrarErro(
                    numero,
                    "Informe o número."
                );

                formularioValido = false;

            } else {

                removerErro(numero);

            }

            const cep = document.getElementById("cep");

            const cepValido =
                cep.value.replace(/\D/g, "").length === 8;

            if (cep.value.trim() === "") {

                mostrarErro(cep, "Informe seu CEP.");

                formularioValido = false;

            } else if (!cepValido) {

                mostrarErro(cep, "Digite um CEP válido.");

                formularioValido = false;

            } else {

                removerErro(cep);

            }

            if (formularioValido) {

                toast.classList.add("ativo");

                formulario.reset();

                if (contador) {

                    contador.textContent = "0 caracteres";

                }

                setTimeout(function () {

                    toast.classList.remove("ativo");

                }, 3000);

            }

        });

    }

}

function mostrarErro(campo, mensagem) {

    campo.classList.add("erro");

    let mensagemErro =
        campo.parentElement.querySelector(
            ".mensagem-erro-" + campo.id
        );

    if (!mensagemErro) {

        mensagemErro = document.createElement("small");

        mensagemErro.classList.add("mensagem-erro");

        mensagemErro.classList.add(
            "mensagem-erro-" + campo.id
        );

        campo.insertAdjacentElement(
            "afterend",
            mensagemErro
        );

    }

    mensagemErro.textContent = mensagem;

}

function removerErro(campo) {

    campo.classList.remove("erro");

    const mensagemErro =
        campo.parentElement.querySelector(
            ".mensagem-erro-" + campo.id
        );

    if (mensagemErro) {

        mensagemErro.remove();

    }

}