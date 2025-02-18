document.getElementById("formIMC").addEventListener("submit", function(event) {
    event.preventDefault();
});

function calcularIMC(){

    let masc = document.getElementById('sexMasc')
    let fem = document.getElementById('sexFem')
    let sex;
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let imc;
    let imcMarcador;
    let mappingMarcador = {
        "17": "0px",
        "18": "10px",
        "19": "20px",
        "20": "25px",
        "21": "40px",
        "22": "50px",
        "23": "60px",
        "24": "75px",
        "25": "85px",
        "26": "95px",
        "27": "105px",
        "28": "115px",
        "29": "130px",
        "30": "140px",
        "31": "150px",
        "32": "165px",
        "33": "180px",
        "34": "190px",
        "35": "200px",
        "36": "210px",
        "37": "213px",
        "38": "216px",
        "39": "219px",
        "40": "222px",
        "41": "225px",
        "42": "228px",
        "43": "231px",
        "44": "234px",
        "45": "237px",
        "46": "240px",
        "47": "243px",
        "48": "246px",
        "49": "249px",
        "50": "252px",
        "51": "255px",
        "52": "258px",
        "53": "261px",
        "54": "264px",
        "55": "267px",
        "56": "270px",
        "57": "275px",
        "58": "280px"
    }

    if (masc.checked) {
        sex = 'masc'
    } else if (fem.checked) {
        sex = 'fem'
    }

    imc = (peso / (altura * altura)).toFixed(2)
    imcMarcador = (peso / (altura * altura)).toFixed(0)

    if(imc > 0){
    document.getElementById('pontos').textContent = imc
    }

    if (imc <= 20 && peso) {

        document.getElementById('resultTitle').textContent = 'Magreza'

        if (sex == 'fem') {
            document.getElementById('resultTitle').style.color = '#f99ab4'
        }else{
            document.getElementById('resultTitle').style.color = '#1e94d8'
        }

        document.getElementById('resultDescription').textContent = 'Lidar com magreza extrema pode ser desafiador, mas com algumas estratégias, é possível alcançar um peso saudável. Buscar orientação de um médico ou nutricionista, incluir alimentos ricos em calorias e nutrientes, considerar suplementos, praticar exercícios de fortalecimento muscular, beber bastante água e evitar dietas muito restritivas são passos importantes. Cada pessoa é única, então a orientação personalizada de um profissional de saúde é essencial.'

        if (imcMarcador < 17) {
            document.getElementById('marcador').style.marginLeft = `0px`;
        } else {
            document.getElementById('marcador').style.marginLeft = `${mappingMarcador[imcMarcador]}`;
        }

    } else if (imc > 20 && imc < 25 && peso) {

        document.getElementById('resultTitle').textContent = 'Normal'

        if (sex == 'fem') {
            document.getElementById('resultTitle').style.color = '#f99ab4'
        }else{
            document.getElementById('resultTitle').style.color = '#1e94d8'
        }

        document.getElementById('resultDescription').textContent = 'Manter um estilo de vida saudável é essencial para garantir saúde e bem-estar a longo prazo. Consuma uma dieta balanceada com alimentos ricos em nutrientes e pratique exercícios regularmente. Beba bastante água, durma de 7 a 9 horas por noite.. Evite dietas restritivas e foque em consistência e equilíbrio, lembrando que cada pessoa é única e deve encontrar o que funciona melhor para si.'

        document.getElementById('marcador').style.marginLeft = `${mappingMarcador[imcMarcador]}`;

    } else if (imc >= 25 && imc < 30 && peso) {

        document.getElementById('resultTitle').textContent = 'Excesso'

        if (sex == 'fem') {
            document.getElementById('resultTitle').style.color = '#f99ab4'
        }else{
            document.getElementById('resultTitle').style.color = '#1e94d8'
        }

        document.getElementById('resultDescription').textContent = 'Manter um peso saudável envolve uma alimentação equilibrada rica em nutrientes, a prática regular de exercícios, hidratação adequada, sono de qualidade e gerenciamento do estresse. Evitar alimentos ultraprocessados e dietas muito restritivas é crucial. A perda de peso saudável requer consistência e equilíbrio, e a orientação de um profissional de saúde é essencial para atender às necessidades individuais.'

        document.getElementById('marcador').style.marginLeft = `${mappingMarcador[imcMarcador]}`;

    } else if (imc >= 30 && imc < 36 && peso) {

        document.getElementById('resultTitle').textContent = 'Obesidade'

        if (sex == 'fem') {
            document.getElementById('resultTitle').style.color = '#f99ab4'
        }else{
            document.getElementById('resultTitle').style.color = '#1e94d8'
        }

        document.getElementById('resultDescription').textContent = 'Lidar com a obesidade de forma saudável envolve manter uma alimentação equilibrada e rica em nutrientes, praticar exercícios regularmente, hidratar-se adequadamente, garantir um sono de qualidade. A consistência e o equilíbrio são fundamentais para a perda de peso sustentável. Cada pessoa é única, por isso é importante buscar orientação personalizada de um profissional de saúde.'

        document.getElementById('marcador').style.marginLeft = `${mappingMarcador[imcMarcador]}`;

    } else if (imc >= 36 && peso) {

        document.getElementById('resultTitle').textContent = 'Super Obesidade'

        if (sex == 'fem') {
            document.getElementById('resultTitle').style.color = '#f99ab4'
        }else{
            document.getElementById('resultTitle').style.color = '#1e94d8'
        }

        document.getElementById('resultDescription').textContent = 'Para lidar com super obesidade de forma saudável, é importante manter uma alimentação equilibrada e rica em nutrientes, evitar alimentos ultraprocessados, praticar exercícios regularmente, hidratar-se bem, garantir um sono de qualidade. A consistência e o equilíbrio são fundamentais para a perda de peso sustentável. Cada pessoa é única, então é essencial buscar orientação de um profissional de saúde.'

        if (imcMarcador > 58) {
            document.getElementById('marcador').style.marginLeft = `280px`;
        } else {
            document.getElementById('marcador').style.marginLeft = `${mappingMarcador[imcMarcador]}`;
        }

    } else {
        console.log('Número não reconhecido.')
    }

};