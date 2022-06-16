const pessoa ={
  nome:"Mariana",
  idade:28,
  profissao: 'Desenvolvedora',
}
pessoa.idade=29;

const andre: {nome:string, idade:number, profissao:string} = {
  nome: "Andre",
  idade: 25,
  profissao: 'Manobrista'
}
const paula: {nome:string, idade:number, profissao:string} = {
  nome: "Paula",
  idade: 27,
  profissao: 'Cabeleleira'
}

enum Profissao{
  Professora,
  Atriz,
  Desenvolvedora,
  JogadoraDeFutebol
}

interface Pessoa{
  nome:string,
  idade:number,
  profissao?:Profissao
}

interface Estudante extends Pessoa{
  materias:string[]
}

const vanessa: Pessoa={
  nome:'Vanessa',
  idade:22,
  profissao:Profissao.Desenvolvedora
}
const jessica:Estudante = {
  nome:'Jessica',
  idade:26,
  profissao:Profissao.Desenvolvedora,
  materias:['Matematica discreta', 'programação']
}
const monica:Estudante = {
  nome:'Jessica',
  idade:26,
  materias:['Matematica discreta', 'programação']
}

function listar(lista:string[]){
  for(const item of lista){
    console.log(' ', item);
    
  }
}
listar(monica.materias);
