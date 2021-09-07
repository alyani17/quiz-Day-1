const getProsentase = (income1, income2) => {
    if (isNaN (income1) && isNaN (income2)) return "abc or bca harus dalam angka"
    
    else if (income2 < income1){
        let selisihIncome = income2 - income1;
        let rasio = selisihIncome / income1;
        let prosentase = rasio * 100
         return `Total penurunan income ${prosentase}%`
    }
    else {
        let selisihIncome = income2 - income1;
        let rasio = selisihIncome / income1;
        let prosentase = rasio * 100
        return `Total kenaikan income ${prosentase}%`

    }
 }
 console.log(getProsentase("abc","bca"))
 console.log(getProsentase(600000.00,750000.00))
 console.log(getProsentase(750000.00,650000.00))
