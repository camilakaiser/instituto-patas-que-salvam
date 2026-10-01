import { gerarProjetos } from "./projetos.js";
import { configurarFormulario } from "./formulario.js";
import { configurarGrafico } from "./grafico.js";

const conteudo = document.getElementById("conteudo");

const menu = document.querySelector(".menu-lista");

const paginas = {

    inicio: `

        <section id="sobre">

            <h2>Sobre o Instituto Patas que Salvam</h2>

            <p>
                O Instituto Patas que Salvam é uma organização sem fins lucrativos
                dedicada à proteção, ao resgate e à defesa de animais em situação
                de abandono, maus-tratos e vulnerabilidade.
            </p>

            <p>
                Oferecemos cuidados, alimentação, atendimento veterinário e um
                ambiente seguro para os animais resgatados, além de incentivar
                a adoção responsável.
            </p>

        </section>

        <section id="missao-visao-valores">

            <h2>Nossa missão</h2>

            <p>
                Nossa missão é proteger animais em situação de vulnerabilidade,
                oferecer cuidados e promover a adoção responsável.
            </p>

            <h2>Nossa visão</h2>

            <p>
                Buscamos construir um futuro em que os animais tenham uma vida
                digna, segura e cercada de cuidado.
            </p>

            <h2>Nossos valores</h2>

            <ul>
                <li>Respeito à vida animal</li>
                <li>Amor e empatia</li>
                <li>Responsabilidade</li>
                <li>Adoção consciente</li>
                <li>Proteção e defesa animal</li>
            </ul>

        </section>

        <section id="contato">

            <h2>Entre em contato</h2>

            <address>

                <p><strong>Endereço:</strong> Rua dos Animais, 150 – Curitiba/PR</p>

                <p><strong>Telefone:</strong> (41) 3333-2020</p>

                <p><strong>E-mail:</strong> contato@patasquesalvam.org</p>

            </address>

        </section>

    `,

    projetos: `

        <section id="projetos">

            <h2>Nossos projetos</h2>

            <div class="grafico-container">

                <h3>Ações do Instituto</h3>

                <canvas id="graficoProjetos"></canvas>

            </div>

            <span class="badge">Projeto ativo</span>

            <span class="badge">Resgate animal</span>

            <span class="badge">Proteção</span>

            <div class="alerta">

                <strong>Importante:</strong>

                As ações de voluntariado e apoio aos animais estão abertas
                para novos participantes.

            </div>

            <div id="lista-projetos">

                ${gerarProjetos()}

            </div>

        </section>

        <section id="voluntariado">

            <h2>Voluntariado</h2>

            <p>
            Você também pode fazer parte do Instituto Patas que Salvam
            sendo um voluntário. Existem diversas formas de ajudar
            a nossa causa.
        </p>

        <h3>Como posso ser voluntário?</h3>

        <ul>
            <li>Ajudar nos cuidados dos animais</li>
            <li>Auxiliar em campanhas de adoção</li>
            <li>Participar de eventos da ONG</li>
            <li>Ajudar na divulgação das campanhas</li>
            <li>Contribuir com atividades de organização</li>
        </ul>

        <p>
            Para participar, entre em contato conosco e informe que
            deseja ser voluntário. Nossa equipe irá explicar as
            atividades disponíveis.
        </p>

    </section>


    <section id="doacoes">
        <h2>Campanhas de doação</h2>

        <p>
            As doações são muito importantes para manter os projetos
            da ONG e garantir que os animais recebam os cuidados
            necessários.
        </p>

        <h3>O que pode ser doado?</h3>

        <ul>
            <li>Ração para cães e gatos</li>
            <li>Medicamentos</li>
            <li>Produtos de higiene</li>
            <li>Cobertores e caminhas</li>
            <li>Brinquedos</li>
            <li>Doações em dinheiro</li>
        </ul>

        <h3>Como fazer uma doação?</h3>

        <p>
            Para realizar uma doação, entre em contato com a ONG
            através do telefone ou e-mail disponíveis na página
            inicial. Nossa equipe irá informar como realizar a doação.
        </p>

    </section>


    <section id="participar">
        <h2>Faça parte dessa causa</h2>

        <p>
            Seja através do voluntariado, de uma doação ou da adoção
            responsável, toda ajuda é importante para transformar a
            vida dos animais.
        </p>

        <p>
            <strong>Juntos podemos ajudar a salvar mais vidas!</strong>
        </p>
        
        <button type="button" id="abrirModal">
        Saiba mais
        </button>

    </section>
<div class="modal" id="modal">
    <div class="modal-conteudo">
        <h2>Como participar?</h2>

        <p>
            Você pode ajudar o Instituto Patas que Salvam
            como voluntário, realizando doações ou divulgando
            nossas ações.
        </p>

        <button type="button" id="fecharModal">
            Fechar
        </button>
    </div>
</div>

    `,

    cadastro: `
        <section>

            <h2>Cadastro</h2>

            <p>
                Preencha seus dados para demonstrar seu interesse
                em ajudar o Instituto Patas que Salvam.
            </p>

            <form id="formulario" novalidate>

                <fieldset>

                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo:</label><br>
                    <input type="text" id="nome" class="campo" required><br>

                    <label for="email">E-mail:</label><br>
                    <input type="email" id="email" class="campo" required><br>

                    <label for="telefone">Telefone:</label><br>
                    <input type="tel"
                           id="telefone"
                           class="campo"
                           placeholder="(41) 99999-9999"
                           required><br>

                    <label for="cpf">CPF:</label><br>
                    <input type="text"
                           id="cpf"
                           class="campo"
                           placeholder="000.000.000-00"
                           required><br>

                    <label for="nascimento">Data de nascimento:</label><br>
                    <input type="date"
                           id="nascimento"
                           class="campo"
                           required><br>
                </fieldset>

                <fieldset>

                    <legend>Endereço</legend>

                    <label for="endereco">Endereço:</label><br>
                    <input type="text" id="endereco" class="campo" required><br>

                    <label for="numero">Número:</label><br>
                    <input type="number" id="numero" class="campo" required><br>

                    <label for="cep">CEP:</label><br>
                    <input type="text"
                           id="cep"
                           class="campo"
                           placeholder="00000-000"
                           required><br>

                </fieldset>

                <fieldset>

                    <legend>Mensagem</legend>

                    <label for="mensagem">
                        Conte como você gostaria de ajudar:
                    </label><br>

                    <textarea id="mensagem" rows="5"></textarea>

                  <p id="contador">0 caracteres</p>

                </fieldset>

                <br>

                <button type="submit">
                    Enviar cadastro
                </button>

                <button type="reset">
                    Limpar
                </button>

            </form>

            <div class="toast" id="toast">
                Cadastro enviado com sucesso!
            </div>

        </section>
    `       

};

