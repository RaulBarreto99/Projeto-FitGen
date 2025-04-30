class dataBase {

    constructor() {

        this.base_exercicios = [
            { 'id':'1','name': 'Rosca Martelo', 'type': 'biceps', 'posicao_inicial': 'Fique de pé, segurando um halter em cada mão, com as palmas das mãos voltadas para o corpo (posição neutra).Mantenha os pés na largura dos ombros e os joelhos levemente flexionados.Mantendo as costas retas, contraia o abdômen para estabilizar o tronco.', 'execucao': 'Comece o movimento flexionando os cotovelos, levantando os halteres em direção aos ombros.Mantenha as palmas das mãos voltadas uma para a outra durante todo o movimento.Eleve os halteres até que os antebraços estejam próximos aos bíceps.Mantenha os cotovelos próximos ao corpo e evite movê-los para frente.', 'image': '../images/exercicios/Rosca Martelo.jpg' },
    
            { 'id':'2','name': 'Rosca Inclinada', 'type': 'biceps', 'posicao_inicial': 'Ajuste o banco para um ângulo de aproximadamente 45 graus. Sente-se no banco com a parte superior das costas apoiada no encosto. Segure um halter em cada mão, com os braços totalmente estendidos para baixo e as palmas das mãos voltadas para cima.Mantenha os pés firmemente no chão e os ombros relaxados. Contraia o abdômen para estabilizar o tronco e manter as costas retas. Os cotovelos devem estar próximos ao corpo e levemente flexionados.', 'execucao': 'Comece o movimento flexionando os cotovelos, levantando os halteres em direção aos ombros. Mantenha as palmas das mãos voltadas para cima durante todo o movimento. Eleve os halteres até que os bíceps estejam totalmente contraídos e os halteres próximos aos ombros. Mantenha os cotovelos imóveis e evite movê-los para frente ou para os lados.', 'image': '../images/exercicios/Rosca Inclinada.jpg' },
    
            { 'id':'3','name': 'Rosca Scott', 'type': 'biceps', 'posicao_inicial': 'Ajuste o banco Scott de forma que o apoio para os braços esteja na altura correta para você. Sente-se no banco Scott com os pés firmemente no chão. Posicione a parte superior dos braços no apoio inclinado do banco Scott, com as axilas encostadas na borda do apoio. Segure uma barra ou halteres com as palmas das mãos voltadas para cima.Mantenha os braços totalmente estendidos e os cotovelos ligeiramente flexionados. Contraia o abdômen para estabilizar o tronco e mantenha as costas retas. Certifique-se de que os ombros estão relaxados e longe das orelhas.', 'execucao': 'Comece o movimento flexionando os cotovelos, levantando a barra ou os halteres em direção aos ombros. Mantenha os cotovelos imóveis e próximos ao apoio do banco Scott durante todo o movimento. Eleve a barra ou os halteres até que os bíceps estejam totalmente contraídos e os pesos próximos aos ombros.', 'image': '../images/exercicios/Rosca Scott.jpg' },
    
            { 'id':'4','name': 'Rosca Concentrada', 'type': 'biceps', 'posicao_inicial': 'Sente-se em um banco com os pés firmemente apoiados no chão. Segure um halter com uma das mãos e posicione a parte de trás do seu braço contra a parte interna da sua coxa. O cotovelo deve estar ligeiramente flexionado.Mantenha a outra mão na coxa oposta ou na parte lateral do banco para apoio. O braço que segura o halter deve estar estendido, mas sem travar completamente o cotovelo. Contraia o abdômen para estabilizar o tronco e mantenha as costas retas.', 'execucao': 'Comece o movimento flexionando o cotovelo, levantando o halter em direção ao ombro. Mantenha o braço contra a coxa durante todo o movimento, evitando mover o cotovelo para frente ou para os lados. Eleve o halter até que o bíceps esteja totalmente contraído e o halter próximo ao ombro.', 'image': '../images/exercicios/Rosca Concentrada.jpg' },
    
            { 'id':'5','name': 'Rosca Barra W', 'type': 'biceps', 'posicao_inicial': 'Pegue uma barra W (barra EZ) com as duas mãos, usando uma pegada supinada (palmas das mãos voltadas para cima). Fique em pé com os pés na largura dos ombros e os joelhos levemente flexionados. Mantenha os braços estendidos ao longo do corpo e segure a barra W à frente das coxas.Mantenha os ombros relaxados e as costas retas. Contraia o abdômen para estabilizar o tronco. Os cotovelos devem estar próximos ao corpo e ligeiramente flexionados.', 'execucao': 'Comece o movimento flexionando os cotovelos, levantando a barra W em direção aos ombros. Mantenha os cotovelos imóveis e próximos ao corpo durante todo o movimento. Eleve a barra até que os bíceps estejam totalmente contraídos e a barra próxima aos ombros.', 'image': '../images/exercicios/Rosca Barra W.jpg' },
    
            { 'id':'6','name': 'Rosca Alternada', 'type': 'biceps', 'posicao_inicial': 'Pegue um halter em cada mão, com as palmas das mãos voltadas para dentro (posição neutra). Fique em pé com os pés na largura dos ombros e os joelhos levemente flexionados. Mantenha os braços estendidos ao longo do corpo.Mantenha os ombros relaxados e as costas retas. Contraia o abdômen para estabilizar o tronco. Os cotovelos devem estar próximos ao corpo e ligeiramente flexionados.', 'execucao': 'Comece o movimento levantando um halter em direção ao ombro, girando a mão para que a palma fique voltada para cima durante a elevação. Mantenha o cotovelo imóvel e próximo ao corpo durante todo o movimento. Eleve o halter até que o bíceps esteja totalmente contraído e o halter próximo ao ombro. Abaixe o halter lentamente, estendendo o braço de volta à posição inicial. Repita o movimento com o outro braço, alternando os lados.', 'image': '../images/exercicios/Rosca Alternada.jpg' }
        ]
        this.usuarios = [
            {'id':1,'name':'Raul','lastname':'Barreto', 'email':'loginRaul','password':'senhaRaul','age':23,'sex':'M','height':'1,84','weight':'93','series':'4','reps':'8','photo':'../images/perfilRaul.jpg'}, {'id':2,'name':'teste','lastname':'teste', 'email':'teste','password':'teste','age':23,'sex':'M','height':'1,84','weight':'93','series':'4','reps':'8','photo':'../images/perfilRaul.jpg'}
        ]

    }

    filterExercicios(field, value){

        return this.base_exercicios.filter(register => register[field] === value);
    }

    filterUsers(field, value){

        return this.usuarios.filter(register => register[field] === value);
    }

}
export default dataBase;