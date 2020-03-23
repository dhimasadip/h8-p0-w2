var nama = 'Dhimas'
var peran = 'Ksatria'

if (nama === '') {
	console.log("Nama harus diisi!")
} else if (peran === '') {
	console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
} else if (peran === 'Ksatria') {
	console.log(`Selamat datang di Dunia Proxytia, ${nama}.\nHalo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
} else if (peran === 'Tabib') {
	console.log(`Selamat datang di Dunia Proxytia, ${nama}.\nHalo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`)
} else if (peran === 'Penyihir') {
	console.log(`Selamat datang di Dunia Proxytia, ${nama}.\nHalo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
} else if (peran !== 'Ksatria' || peran !== 'Tabib' || peran !== 'Penyihir') {
	console.log('Peran tidak sesuai')
} else {
	console.log('Nama dan Peran Harus String')
}