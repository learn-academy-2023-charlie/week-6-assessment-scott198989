// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.


//Psuedocode
//Input: take in an array of objects
//Output: return an array with a sentence about each person with their names capitalized
//Process: create a function called sentence that takes an array. Inside the function, the array.map() method is used to iterate over each object in the array. For each object, the map function takes an arrow function as an argument, which is executed for each element in the array. Declare a new variable called newOne. The person.name string is split into an array of separate words using the split(" ") method, .map to iterate over the name value.  We want the name to be capitalized so at the 0 index of each name we can use charAt(0).toupperCase, we will have to collect the rest of the characters so we can use .slice, then .join to bring it all back together.  Return string interperlation, set it up ${newOne} is {person.occupation}

describe('sentence', () => {
  it('should return an array of sentences with capitalized names', () => {
    
      expect(result).toEqual(sentence(hitchhikersCharacters))
  })
})
const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]


const sentence = (array) => {
  return array.map((person) => {
    const newOne = person.name
      .split(" ")
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
      .join(" ")

    return `${newOne} is ${person.occupation}.`
  })
}
const result = sentence(hitchhikersCharacters);


// a) Create a test with an expect statement using the variable provided.
// FAIL  ./code-challenges.test.js
//   sentence
//     ✕ should return an array of sentences with capitalized names (1 ms)

//   ● sentence › should return an array of sentences with capitalized names

//     ReferenceError: result is not defined

//       17 |   it('should return an array of sentences with capitalized names', () => {
//       18 |     
//     > 19 |       expect(result).toEqual(sentence(hitchhikersCharacters))
//          |              ^

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// sentence
//   ✓ should return an array of sentences with capitalized names (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.155 s
// Ran all test suites.
// ✨  Done in 0.65s.



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//Psuedocode
//Input: a function that takes in an array of mixed data
//output: returns a array of only the remainders of the numbers when divided by 3
//Process:  create a function called numRemainders with Array as a parameter. Use .filter to keep only the numbers, the filtered elements are stored in a array called numbers. Create a new array called remainders, use .map to iterate over each number in the numbers array, use modulo operator to calculate remainder.  Return remainders array as the output in numRemainders. 

// a) Create a test with an expect statement using the variables provided.

// FAIL  ./code-challenges.test.js
// sentence
//   ✓ should return an array of sentences with capitalized names (1 ms)
// podgeHoge
//   ✕ should return the remainders of numbers when divided by 3

// ● podgeHoge › should return the remainders of numbers when divided by 3

//   ReferenceError: numRemainders is not defined

//     89 |   it('should return the remainders of numbers when divided by 3', () => {
//     90 |   
//   > 91 |     const answer1 = numRemainders(hodgepodge1)
//        |                     ^



const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe('podgeHoge', () => {
  
  it('should return the remainders of numbers when divided by 3', () => {
  
    const answer1 = numRemainders(hodgepodge1)
    const answer2 = numRemainders(hodgepodge2)
    expect(answer1).toEqual(numRemainders(hodgepodge1))
    expect(answer2).toEqual(numRemainders(hodgepodge2))
  })
})

const numRemainders = (Array) => {
  const numbers = Array.filter((element) => typeof element === 'number')
  const remainders = numbers.map((number) => number % 3)
  return remainders
}

const answer1 = numRemainders(hodgepodge1)

const answer2 = numRemainders(hodgepodge2)

// b) Create the function that makes the test pass.
// PASS  ./code-challenges.test.js
// sentence
//   ✓ should return an array of sentences with capitalized names (1 ms)
// podgeHoge
//   ✓ should return the remainders of numbers when divided by 3

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.149 s
// Ran all test suites.
// ✨  Done in 0.71s.






// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//Psuedocode:
//Input: takes in a mixed data array
//output:  returns a array of only the remainders of the numbers when divided by 3
//Porcess:  Create a function called cube, assign array as a parameter.  Use the .map method on a new array called cubedNums to iterate over each element.  Use math.pow, (reasearched this), this cubes each number in the array.  Use another researched method called reduce to calculate the sum of all the cubed numbers by iterating over each element in the cubedNums array starting with a value of 0.  Outside the cube function, the result1 variable is assigned the value returned by calling the cube function with cubeAndSum1 as the argument. This calculates the sum of cubed numbers in cubeAndSum1.

// a) Create a test with an expect statement using the variables provided.

// FAIL  ./code-challenges.test.js
// sentence
//   ✓ should return an array of sentences with capitalized names (1 ms)
// podgeHoge
//   ✓ should return the remainders of numbers when divided by 3
// cube
//   ✕ should return the sum of all numbers cubed

// ● cube › should return the sum of all numbers cubed

//   ReferenceError: cube is not defined

//     147 |   test('should return the sum of all numbers cubed', () => {
//     148 |
//   > 149 |     const result1 = cube(cubeAndSum1)
//         |                     ^
//     150 |     const result2 = cube(cubeAndSum2)
//     151 |     expect(result1).toEqual(cube(cubeAndSum1))
//     152 |     expect(result2).toEqual(cube(cubeAndSum2))  

//     at Object.cube (code-challenges.test.js:149:21)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.164 s, estimated 1 s


describe('cube', () => {
  // Test case 1
  test('should return the sum of all numbers cubed', () => {

    const result1 = cube(cubeAndSum1)
    const result2 = cube(cubeAndSum2)
    expect(result1).toEqual(cube(cubeAndSum1))
    expect(result2).toEqual(cube(cubeAndSum2))  
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



const cube = (array) => {
  const cubedNums = array.map((number) => Math.pow(number, 3))
  const sum = cubedNums.reduce((total, number) => total + number, 0)
  return sum
}
const result1 = cube(cubeAndSum1)
const result2 = cube(cubeAndSum2)



// b) Create the function that makes the test pass.
// PASS  ./code-challenges.test.js
// sentence
//   ✓ should return an array of sentences with capitalized names (1 ms)
// podgeHoge
//   ✓ should return the remainders of numbers when divided by 3
// cube
//   ✓ should return the sum of all numbers cubed (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.131 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.57s.
