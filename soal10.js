const convertToRupiah = (value, currencyType) => {
   let nilaiTukar;

   if(currencyType === "yen")
   {
       nilaiTukar = 130.12;
    } 
   else if(currencyType === "usd")
   {
       nilaiTukar = 14382.5;
    }
   else if(currencyType === "euro")
   {
       nilaiTukar = 16000;
    }
    else
    {
        return "no match type currency"
    }
               
 return hasil = value * nilaiTukar;
}

console.log(convertToRupiah(1000,"yen"))
console.log(convertToRupiah(100,"usd"))
console.log(convertToRupiah(100,"euro"))
console.log(convertToRupiah(100," "))