const sumDigit = (angka) => {
    if (isNaN(angka)) return "is not number, try again. . ."
    else if (angka>=10000) return "angka tidak boleh lebih dari 10000"
    let hasil = 0
    while(angka>=1){
        hasil += parseInt(angka%10)
        angka = parseInt(angka/10)
    }
    return hasil
}
console.log(sumDigit(1234))
console.log(sumDigit("1234"))
console.log(sumDigit(12345))
console.log(sumDigit("a123"))
console.log(sumDigit(3456))