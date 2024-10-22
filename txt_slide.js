
/*function til at beskrive hvor lang tid der går mellem hvert bogstav bliver skrevet, i millisekunder.
Promise repræsenterer en eventual færdiggørelse af funktionen, når promise er blevet resolved*/
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

/*array med de ord, der kommer til at køre i loopet*/
const phrases = ['Vær med i et fællesskab!', 'Vær med til at gøre noget godt for andre!', 'Vær med til at gøre en forskel!', 'Vær en støtte i svære tider!']
          
/* Bruger variabel el, til at finde getElementByID for at finde 'typewriter'*/
const el = document.getElementById('typewriter')
          
/* bruger let til at deklare, SleepTimes bruges som ventid/forsinkelse mellem steps*/
let sleepTime = 120
        
/*det nummer i array'et, som loop kommer til at starte på */
let curPhraseIndex = 0
          
/*async gør det muligt at pause funktionens udførelse, ved await, og den kan køre uden at påvirke resten af koden. 
while (true) betyder, at denne funktion vil køre for evigt, så længe den ikke manuelt stoppes.
curWord gemmer den aktuelle sætning fra phrases-listen baseret på den aktuelle indeksværdi curPhraseIndex.*/
const writeLoop = async function () {
    while (true) {
    let curWord = phrases[curPhraseIndex]
          
    /*så længe i er mindre end længden på ordet, læg 1 til */
    for (let i = 0; i < curWord.length; i++) {
    /*gør, at teksten bliver gradvist tilføjet ét tegn ad gangen, hvilket skaber en skrivemaskineeffekt.*/
    el.innerText = curWord.substring(0, i + 1)
    /*sætter delay mellem hvert bogstav bliver udskrevet sleepTime er defineret længere oppe*/
    await sleep(sleepTime)
    }
          
    /*pause mellem et ord bliver skrevet og slettet*/
    await sleep(sleepTime * 12)
          
    /*sletter ordet der lige er blevet skrevet, ved at gøre det samme men modsat */
    for (let i = curWord.length; i > 0; i--) {
    /*forkorter curWord tegn for tegn fra slutningen, hvilket giver en slettende effekt.*/
    el.innerText = curWord.substring(0, i - 1)
    await sleep(sleepTime)
    }
          
    await sleep(sleepTime * 10)
          
    /*tjekker, om curPhraseIndex har nået det sidste indeks i phrases-listen:
    Hvis det har, nulstilles curPhraseIndex til 0 for at starte forfra med det første ord.
    Ellers øges curPhraseIndex med 1 for at skifte til næste ord i listen.*/
    if (curPhraseIndex === phrases.length - 1) {
    curPhraseIndex = 0
    } else {
    curPhraseIndex++
        }
    }
}
writeLoop()
          
