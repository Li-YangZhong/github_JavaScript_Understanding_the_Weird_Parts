console.log(3 < 2 < 1) // true
console.log(false < 1) // true
console.log(Number(false)) // 0
console.log(Number(true)) // 1
console.log(Number(undefined)) // NaN
console.log(Number(null)) // 0
console.log(typeof Number('12')) // number
console.log(3 == '3') // true
console.log(false == null) // false
console.log(false == 0) // true
console.log(null == 0) // false
console.log("" == 0) // true
console.log("" == false) // true
console.log(0 === false) // false
console.log(0 !== false) // true
console.log(Object.is(NaN, NaN)) // true
console.log(Boolean(undefined)) // false

