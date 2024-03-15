function otpgenerator(limit) {
    var digits = '0123456789'
    let otp = ''
    for (let i = 0; i < limit; i++) {
        otp += digits[Math.floor(Math.random() * 10)]
    }
    return otp;
}
console.log(otpgenerator(5));