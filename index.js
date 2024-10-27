/*
Declarando nome e variáveis do herói.
*/
dadosHeroi = [
    {nome: "Batman", experiencia: 500},
    {nome: "Mulher Maravilha", experiencia: 1500},
    {nome: "Lanterna Verde", experiencia: 3000},
    {nome: "Hulk", experiencia: 6000},
    {nome: "Capitão América", experiencia: 7500},
    {nome: "Homem Aranha", experiencia: 8200},
    {nome: "Home de Ferro", experiencia: 9500},
    {nome: "Thor", experiencia: 10050}
]

/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/
dadosHeroi.forEach(heroi => {
    if (heroi.experiencia < 1000) {
        console.log(`O herói ${heroi.nome} está no nível FERRO com ${heroi.experiencia} pontos de experiência`);
    } else if (heroi.experiencia > 1000 && heroi.experiencia <= 2000) {
        console.log(`O herói ${heroi.nome} está no nível Bronze com ${heroi.experiencia} pontos de experiência`);
    }else if (heroi.experiencia > 2000 && heroi.experiencia <= 5000) {
        console.log(`O herói ${heroi.nome} está no nível PRATA com ${heroi.experiencia} pontos de experiência`);
    } else if (heroi.experiencia > 5000 && heroi.experiencia <= 7000) {
        console.log(`O herói ${heroi.nome} está no nível OURO com ${heroi.experiencia} pontos de experiência`);
    } else if (heroi.experiencia > 7000 && heroi.experiencia <= 8000) {
        console.log(`O herói ${heroi.nome} está no nível PLATINA com ${heroi.experiencia} pontos de experiência`);
    }else if (heroi.experiencia > 8000 && heroi.experiencia <= 9000) {
        console.log(`O herói ${heroi.nome} está no nível ASCENDENTE com ${heroi.experiencia} pontos de experiência`);
    } else if (heroi.experiencia > 9000 && heroi.experiencia <= 10000) {
        console.log(`O herói ${heroi.nome} está no nível IMORTAL com ${heroi.experiencia} pontos de experiência`);
    }else {
        console.log(`O herói ${heroi.nome} está no nível RADIANTE com ${heroi.experiencia} pontos de experiência`);
    }
});

console.log(dadosHeroi.nome);