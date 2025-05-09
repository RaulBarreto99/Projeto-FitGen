window.onload = open();

function open() {

    let lista_exercicios = [
        'Biceps',
        'Triceps',
        'Perna',
        'Ombro',
        'Costas',
        'Peito',
        'Abdômen'
    ]

    loadListaExercicios(lista_exercicios);
}

function loadListaExercicios(lista_exercicios){

    for (let i = 0; i < lista_exercicios.length; i++) {

        let divMusculos = document.createElement('div');
        divMusculos.classList.add('musculo');
        divMusculos.id = `${lista_exercicios[i].toLowerCase()}`
        divMusculos.innerHTML = lista_exercicios[i];

        document.getElementById("exercicios").appendChild(divMusculos);

        loadClicks(lista_exercicios[i].toLowerCase())

    }

}

function loadClicks(id){

    document.getElementById(`${id}`).addEventListener("click", function () {

        window.location.href = `exercicio.html?page=${id}`;
        
    })

}

