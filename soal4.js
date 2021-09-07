const getSalesTax = (harga,pajak) => {
    if (isNaN(pajak) && isNaN(harga)) return "Price & pajak harus dalam angka"
    else if (isNaN(pajak)) return "Pajak harus dalam angka"
    else if (isNaN(harga)) return "Price harus dalam angka"
    
    return `Total Sales: ${harga}\n
    pajak: ${pajak}%\n
    Total Harga + Pajak: ${harga * (100 + pajak) /100}`
}

console.log(getSalesTax("a",1))
console.log(getSalesTax(500,"pajak"))
console.log(getSalesTax("harga","pajak"))
console.log(getSalesTax(4500, 5))
