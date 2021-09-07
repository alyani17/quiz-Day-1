const calculateDistance = (a,t) => {
    if (isNaN(a) || isNaN(t)) return "input must an number"
    if (a<0 || t<0) return "Acceleration or time must be >= 0"
    return 0.5 * a * t^2
}

console.log(calculateDistance("a","t"))
console.log(calculateDistance(-1,9))
console.log(calculateDistance(50,60))