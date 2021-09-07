const getAreaCircle = (radius) => {
    if (isNaN(radius)) return "inputan harus dalam angka"
    if (radius <= 0) return radius + " <=0 try higher"
    return Math.PI * radius * radius
}
console.log(getAreaCircle(-1))
console.log(getAreaCircle('a'))
console.log(getAreaCircle( 5 ))