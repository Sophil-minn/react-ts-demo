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


//最简单的方法是使用「类型 + 方括号」来表示数组：
let arrOfNumbers: number[] = [1, 2, 3, 4]
//数组的项中不允许出现其他的类型：
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
arrOfNumbers.push(3)
arrOfNumbers.push('abc')


// tuple
let user: [string, number] = ['viking', 20]
user = ['viking', 30]

// function
function add(x: number, y: number, z:number): number {
  return x + y
}
//let result = add(2, 3)
let add2 = (x: number, y:number): number => {
  return x + y
}
const add3:(x: number, y:number, z?: number) => number = add

const add4 = add;

// type inference
let str = 'str'

myFetch<string>('test', 'POST', { name: 'hello' }).then(data => {

})
myFetch.get<number>('test').then(data => {

})


let result = add(2, 3)
// 多余或者少于这个参数是不可以的，会出现错误。
// 那么我们怎样实现可选参数呢？加一个问好就可以了

function add(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

