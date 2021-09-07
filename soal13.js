const isPalindrome = (angka) => {
    const angkastring = angka.toString();
    if (isNaN (angkastring)){
        return `${angka} is not an number`;
    } 
    else if (angkastring.charAt(0) === angkastring.charAt(3) && angkastring.charAt(1) === angkastring.charAt(2))
    {
        return`${angka} is palindrome`;
    }
    else {
        return `${angka} is not palindrome`
    }
}
 console.log(isPalindrome("abcde"))
 console.log(isPalindrome("123a"))
 console.log(isPalindrome("1234"))
 console.log(isPalindrome(1221))
 console.log(isPalindrome("8888"))