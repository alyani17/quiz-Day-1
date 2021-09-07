const fareinheitToKelvin = (fareinheit) => {
    if (isNaN(fareinheit)) return "Fareinheit must an number"
    return Math.round((parseInt(fareinheit) + 459.67)/ 1.8)
}

console.log(fareinheitToKelvin(45))
console.log(fareinheitToKelvin("1"))
console.log(fareinheitToKelvin("F"))