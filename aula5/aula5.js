//Crie um programa que conte de 1 até 10 de 1 em 1 usando a estrutura de for

for (let i=1; i<=10; i++) {
    console.log(i)
}

//Agora faça o programa contar de 10 até 0 de 2 em 2

for (let i=10; i>=0; i=i-2) {
    console.log(i)
}

// Crie um  algoritmo contador de passos que acumule os valores de passos informados pelo usuário até que a meta seja atingida ( a meta é 1000 passos)




_____________________________________________________________________________________________________________
// Escreva uma estrutura de repetição que vai 
// calcular a soma de todos
// os números entre 0 e 100.

let soma=0
for (let i=0; i<=100; i++){
    soma= soma+i
    console.log(soma)
}

// para maximo = 3
// 1 iteracao -> soma = 0; i = 0 -> soma = 0 + 0 = 0
// 2 iteracao -> soma = 0; i = 1 -> soma = 0 + 1 = 1
// 3 iteracao -> soma = 1; i = 2 -> soma = 1 + 2 = 3
// 4 iteracao -> soma = 3; i = 3 -> soma = 3 + 3 = 6
// 5 iteracao -> soma = 6; i = 4 // PARA
// FINAL -> soma = 6
_______

// Escreva um loop para calcular a seguinte soma:
// 1 * 1 + 2 * 2 + 3 * 3 + ... + 50 * 50

let soma=0
for (let i=1; i<=50; i++){
    soma= soma+(i*i)
    console.log(soma)
}

// para maximo = 3
// 1 iteracao -> soma = 0; i = 1 -> soma = 0 + 1 * 1 = 1
// 2 iteracao -> soma = 1; i = 2 -> soma = 1 + 2 * 2 = 5
// 3 iteracao -> soma = 5; i = 3 -> soma = 5 + 3 * 3 = 14
// 4 iteracao -> soma = 14; i = 4 // PARA
// FINAL -> soma = 14
_________

// Escreva um loop para
// calcular a seguinte soma:
// 1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250

let soma=0
for (let i=1; i<250; i++){
    soma= soma+(i*(i+1))
    console.log(soma)
}

// i=1
// soma = soma + (i*(i+1))
// 0 = 0 + (1*(1+1))
// soma= 2

// i=2
// soma + (i*(i+1))
// 2+2*(2+1) = 8
// soma=8

// i=3
// 8+(3*(3+1))=20
// soma=20
_________

// Escreva um loop que
// vai calcular 10! (10 fatorial), o
// que significa 10 * 9 * 8 * 7 ... * 1.
let valor = 1
for (let i=10; i>1; i--){
    valor = valor*(i)
    console.log(valor)
}
//ou

let valor = 10
for (let i=10; i>1; i--){
    valor = valor*(i-1)
    console.log(valor)
}

let valor = 10
for (let i=9; i>1; i--){
    valor = valor*(i)
    console.log(valor)
}

// valor = valor*(i)
// 1 = 1*10
// 1 = 90

// valor = valor*(i)
// 8*90=720

// valor = valor*(i)
// 7*720=5040
__________________________

// Escreva um loop que "lance uma moeda" a cada 
// nova iteração. Considere 1 = cara,
// 0 = coroa. Rode esse loop 1000 vezes e
// mostre o numero de vezes caras e o numero
// de coroas no console.

function caraOuCoroa() {
    let cara = 0
    let coroa = 0
    for (let i = 1; i<= 1000; i++){
        let moeda  = Math.floor(Math.random()*2)
        if (moeda == 1) {
            cara += 1
        } else {
            coroa += 1
        }
    }
    console.log("Cara:", cara, "Coroa:", coroa)
}


// Escreva um loop que gera uma lista com 100
// número randomicos.


// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]



// Escreva um loop que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]


// 1 iteracao A -> j = 0; matriz = []
    // 1 iteracao B -> i = 0; linha = []; linha.push(0 - 0) -> linha = [0]
    // 2 iteracao B -> i = 1; linha = [0]; linha.push(1 - 0) -> linha = [0, 1]
    // 3 iteracao B -> i = 2; linha = [0, 1]; linha.push(2 - 0) -> linha = [0, 1, 2]
    // 4 iteracao B -> i = 3; linha = [0, 1, 2]; linha.push(3 - 0) -> linha = [0, 1, 2, 3]
    // 5 iteracao B -> i = 4; linha = [0, 1, 2, 3]; linha.push(4 - 0) -> linha = [0, 1, 2, 3, 4]
// matriz.push([0, 1, 2, 3, 4]) -> matriz = [[0, 1, 2, 3, 4]]
// 2 iteracao A -> j = 1; matriz = [[0, 1, 2, 3, 4]]
    // 1 iteracao B -> i = 0; linha = []; linha.push(0 - 1) -> linha = [-1]
    // 2 iteracao B -> i = 1; linha = [-1]; linha.push(1 - 1) -> linha = [-1, 0]
    // 3 iteracao B -> i = 2; linha = [-1, 0]; linha.push(2 - 1) -> linha = [-1, 0, 1]
    // 4 iteracao B -> i = 3; linha = [-1, 0, 1]; linha.push(3 - 1) -> linha = [-1, 0, 1, 2]
    // 5 iteracao B -> i = 4; linha = [-1, 0, 1, 2]; linha.push(4 - 1) -> linha = [-1, 0, 1, 2, 3]
// matriz.push([-1, 0, 1, 2, 3]) -> matriz = [[0, 1, 2, 3, 4], [-1, 0, 1, 2, 3]]
// ...

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// **
// *



// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567



// Escreva um loop que calcula quantos termos a soma
// 1 + 2 + 3 + ... precisa para
// que o resultado dela exceda um milhão.



//Dada a lista de convidados abaixo escreva um
//loop que percorra a lista e mostre se o nome da
//pessoa convidada foi encontrado. Caso tenha sido encontrado,
// mostre a mensagem 'Seja bemvindo, <convidado>!'
//listaConvidados = ['Alice','João','Maria Rita', 'Sueli','Carlos']
let listaConvidados = ['Alice','João','Maria Rita', 'Sueli','Carlos']
let nomeUsuario = prompt("Informe seu nome")
let encontrado = false

for (let i = 0; i < listaConvidados.length; i++){
    if (nomeUsuario == listaConvidados[i]){
        encontrado = true
        break
    }
}
encontrado?console.log("Seja bem vindo(a),",nomeUsuario):console.log("Você não está na lista")