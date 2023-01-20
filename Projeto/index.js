/*---------------------------------------     SEMANA 1  ----------------------------------------------------*/

// Bts membro

// * Nome Artistico:
// * Nome Real:
// * Idade:
// * Hyung ou Maknae:
// * Hometown:
// * Está no exercito?

/* --------------------------------------------------------------- */

/* CALCULO DE IDADE */

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
/* --------------------------------------------------------------- */
/* Membros Hyung Line*/

const member1RealName = `Kim Seok-jin`
const member1ArtisticName = `Jin`
const member1Age = idade (1992, 12, 04)
const member1Class = `Hyung`
const member1Hometown = `Gwacheon`
const member1Exercito = true 

const member2RealName = `Min Yoon-gi`
const member2ArtisticName = `Suga`
const member2Age = idade (1993, 03, 09)
const member2Class = `Hyung`
const member2Hometown = `Daegu`
const member2Exercito = false

const member3RealName = `Jung Ho-seok`
const member3ArtisticName = `J-Hope`
const member3Age = idade (1994, 02, 18)
const member3Class = `Hyung`
const member3Hometown = `Gwangju`
const member3Exercito = false

const member4RealName = `Kim Nam-joon`
const member4ArtisticName = `RM`
const member4Age = idade (1994, 09, 01)
const member4Class = `Hyung`
const member4Hometown = `Ilsan`
const member4Exercito = false

/* --------------------------------------------------------------- */
/* Idade media da Hyung Line*/

const mediaDeIdadeHyungLine = ((member1Age+member2Age+member3Age+member4Age)/4)

console.log(mediaDeIdadeHyungLine)

/* --------------------------------------------------------------- */
/* Verificação da situação do alistamento da Hyung Line*/

const todosForamParaOExercito = (member1Exercito && member2Exercito && member3Exercito && member4Exercito)

console.log(todosForamParaOExercito)

/* --------------------------------------------------------------- */
/* Array de Albuns e musicas solos dos membros*/

const member1AlbunsEMusicasSolos = [`The Astronaut`,`Super Tuna`,`Your`,`It's Definitely You`, `Abyss`, `Tonight`, `Moon`, `Awake`, `Epiphany`,`Mom`,`Autumn Outside The Post Office`,`I Love You`,`Tonight`]

const member2AlbunsEMusicasSolos = [`D-2 - Album`, `Agust-D - Album`,`That That (feat. PSY)`,`First Love`,`It Doesn't Matter`,`eight (feat. IU)`,`All I Do Is Win`,`Swagger`,`Blueberry Eyes (feat. MAX)`,`My Universe (SUGA's remix)`,`Interlude: Shadow`,`So Far Away (ft. SURAN)`,`The Last`,`Trivia: Seesaw`,`What do you think?`,`Suga's Interlude (by Halsey)`,`First Love`] 

const member3AlbunsEMusicasSolos = [`Hope World - Album`,`Jack In The Box - Album`,`Chicken Noodle Soup (feat Becky G)`,`Hug Me (feat V)`,`Rush Hour (feat Crush)`,`Outro: Ego`,`1 Verse`,`P.O.P Pt. 1`, `Boy Meets Evil`]

const member4AlbunsEMusicasSolos = [`mono - Album`,`Indigo - Album`, `Change feat Wale`, `Bicycle`, `Crying Over You`, `Strange by Agust D`, `Champion`,`Winter Flower`, ` Don't`, `Gajah by Gaeko`, `Timeless`, `U`, ` ProMeTheUs`,`Intro : Persona`,`Trivia: Love`]

/* --------------------------------------------------------------- */
/* Relatório*/

console.log( `${member1RealName.toUpperCase()}
Nome Artístico: ${member1ArtisticName}
Idade: ${member1Age}
Hyung ou Maknae: ${member1Class}
Cidade Natal: ${member1Hometown}
Está no exercito? ${member1Exercito}
Albuns e músicas solos: ${member1AlbunsEMusicasSolos}
`)

console.log( `${member2RealName.toUpperCase()}
Nome Artístico: ${member2ArtisticName}
Idade: ${member2Age}
Hyung ou Maknae: ${member2Class}
Cidade Natal: ${member2Hometown}
Está no exercito? ${member2Exercito}
Albuns e músicas solos: ${member2AlbunsEMusicasSolos}
`)

console.log( `${member3RealName.toUpperCase()}
Nome Artístico: ${member3ArtisticName}
Idade: ${member3Age}
Hyung ou Maknae: ${member3Class}
Cidade Natal: ${member3Hometown}
Está no exercito? ${member3Exercito}
Albuns e músicas solos: ${member3AlbunsEMusicasSolos}
`)

console.log( `${member4RealName.toUpperCase()}
Nome Artístico: ${member4ArtisticName}
Idade: ${member4Age}
Hyung ou Maknae: ${member4Class}
Cidade Natal: ${member4Hometown}
Está no exercito? ${member4Exercito}
Albuns e músicas solos: ${member4AlbunsEMusicasSolos}
`)

/* --------------------------------------------------------------- */

/*---------------------------------------     SEMANA 2  ----------------------------------------------------*/

/* Objetos */

