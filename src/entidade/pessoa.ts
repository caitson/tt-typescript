export class Pessoa {
    nome: string;
    apelido: string;
    idade: number;
    sexo: string;

    constructor(n: string, a: string, i: number, s: string){
        this.nome = n;
        this.apelido = a;
        this.idade = i;
        this.sexo = s;
    }

}