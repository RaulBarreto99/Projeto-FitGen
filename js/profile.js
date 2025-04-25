import DataBase from "../data/data_base.js";

const database = new DataBase();

const user = database.usuarios.filter(user => user.id == 1)

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

nome.innerHTML = user[0].name;
sobrenome.innerHTML = user[0].lastname;
idade.innerHTML = user[0].age;
sexo.innerHTML = user[0].sex;
email.innerHTML = user[0].email;
altura.innerHTML = user[0].height;
peso.innerHTML = user[0].weight;
series.innerHTML = user[0].series;
reps.innerHTML = user[0].reps;
imagem.src = user[0].photo;