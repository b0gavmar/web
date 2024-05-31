// 1. feladat
/**
 * Remove First and Last Character Part Two - 
 * Adott egy karakterlánc, amely vesszőkkel elválasztott karaktersorozatokat tartalmaz.
 * Írj egy olyan függvényt, amely egy új karakterláncot ad vissza, amely az első és az utolsó karakterlánc kivételével ugyanazokat a karakterláncokat tartalmazza, de ezúttal szóközökkel elválasztva.
 * Ha a bemeneti karakterlánc üres, vagy ha az első és az utolsó elem eltávolítása miatt a kapott karakterlánc üres lenne, akkor adjon vissza egy üres értéket (az alábbi példákban NULLáltalános értékként szerepel).
 * 
 * Példa:
 * "1,2,3" --> "2" | 
 * "1,2,3,4" --> "2 3" | 
 * "1,2,3,4,5" --> "2 3 4" | 
 * "" --> NULL | 
 * "1" --> NULL | 
 * "1,2" --> NULL
 * @param {string} string a megadott karakterlánc
*/
function removeFirstAndLast(string) {
    let arr = string.split(",");
    arr.pop();
    arr.shift();
    return arr.join(" ") == 0?  null : arr.join(" ");
}

console.log('1. feladat:')
console.log(removeFirstAndLast(''))
console.log(removeFirstAndLast('1'))
console.log(removeFirstAndLast('A1,B2'))
console.log(removeFirstAndLast('1,2,3'))
console.log(removeFirstAndLast('1,2,3,4'))
console.log(removeFirstAndLast('A1,B2,C3,D4,E5'))
console.log(removeFirstAndLast('A,1,23,456,78,9,Z'))


// 2. feladat
/**
 *  Complementary DNA - 
 * A DNS-szálakban az "A" és a "T" szimbólumok egymás komplementerei, ahogyan a "C" és a "G" is. 
 * A függvényed megkapja a DNS egyik oldalát (string); a másik komplementer oldalát kell visszaadnod. 
 * A DNS-szál soha nem üres, vagy egyáltalán nincs DNS.
 * 
 * Példa: (input --> output)
 * 
 * "ATTGC" --> "TAACG" | 
 * "GTAT" --> "CATA"
 * @param {string} dna a DNS karakterláng
 */
function dnaStrand(dna){
    let arr = dna.split("");
    let t = [];
    arr.forEach(betu => {
        if(betu == "A"){
            t.push("T");
        }
        else if(betu == "T"){
            t.push("A");
        }
        else if(betu == "C"){
            t.push("G");
        }
        else if(betu == "G"){
            t.push("C");
        }
        else{
            t.push("_");
        }
    });

    return t.join("");
}

console.log('\n2. feladat:')
console.log(dnaStrand("AAAA"))
console.log(dnaStrand("ATTGC"))
console.log(dnaStrand("GTAT"))
console.log(dnaStrand("TAGACAT"))
console.log(dnaStrand(""))


// 3. feladat
/**
 * De-Emojify - 
 * Kapsz egy karakterláncot, amely 1 szóközzel elválasztott érzelemláncokból áll, a láncok között pedig 2 szóköz van.
 * 
 * Minden emoji egy számjegyet jelöl:    :) | 0    :D | 1    >( | 2    >:C | 3    :/ | 4    :| | 5    :O | 6    ;) | 7    ^.^ | 8    :( | 9
 * 
 * Minden egyes emoji-lánc egy karakter ASCII/Unicode kódjának számjegyeit jelöli, pl. :( ;) 97, ami az 'a' ASCII kódja.
 * Adott egy ilyen érzelemlánc, keresse meg az általa reprezentált karakterláncot. Példa:
 * ':D :) :/ :D :) :|' 2 láncot jelent: ':D :) :/' és ':D :) :|'.
 * Ezek a 104-es és 105-ös ASCII kódot jelentik, ami 'hi'-nak fordítható.
 * A bemenet mindig érvényes lesz. A láncok nullákkal is kezdődhetnek; ezek érvényesek, és nem változtatják meg a lánc értékét.
 * @param {string} emojiString az emoji érzelemlánc
*/
function deEmojify(emojiString) {
    if (!emojiString) return '';

    const emojis = {
        ':)': 0,
        ':D': 1,
        '>(': 2,
        '>:C': 3,
        ':/': 4,
        ':|': 5,
        ':O': 6,
        ';)': 7,
        '^.^': 8,
        ':(': 9
    };


    return emojiString.split('  ')
        .map(str => str.split(' '))
        .map(arr => arr.map(index => emojis[index]).join(''))
        .map(num => String.fromCharCode(num))
        .join('');
}

console.log('\n3. feladat:')
console.log(deEmojify(":D :) :/  :D :) :|"))
console.log(deEmojify(";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C"))
console.log(deEmojify(":)"))
console.log(deEmojify(""))


console.log('--------------------------------------------------------')
console.log('Értékelés:')
let pont = 0
pont += removeFirstAndLast('') === null
pont += removeFirstAndLast('1') === null
pont += removeFirstAndLast('A1,B2') === null
pont += removeFirstAndLast('1,2,3') === '2'
pont += removeFirstAndLast('1,2,3,4') === '2 3'
pont += removeFirstAndLast('A1,B2,C3,D4,E5') === 'B2 C3 D4'
pont += removeFirstAndLast('A,1,23,456,78,9,Z') === '1 23 456 78 9'
pont += dnaStrand("AAAA") === "TTTT"
pont += dnaStrand("ATTGC") === "TAACG"
pont += dnaStrand("GTAT") === "CATA"
pont += dnaStrand("TAGACAT") === "ATCTGTA"
pont += dnaStrand("") === ""
pont += deEmojify(":D :) :/  :D :) :|") === "hi"
pont += deEmojify(";) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C") === "Hello world!"
pont += deEmojify(":)") === "\x00"
pont += deEmojify("") === ""
console.log(`Elért pont: ${pont}, százalék: ${pont/16*100}`)