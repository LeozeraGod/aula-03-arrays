import { questionFloat } from 'readline-sync'

//Calcule a media de 4 notas e entregue a saida com a media entre as notas

const nota1 = questionFloat("Informe a primeira nota:");
const nota2 = questionFloat("Informe a segunda nota:");;
const nota3 = questionFloat("Informe a terceira nota:");;
const nota4 = questionFloat("Informe a quarta nota:");;

//PROCESSAMENTO
const media = (nota1+nota2+nota3+nota4)/4;

if(media >=7) {
    console.log("Aluno Aprovado");
}else {
    console.log("Aluno Reprovado");
}