function configurarModal() {

    const abrirModal = document.getElementById("abrirModal");
    const fecharModal = document.getElementById("fecharModal");
    const modal = document.getElementById("modal");

    if (abrirModal && modal) {
        abrirModal.addEventListener("click", function () {
            modal.classList.add("ativo");
        });
    }

    if (fecharModal && modal) {
        fecharModal.addEventListener("click", function () {
            modal.classList.remove("ativo");
        });
    }
}

export function navegar(pagina, secao = null) {

    if (conteudo && paginas[pagina]) {

        conteudo.innerHTML = paginas[pagina];

        configurarFormulario();
        configurarGrafico();
        configurarModal();

        if (menu) {

            menu.classList.remove("ativo");

        }

        if (secao) {

            setTimeout(function () {

                const elemento =
                    document.getElementById(secao);

                if (elemento) {

                    elemento.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 100);

        } else {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }

}

const linksSecao =
    document.querySelectorAll(".link-secao");

linksSecao.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const secao = link.dataset.secao;

        navegar("inicio", secao);

    });

});

const botaoMenu =
    document.querySelector(".menu-hamburguer");

if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", function () {

        menu.classList.toggle("ativo");

    });

}

window.navegar = navegar;

const botaoModoEscuro =
    document.getElementById("modoEscuro");

if (botaoModoEscuro) {

    botaoModoEscuro.addEventListener("click", function () {

        document.body.classList.toggle("modo-escuro");

        if (document.body.classList.contains("modo-escuro")) {
            botaoModoEscuro.textContent = "☀️";
            botaoModoEscuro.setAttribute(
                "aria-label",
                "Desativar modo escuro"
            );
        } else {
            botaoModoEscuro.textContent = "🌙";
            botaoModoEscuro.setAttribute(
                "aria-label",
                "Ativar modo escuro"
            );
        }

    });

}