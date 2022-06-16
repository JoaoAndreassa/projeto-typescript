enum job{
    padeiro,
    atriz
}
interface Pessoa{
    nome:string,
    idade:number,
    job?:job
}

const maria: Pessoa = {
    nome: "maria",
    idade: 29,
    job:job.atriz
}
const roberto:Pessoa = {
    nome:"roberto",
    idade:19,
    job:job.padeiro
    
}
const laura:Pessoa = {
    nome: "laura",
    idade:32,
    job:job.atriz
}

const carlos:Pessoa={
    nome: "carlos",
    idade: 19,
    job:job.padeiro
}


