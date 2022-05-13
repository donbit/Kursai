

// 1 Zinom 3 data types, sukurti kintamuosius su tu data type reiksmem (string, number, boolean); 

let name = 'Luke Skywalker';
let number = 2;
let boolean = true;



// 2 Veliau ismokome dar du (array ir object), susikurti kintamuosius siu tipu,
// abu tipai viduj turetu tureti bent 3 kazkokius duomenis
let object =
{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3 Atsidarius practice.html narsykleje, consoleje parasyti "Hello world"
console.log('Hello world');

// 4 Atsidarius practice.html narsykleje, consoleje parasyti savo nurodyto string kintamojo reiksme
console.log(name);

// 5 Susikurti funkcija kuri consoleje parasys jusu number tipo kintamaji puslapiui besikraunant
function besikraunant() {
    console.log(number)
}
window.onload = besikraunant;

// 6 funkcijoje prideti salyga su jusu boolean kintamuoju jei true, paliekam number kintamojo console.log,
// else printinam string tipo kintamaji

if (boolean == number) { // true
    console.log(array)
} else {
    console.log('7 užduotis Nelygu')
}

// 7 Sukurti nauja funkcija, kuri grazins 3cia reiksme is jusu array tipo kintamojo

function returnas() {
    return array[2];
}


// 8 consoleje atvaizduoti naujos funkcijos grazinta rezultata

console.log(returnas());

// 9 ideti nauja reiksme (nesvarbu kokia) i array tipo 
// kintamaji naudodami array pridejimo metoda
array.push(100);
console.log(array);

// 10 Iskirpti pirma reiksme is array tipo kintamojo naudojant array isiemimo metoda
array.splice(0, 1);
console.log(array);


// 11 Parasyti cikla kuris consoleje parasys nuo skaicius nuo 1 iki 10

for (let i = 1; i < 5; i++) {
    console.log(i);
}

// 12 Naudojant map metoda pakeisti visas array tipo kintamojo reiksmes nuo 0, iki array.length
console.log(array.map((item, index) => item = index));


// 13 Naudojant filter metoda grazinti tik skaicius kurie yra nelyginiai (tiksliai neziurejom, klauskit arba dar geriau google)

let even_numbers = array.filter(skaicius => skaicius % 2 == 0)
console.log(even_numbers);

// 14 Pasirasyti nauja funkcija, kuri consoleje parasys jusu paduota parametra


// 15 Suskurti nauja array su nersvarbu kokiais 5 skaiciais

// 16 Pasirasyti nauja funkcija kuri naudojant viena is array metodu consoleje parasys naujai sukurto array suma

// 17 Praplesti funkcija kad ji priimtu parametra ir viena karta iskviesti ir grazinti musu pirmojo array skaiciu suma,
// kita naujojo array

// 18 Consoleje parasyti objekto kintamojo savybiu (property/keys) reiksmes (values) atsikruose eilutese,
// (kiekvina savybe vis naujam console log)

// 19 Naudojant object metoda (Keleta kartu naudojom star wars table) grazinti nauja array su visom objekto savybem (keys/properties) ir atvaizduoti
// consoleje

// 20 Prie pradzioje nurodyto object tipo kintamojo prideti dvi naujas savybes viena is ju bus lygi jusu number tipo kintamajam,
// o kita boolean tipo kintamajam

// 21 Suskurti nauja array ir i ji, naudojant for cikla, ideti 5 jusu objekto tipo kintamuosius (turetu tureti is 20 uzduoties savybes ir reiksmes)

// 22 I html isideti mygtuka ant kurio paspaudus vykdytu nauja funkcija ir consoleje atvaizduotu 21 uzduoties rezultata

// 23 I html isideti input ir mygtuka ant kurio paspaudus consoleje parasys jusu ivesta input reiksme

// 24 I html prisideti papildoma elementa, kuriame paspaudus 23 uzduoties mygtuka dabar atvaizduos input reiskmes teksta (vietoj console.log)

// 25 Praplesti mygtuko papsaudimo funkcija ir kiekviena ne vienoda reiskme prideti i nauja visu input reiksmiu array

// 26 Atvaizduoti visas naujai pridetas input reiksmes vis naujam elemente viduj 24 uzduoties elemento

// 27 Prideti prie salygos kad reiksme butu nauja, kad reiksme nebutu ir tuscias
