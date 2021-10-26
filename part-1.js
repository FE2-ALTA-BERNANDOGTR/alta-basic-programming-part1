//PROBLEM 3

let nama = 'kabur'
console.log('Problem 3 \n')
console.log(`hello ${nama} Saya Javascript bahasa yang sangat menyenangkan \n`);


//PROBLEM 4

let alas = 20;
let tinggi = 35;

function luasSegitiga(a,t) {
  let luas = (a*t)/2;
  console.log('Luas Segitiga adalah : ' + luas + '\n');
}

console.log('Problem 4 \n')
luasSegitiga(alas,tinggi);

//PROBLEM 5

let tinggiTabung = 20;
let radius = 4;

function luasTabung(t,r) {
  let pi = 3.14;
  let luas = 2*pi*r*(r+t);
  console.log('luas permukaan tabung yaitu : ' + luas)
}

console.log('Problem 5 \n')

luasTabung(tinggiTabung,radius);

