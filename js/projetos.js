
export const projetos = [

    {
        titulo: "Resgate e proteção",
        descricao: "O Instituto Patas que Salvam realiza diferentes ações para ajudar animais em situação de abandono e vulnerabilidade."
    },

    {
        titulo: "Campanha de adoção",
        descricao: "Procuramos encontrar novos lares para os animais resgatados, incentivando a adoção responsável."
    },

    {
        titulo: "Cuidados veterinários",
        descricao: "Os animais resgatados recebem atendimento veterinário, medicamentos e outros cuidados importantes."
    }

];

export function criarProjeto(projeto) {

    return `

        <article class="card-projeto">

            <h3>${projeto.titulo}</h3>

            <p>${projeto.descricao}</p>

        </article>

    `;

}

export function gerarProjetos() {

    return projetos
        .map(criarProjeto)
        .join("");

}