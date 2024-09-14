//Log a statement using console.log()
console.log("Hello from main.js")

// Variables
// let age = 25
// age = 30
// console.log(age)

// const salary = 8000
// console.log(salary)

// Data type
// Primitive(String, Number, boolean, null, undefined, bigint, symbol) and Non primitive(Object)

const name = "Shubham"
const post = 'Engineering Lead'
const companyName = `Persistent System`

console.log(name)
console.log(post)
console.log(companyName)

const age = 25
const salary = 8000

console.log(age)
console.log(salary)

const isPrimaryNumber = true
const isNewUser = false

console.log(isPrimaryNumber)
console.log(isNewUser)


let result = undefined
result = 'pass'
console.log(result)

const person = {
    'firstName': 'Bruce',
    'lastName': 'Wayne',
    'age': 30
}
console.log(person.firstName)

const oddNumbers = [1, 3, 5, 7] 
console.log(oddNumbers[2])

let a = 30
a = 'Shubham'
a = true
console.log(a)

// Operators
// assinment operator, arithmetic, comparison, Logical, string, other operators
// assignement operator
let x = 10
let y = 5

// arithmetic operator
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(++x)
console.log(--x)

// Comparision operator
console.log(x==y)
console.log(x != y)
console.log(x > y)
console.log(x < y)
console.log(x <= y)
console.log(x >= y)

// Logical operator
const isValidNumber = x > 5 && y > 1
console.log(isValidNumber)
const isValid = x > 20 || y > 40
console.log(isValid)
const isValidVal = false
console.log(!isValidVal)

// String operator
console.log('Shubham ' + 'Rajput')

// Ternary operator
const isEven = 10 % 2 === 0 ? 'Number is Even' : 'Number is odd'
console.log(isEven)

// Type Conversations
// implicit(type coercion) and explicit conversion 
console.log(2 + '3')
console.log(true + 3)
console.log(true + '3')
console.log(3 + false)
console.log('5' - null)
console.log('5' - undefined)
console.log(5 + undefined)

console.log(Number('5'))
console.log(parseInt('5'))
console.log(parseFloat('5.01'))
console.log(String(true))
console.log((500).toString())
console.log(Boolean(0))
console.log(Boolean(2))
console.log(Boolean(NaN)) // null, undefined, o, '', NaN return false

// Equality
// == (Allow coercion/implicit conversion)
// === (Does not allow coercion)

const var1 = 'test'
const var2 = 'test'
console.log(var1 == var2) // true

const var3 = '10'
const var4 = 10
console.log(var3 == var4) //true

const var5 = '10'
const var6 = 10
console.log(var5 === var6) // false

const var7 = undefined
const var8 = null
console.log(var7 === var8) // false

const var9 = undefined
const var10 = null
console.log(var9 == var10) // true

// Conditional Statements
const num = 0
if(num > 0){
  console.log('Number is Positive')
}else if(num < 0){
	console.log('Number is Negative')
}else{
	console.log('Number is Zero')
}

const color = 'red'
switch (color){
	case 'green':
		console.log('Color is Green')
		break
	case 'red':
		console.log('Color is Red')
		break
	case 'White':
		console.log('Color is White')
		break
	default:
		console.log('Not a color')
}

// Looping code

// for loop
for(i=0; i <= 4; i++ ){
	console.log('Iteration Number ' + i)
}

// while loop
let j = 0
while(j <= 5){
	console.log('Iteration Number ' + j);
	j++;
}

// do while loop
let k = 10
do{
	console.log('Iteration Number ' + k);
	k++;
}while(k < 5) 

// for..of loop
const stringArray = ['a', 'b', 'c']
for(const string of stringArray){
	console.log('Iteration String ' + string);
}

const numArray = [1, 2, 3, 4]
for(const num of numArray){
	console.log('Iteration Number ' + num);
}

// Functions
// JS function is a block of code designed to perform particular task
function greet(){
	console.log("Good morning Shubham")
}
greet()
greet()

function greetings(username){
	console.log("Good morning " + username)
}
greetings('Abhishek')
greetings('Shubham')

function add(a, b){
	return a + b
}
const sum = add(5, 3)
console.log(sum)

// Arrow Functions
const arrowSum = (a, b) =>{
	return a + b
}
const addtion = arrowSum(20, 30)
console.log(addtion)

const addFive = (num) => num + 5
const addFive1 = addFive(35)
console.log(addFive1)

// Scope
// Scope basically determines the accessibility or visibility of variables.
// Block scope, Function scope and Global scope
if(true){
	let aa = 3
	console.log(aa)
}
// console.log(aa) // aa is not defined

function reduceThree(inputNum){
	console.log(inputNum)
	return (inputNum - 3)
}
// console.log(inputNum) // inputNum is not defined

const bb = reduceThree(5)
console.log(bb)

const cc = 10
function checkGlobalVal(){
	console.log(cc)
}
checkGlobalVal()
