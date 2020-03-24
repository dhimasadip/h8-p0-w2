
////////////////////////////////////////////////
// 1. Menyusun Barisan Bintang

var rows1 = 5
for (i = 1; i <= rows1; i++) {
    console.log('*')
}


////////////////////////////////////////////////
// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5
for (i = 1; i <= rows2; i++) {
    
    var bintang = ''
    for (a = 1; a <= rows2; a++) {
        bintang += '*'
    }
    console.log(bintang)
}



////////////////////////////////////////////////
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5
for (i = 1; i <= rows3; i++) {

    var bintang = ''
    for (a = 1; a <= i; a++) {
        bintang += '*'
    }
    console.log(bintang)
}