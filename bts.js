//*NOME DOS MEMBROS - STRING


const nameJin = `Kim Seok-jin`
const nameSuga = `Min Yoon-gi`
const nameJHope = `Jung Ho-seok`
const nameRM = `Kim Nam-joon`
const nameJimin = `Park Ji-min`
const nameV = `Kim Tae-hyung`
const nameJK = `Jeon Jung-kook`

//*NOMES ARTISTICOS - STRING


const nickJin = `Jin`
const nickSuga = `Suga`
const nickJHope = `J-hope`
const nickRM = `RM`
const nickJimin = `Jimin`
const nickV = `V`
const nickJK = `Jungkook`


//*IDADE DOS MEMBROS - STRING+NUMBER

function idade (anoNumb, mesNumb, diaNumb) {
    
    let auxiliar = 0 //controla a idade por meio do mes e dia
    const date = new Date () // data geral
    const dia = date.getDate() 
    const mes = date.getMonth()
    const ano = date.getFullYear()

    if (mes < mesNumb) {
        auxiliar = 1
    } else { 
        if (mes == mesNumb) {
         if (dia < diaNumb) {
             auxiliar = 1
    } else {
            }
    
    }}

    return ano - anoNumb - auxiliar
}

const aniversarioJin = idade (1992, 12, 04)
const aniversarioSuga = idade (1993, 03, 09)
const aniversarioJHope = idade (1994, 02, 18)
const aniversarioRM = idade (1994, 09, 01)
const aniversarioJimin = idade (1995, 10, 13)
const aniversarioV = idade (1995, 12, 30)
const aniversarioJK = idade (1997, 09, 01)

//IDADE COREANA DOS MEMBROS - BOOLEAN


function idadeCoreana (anoNumb, mesNumb, diaNumb) {
    
    let auxiliar = 1 //controla a idade por meio do mes e dia
    const date = new Date () // data geral
    const ano = date.getFullYear()
    

    return ano - anoNumb + auxiliar
}


const aniversarioCoreiaJin = idadeCoreana (1992)
const aniversarioCoreiaSuga = idadeCoreana (1993)
const aniversarioCoreiaJHope = idadeCoreana (1994)
const aniversarioCoreiaRM = idadeCoreana (1994)
const aniversarioCoreiaJimin = idadeCoreana (1995)
const aniversarioCoreiaV = idadeCoreana (1995)
const aniversarioCoreiaJK = idadeCoreana (1997)


//FRASE COM O NOME E IDADE - CONSOLE.LOG 

console.log (`O ${nickJin} tem atualmentea ${aniversarioJin} anos, mas para a coreia ele possui ${aniversarioCoreiaJin} anos`)
console.log (`O ${nickSuga} tem atualmente ${aniversarioSuga} anos, mas para a coreia ele possui ${aniversarioCoreiaSuga} anos`)
console.log (`O ${nickJHope} tem atualmente ${aniversarioJHope} anos, mas para a coreia ele possui ${aniversarioCoreiaJHope} anos`)
console.log (`O ${nickRM} tem atualmente ${aniversarioRM} anos, mas para a coreia ele possui ${aniversarioCoreiaRM} anos`)
console.log (`O ${nickJimin} tem atualmente ${aniversarioJimin} anos, mas para a coreia ele possui ${aniversarioCoreiaJimin} anos`)
console.log (`O ${nickV} tem atualmente ${aniversarioV} anos, mas para a coreia ele possui ${aniversarioCoreiaV} anos`)
console.log (`O ${nickJK} tem atualmente ${aniversarioJK} anos, mas para a coreia ele possui ${aniversarioCoreiaJK} anos`)

//MEDIA DE IDADES
console.log (`MEDIA DA IDADE DOS MEMBROS`) 

const mediaDeIdade = (aniversarioJin+aniversarioSuga+aniversarioJHope+aniversarioRM+aniversarioJimin+aniversarioV+aniversarioJK)/7
console.log (mediaDeIdade)

//IDADE COREANA E IDADE OCIDENTEAL TEM MAIS DE UM ANO DE DIFERENCA?
console.log (`A IDADE COREANA E OCIDENTAL DOS MEMBROS TEM MAIS DE UM ANO DE DIFERENCA?`)

const idadeBooleanJin = ((aniversarioJin - aniversarioCoreiaJin) < -1)
const idadeBooleanSuga = ((aniversarioSuga - aniversarioCoreiaSuga) < -1)
const idadeBooleanJHope = ((aniversarioJHope - aniversarioCoreiaJHope) < -1)
const idadeBooleanRM = ((aniversarioRM - aniversarioCoreiaRM) < -1)
const idadeBooleanJimin = ((aniversarioJimin - aniversarioCoreiaJimin) < -1)
const idadeBooleanV = ((aniversarioV - aniversarioCoreiaV) < -1)
const idadeBooleanJK = ((aniversarioJK - aniversarioCoreiaJK) < -1)

console.log (`A idade coreana e ocidental do Jin tem mais de um ano de diferenca? ${idadeBooleanJin} `)
console.log (`A idade coreana e ocidental do Suga tem mais de um ano de diferenca? ${idadeBooleanSuga} `)
console.log (`A idade coreana e ocidental do J-Hope tem mais de um ano de diferenca? ${idadeBooleanJHope} `)
console.log (`A idade coreana e ocidental do RM tem mais de um ano de diferenca? ${idadeBooleanRM} `)
console.log (`A idade coreana e ocidental do Jimin tem mais de um ano de diferenca? ${idadeBooleanJimin} `)
console.log (`A idade coreana e ocidental do V tem mais de um ano de diferenca? ${idadeBooleanV} `)
console.log (`A idade coreana e ocidental do JK tem mais de um ano de diferenca? ${idadeBooleanJK} `)

//ALBUNS - ARRAY

const albuns = ["2 COOL 4 SKOOL", 
    "O!RUL8,2?"
    ,"Skool Luv Affair" 
    ,"DARK&WILD" 
    ,"The Most Beautiful Moment In Life Pt"
    ,"The Most Beautiful Moment In Life Pt. 2" 
    ,"The Most Beautiful Moment In Life: Young Forever" 
    ,"WINGS" 
    ,"You Never Walk Alone" 
    ,"LOVE YOURSELF 轉 'Tear'" 
    ,"LOVE YOURSELF 結 'Answer'" 
    ,"Map of the Soul: Persona" 
    ,"Map of the Soul: 7" 
    ,"BE" 
    ,"Butter" 
    ,"Proof" 
]

console.table (albuns)