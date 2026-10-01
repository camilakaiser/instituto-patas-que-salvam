export function configurarGrafico() {

    const canvas = document.getElementById("graficoProjetos");

    if (!canvas) {
        return;
    }

    new Chart(canvas, {

        type: "bar",

        data: {

            labels: [
                "Resgate e proteção",
                "Campanha de adoção",
                "Cuidados veterinários"
            ],

            datasets: [

                {
                    label: "Quantidade de ações",

                    data: [
                        10,
                        8,
                        12
                    ]
                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: true
                }

            }

        }

    });

}