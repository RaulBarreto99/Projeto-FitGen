window.onload = open();

function open() {

    for (let i = 0; i < 7; i++) {

        document.getElementById(`material-icons${i}`).addEventListener("click", function () {

            let teste = document.getElementById(`material-icons${i}`).style.rotate

            if (teste == '0deg') {

                document.getElementById(`material-icons${i}`).style.rotate = '180deg'

                document.getElementById(`exercicios${i}`).style.display = 'block'

            } else {

                document.getElementById(`material-icons${i}`).style.rotate = '0deg'

                document.getElementById(`exercicios${i}`).style.display = 'none'

            }
        });

    }

}





