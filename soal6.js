const getCordinat = (x1,y1,x2,y2) => {
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) return "input kordinat dalam angka"

    return Math.sqrt (((x1-x2)**2)+((y1-y2)**2))
}
console.log(getCordinat(3,4,-4,-5))
console.log(getCordinat("1","2","-1","-2"))
console.log(getCordinat("x","2","-y","-2" ))
console.log(getCordinat(3.2,4.5,-4.4,-5))