var a = 0

if ( a || a === 0) {
    console.log('Something is there.')
}
console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean('')) // false
console.log(Boolean(0)) // false