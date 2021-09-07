const getDays = (month, year) => {
    if (isNaN(month) && isNaN(year)) return "inputan bulan & tahun harus dalam integer"
    else if (isNaN(month)) return "inputan bulan harus dalam integer"
    else if (isNaN(year)) return "inputan tahun harus dalam integer"
 }
 console.log(getDays("a",2021))
 console.log(getDays("2","year"))
 console.log(getDays("m","year"))
 console.log(getDays(2,2000))
 console.log(getDays(8,2021))