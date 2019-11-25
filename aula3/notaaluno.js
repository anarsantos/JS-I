let nota1=5
let nota2=4.5
let media=(nota1 + nota2)/2
let aprovado=media>=6
let recuperacao=(media<6)&&(media>=5)

if(aprovado){
    console.log('Aluno foi aprovado')
} else if(recuperacao){
    console.log('Aluno de recuperação')
}
 else {
    console.log('Aluno foi reprovado!')
}



