const getSalesDiscount = (harga,pajak,discount) => {
    if (isNaN(harga) && isNaN(pajak) && isNaN(discount)) return "Price, Tax & Discount harus dalam angka"
    else if (isNaN(harga)) return "Price harus dalam angka"
    else if (isNaN(pajak)) return "Pajak harus dalam angka"
    else if (isNaN(discount)) return "discount harus dalam angka"

    let dsc = harga * discount/100
    let pjk = (harga - dsc)  * pajak /100
    
    return `Total Sales:Rp ${harga}\n
    Discount (${discount}%):Rp ${dsc}\n
    PriceAfterDiscount:Rp ${harga-dsc}\n
    Pajak (10%):Rp ${pjk}\n
    TotalPayment:Rp ${harga-dsc+pjk}`
    
}

console.log(getSalesDiscount("a",1,5))
console.log(getSalesDiscount(500,"pajak",5))
console.log(getSalesDiscount("harga", "pajak", "discount"))
console.log(getSalesDiscount(4500,10, 5))