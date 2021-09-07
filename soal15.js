const totalGaji = (gaji1, gaji2, gaji3) => {

let Emp1: Rp. ${gaji1} + ${Pajak}% 
let Emp2: Rp. ${gaji2} + ${pajak}%
let Emp3: Rp. ${gaji3} + ${pajak}%

return `Total gaji yang harus dibayar:\n
    Emp1 :Rp. ${gaji1} + ${2}%\n 
    Emp2 :Rp. ${gaji2} + ${5}%\n
    Emp3 :Rp. ${gaji3} + ${10}%\n
    Total:Rp.${Emp1 + Emp2 + Emp3}`

 }
 console.log(totalGaji(500,2000, 12000))
