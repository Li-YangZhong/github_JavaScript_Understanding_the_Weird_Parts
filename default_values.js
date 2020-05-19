function greet(name) {
    name = name || 'default value'
    console.log('Hello ' + name)
}

greet() // Hello default value
greet(0) // Hello default value
greet('0') // Hello 0
greet('Tony') // Hello Tony

console.log(true || false) // true
console.log(undefined || 'hello') // 'hello'
console.log(null || 'hello') // 'hello'
console.log('' || 'hello') // 'hello'
console.log('hi' || 'hello') // 'hi'
console.log('hi' || false) // 'hi'
console.log(Boolean('hello')) // true