const jinBTS = {nomeReal:`Kim Seok-jin`, nomeArtistico:`Jin`, idade:member1Age, hyungOuMaknae:`Hyung`, cidadeNatal:`Gwacheon`, exercito:true, albunsEMusicasSolos:member1AlbunsEMusicasSolos}
const sugaBTS = {nomeReal:`Min Yoon-gi`, nomeArtistico:`Suga`, idade:member2Age, hyungOuMaknae:`Hyung`, cidadeNatal:`Daegu`, exercito:false, albunsEMusicasSolos:member2AlbunsEMusicasSolos}
const jHopeBTS = {nomeReal:`Jung Ho-seok`, nomeArtistico:`J-Hope`, idade:member3Age, hyungOuMaknae:`Hyung`, cidadeNatal:`Gwangju`, exercito:false, albunsEMusicasSolos:member3AlbunsEMusicasSolos}
const rmBTS = {nomeReal:`Kim Nam-joon`, nomeArtistico:`RM`, idade:member4Age, hyungOuMaknae:`Hyung`, cidadeNatal:`Ilsan`, exercito:false, albunsEMusicasSolos:member4AlbunsEMusicasSolos}

/* --------------------------------------------------------------- */
/* Array vazia */

const btsMembros = []

/* --------------------------------------------------------------- */
/* Push objetos */

btsMembros.push(jinBTS,sugaBTS,jHopeBTS,rmBTS)

console.log(btsMembros)

/* --------------------------------------------------------------- */
/* Adicionar itens ao Array com verificação (modificado para que eu acrescente mais membros u.u) */
//const de idade e albuns solos da maknae line
const member5Age = idade (1995, 10, 13)
const member5AlbunsEMusicasSolos = [`With You (feat. Ha Sungwoon)`,`Promise`,`VIBE (feat. Taeyang)`,`Christmas Love`,`Lie`,`Intro: Serendipity`,`Serendipity`,`Filter`]

const member6Age = idade (1995, 12, 30)
const member6AlbunsEMusicasSolos = [`Christmas Tree`,`Sweet Night`,`Winter Bear`,`Scenery`,`Snow Flower (feat Peakboy)`,`It's Deefinitely You (feat Jin)`,`Sleep`,`Hug Me (feat J-Hope)`,`Someone Like You (cover)`,`4 O'CLOCK (네시) (feat. RM)`,`A Million Stars`,`It's Beginning To Look a Lot Like Christmas (cover)`,`Stigma`,`Intro: Singularity`,`Inner Child`]

const member7Age = idade (1997, 09, 01)
const member7AlbunsEMusicasSolos = [`Dreamers (feat Fahad Al Kubaisi)`,`Still With You`,`Stay Alive`,``, `Decalcomania`,`Left and Right (feat. Charlie Puth)`,`Begin`,`Euphoria`,`My Time`]

/* --------------------------------------------------------------- */

const jiminBTS = {nomeReal:`Park Ji-min`, nomeArtistico:`Jimin`, idade:member5Age, hyungOuMaknae:`Maknae`, cidadeNatal:`Busan`, exercito:false, albunsEMusicasSolos:member5AlbunsEMusicasSolos}

const vBTS = {nomeReal:`Kim Tae-hyung`, nomeArtistico:`V`, idade:member6Age, hyungOuMaknae:`Maknae`, cidadeNatal:`Daegu`, exercito:false, albunsEMusicasSolos:member6AlbunsEMusicasSolos}

const jkBTS = {nomeReal:`Jeon Jung-kook`, nomeArtistico:`Jung-kook(JK)`, idade:member7Age, hyungOuMaknae:`Maknae`, cidadeNatal:`Busan`, exercito:false, albunsEMusicasSolos:member7AlbunsEMusicasSolos}

const bangChanStray = {nomeReal:`Christopher Bang`, nomeArtistico:`Bang Chan`, idade:idade(1995,10,3), hyungOuMaknae:`Hyung`, cidadeNatal:`Seul`, exercito:false, albunsEMusicasSolos:``}


function maknae (m){
    if (m.hyungOuMaknae === `Maknae`){
        btsMembros.push(m)
    }else{alert(`Essa pessoa não faz parte do BTS!`)}
}

maknae(jiminBTS)
maknae(vBTS)
maknae(jkBTS)

console.log(btsMembros)

maknae(bangChanStray)

/* --------------------------------------------------------------- */
/*---------------------------------------     SEMANA 3  ----------------------------------------------------*/

for (let i = 0; i<btsMembros.length;i++){
    console.log(`${btsMembros[i].nomeReal.toUpperCase()}
Nome Artístico: ${btsMembros[i].nomeArtistico}
Idade: ${btsMembros[i].idade}
Hyung ou Maknae: ${btsMembros[i].hyungOuMaknae}
Cidade natal: ${btsMembros[i].cidadeNatal}
Está no exército? ${btsMembros[i].exercito}
Albuns e músicas solos: ${btsMembros[i].albunsEMusicasSolos}
`)
}

/* --------------------------------------------------------------- */
//testar funções
// function objeto (objeto,string){
//     if(objeto.includes(string)){
//         return string
//     } else{
//         alert (`Membro não encontrado!`)
//     }
// }

//     objeto (btsMembros,'Jimin')
const digiteprompt = prompt (`Digite um nome`) 

const filtro = btsMembros.filter(function(busca) {
    
    const digite = digiteprompt

     if(busca.nomeArtistico == digite || busca.nomeReal == digite){
        return busca.nomeArtistico
     } else {
        return 0
      } 
      
 });

 if (filtro == 0) {
    alert (`Item nao encontrado`)
 } else{
    filtro
 }

 console.log(filtro)

    