"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: 'Desenvolvedora',
};
pessoa.idade = 29;
const andre = {
    nome: "Andre",
    idade: 25,
    profissao: 'Manobrista'
};
const paula = {
    nome: "Paula",
    idade: 27,
    profissao: 'Cabeleleira'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 22,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 26,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematica discreta', 'programação']
};
const monica = {
    nome: 'Jessica',
    idade: 26,
    materias: ['Matematica discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' ', item);
    }
}
listar(monica.materias);
