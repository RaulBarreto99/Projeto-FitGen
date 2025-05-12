
fetch('http://localhost:3000/users?email=loginRaul')
    .then(res => res.json())
    .then(data => {
        let nome = document.getElementById('nome');
        let sobrenome = document.getElementById('sobrenome');
        let idade = document.getElementById('idade');
        let sexo = document.getElementById('sexo');
        let email = document.getElementById('email');
        let altura = document.getElementById('altura');
        let peso = document.getElementById('peso');
        let series = document.getElementById('series');
        let reps = document.getElementById('reps');
        let imagem = document.getElementById('imagem');

        nome.innerHTML = data[0].name;
        sobrenome.innerHTML = data[0].lastname;
        idade.innerHTML = data[0].dateOfBirth;
        sexo.innerHTML = data[0].sex;
        email.innerHTML = data[0].email;
        altura.innerHTML = data[0].height;
        peso.innerHTML = data[0].weight;
        series.innerHTML = data[0].series;
        reps.innerHTML = data[0].repetitions;
        imagem.src = data[0].photo;
    });

