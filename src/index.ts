import { questionInt } from 'readline-sync'

//Calcule a media de 4 notas e entregue a saida com a media entre as notas

//array ou vetor
let notas: [number, number, number, number, number] = [0,0,0,0,0];

for(let i = 0; i < 5; i++){
    const nota = questionInt("Informe a nota "+(i+1)+":");
    notas[i] = nota;

}

const nota1 = questionInt("Informe a primeira nota: ");
const nota2 = questionInt("Informe a segunda nota: ");;
const nota3 = questionInt("Informe a terceira nota: ");;
const nota4 = questionInt("Informe a quarta nota: ");;

//PROCESSAMENTO
const media = (nota1+nota2+nota3+nota4)/4;

if(media >=7) {
    console.log("Aluno Aprovado: " + media);
}else {
    console.log("Aluno Reprovado: " + media);
}
