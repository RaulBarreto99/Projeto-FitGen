$('.btnCalc').click(function () {

    let masc = document.getElementById('sexMasc')
    let fem = document.getElementById('sexFem')
    let sex;
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let imc;

    if (masc.checked) {
        sex = 'masc'
    } else if (fem.checked) {
        sex = 'fem'
    }

    imc = (peso / (altura * altura)).toFixed(2)

    if(imc <= 20){

        console.log('IMC: Magresa')

    }else if(imc > 20 && imc < 25){

        console.log('IMC: Normal')

    }else if(imc >= 25 && imc < 30){

        console.log('IMC: Excesso')

    }else if(imc >= 30 && imc < 36){

        console.log('IMC: Obesidade')

    }else if(imc >= 36){

        console.log('IMC: Super Obesidade')

    }else{

        console.log('Número não reconhecido.')

    }

    

});