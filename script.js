// Contoh program javascript menggunakan if
var angka = 5;
if(angka < 10) {
    console.log(angka + "lebih kecil dari 10");
}
// jika kondisi nya true maka akan keluar "angka + "lebih kecil dari 10", tetapi jika kondisinya false maka hasilnya akan kosong"

// Contoh program javascript menggunakan else
var angka = 6;
if (angka % 2 == 0) {
    console.log(angka + "merupakan bilangan genap");
} else {
    console.log(angka + "merupakan bilangan ganjil");
}
// jika kondisinya true maka akan keluar angka + "merupakan bilangan genap", tetapi jika kondisinya false maka hasilnya angka + "merupakan bilangan ganjil"

// Contoh program javascript menggunakan nested if 
var a = 16;
var b = 12;

if (a == 16){
    if (b == 12){
        console.log("ini adalah jika a = 16 b = 12");
    }else {
        console.log("ini adalah jika a = 16 dan b bukan 12");
    }
}else {
    console.log("ini adalah jika a salah");
}

// Contoh program javascript menggunakan switch case
var item = prompt("masukkan nama warna : \n contoh: merah, biru, kuning, hijau, oranye, ungu")

switch(item){
    case "merah" :
        alert("Warna Primer");
        break;
    case "biru" :
        alert("Warna Primer");
        break;
    case "kuning" :
        alert("Warna Primer");
        break;
    case "hijau" :
        alert("Warna Sekunder");
        break;
    case "oranye" :
        alert("Warna Sekunder");
        break;
    case "ungu" :
        alert("Warna Sekunder");
        break;
    default :
        alert("nama warna yang dimasukkan salah");
    break;
}

// Contoh program javascript menggunakan for statement
var jumlahKos = 6;
var kosKosong = 3;
var noKos = 1;

for(noKos = 4; noKos <= jumlahKos; noKos++ ) {
    console.log("Kos No. " + noKos + "Sedang kosong" );
}

// Contoh program javascript menggunakan while
var nilaiAwal = 1;

while(nilaiAwal <= 100){
    console.log("Deri Cantik & Imut" + nilaiAwal + "%");
nilaiAwal++;
}

// Contoh program javascript menggunakan do while
 var angka = 1;
do {
    console.log("anak ke" + angka);
    angka++
} while (angka <= 15);


// Contoh program javascript menggunakan function
function jumlahVolumeDuaKubus(d, e) {
    var volumeD;
    var volumeE;
    var jumlah;

    volumeD = d * d * d;
    volumeE = e * e * e;

    jumlah = volumeD + volumeE;

    return jumlah;
}

console.log(jumlahVolumeDuaKubus(16, 12));