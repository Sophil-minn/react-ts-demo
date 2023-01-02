let isDone: boolean = false

let age: number = 10
let binaryNumber: number = 0b1111
// string
let firstName: string = 'viking'
let message: string = `Hello, ${firstName}, age is ${age}`
// undefined null
let u: undefined = undefined
let n: null = null
// 注意 undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

let num: number = undefined
// any
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = 'boolean'
notSure.myName
notSure.getName()
