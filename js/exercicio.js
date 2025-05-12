window.onload = open();

function open() {

    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    document.getElementById("titleExercicio").innerHTML = page.charAt(0).toUpperCase() + page.slice(1).toLocaleLowerCase();

    fetch(`http://localhost:3000/exercicios?type=${page}`)
        .then(res => res.json())
        .then(data => {
            
            loadExercicios(data);
            insertDropbox(data);
        })
}

function loadExercicios(exercicios) {

    for (let i = 0; i < exercicios.length; i++) {

        /** Dropbox fechado */
        let htmlClosedDrop = `
            <span class="muscTitle">${exercicios[i].name}</span>
            <span class="iconDrop">
                <i id="material-icons${i}" class="material-icons">expand_more</i>
            </span>
        `;

        let divMusculos = document.createElement('div');
        divMusculos.classList.add('divMusculos');
        divMusculos.innerHTML = htmlClosedDrop;

        document.getElementById("divBackground").appendChild(divMusculos);

        let posicaoInicial = (exercicios[i].initialPosition).split('.');

        let execucao = (exercicios[i].execution).split('.');

        posicaoInicial.pop();
        execucao.pop();

        /** Dropbox aberto */
        let htmlOpenedDrop = `
        <img class='execImage' src='${exercicios[i].image}'>

        <div class='description'>
            <p>Posição Inicial:</p>
            <ul id='ulPosicao${i}'></ul>
            <p>Execução:</p>
            <ul id='ulExecucao${i}'></ul>
        </div>
        `
        let divExercicios = document.createElement('div');
        divExercicios.id = `exercicios${i}`;
        divExercicios.classList.add('exercicios');
        divExercicios.innerHTML = htmlOpenedDrop;

        document.getElementById("divBackground").appendChild(divExercicios);

        for (let m = 0; m < posicaoInicial.length; m++) {

            let li = document.createElement('li');
            li.innerHTML = posicaoInicial[m]

            document.getElementById(`ulPosicao${i}`).appendChild(li);
        }

        for (let j = 0; j < execucao.length; j++) {

            let li = document.createElement('li');
            li.innerHTML = execucao[j]

            document.getElementById(`ulExecucao${i}`).appendChild(li);
        }

    }
}

function insertDropbox(exercicios) {

    for (let i = 0; i < exercicios.length; i++) {

        document.getElementById(`material-icons${i}`).addEventListener("click", function () {

            let rotateAtual = document.getElementById(`material-icons${i}`).style.rotate

            if (rotateAtual == '0deg' || rotateAtual == '') {

                document.getElementById(`material-icons${i}`).style.rotate = '180deg'

                document.getElementById(`exercicios${i}`).style.display = 'block'

                for (let m = 0; m < exercicios.length; m++) {

                    if (m != i) {
                        document.getElementById(`material-icons${m}`).style.rotate = '0deg'

                        document.getElementById(`exercicios${m}`).style.display = 'none'
                    }

                }

            } else {

                document.getElementById(`material-icons${i}`).style.rotate = '0deg'

                document.getElementById(`exercicios${i}`).style.display = 'none'

            }
        });

    }
}