// for of

// ["","",""]
// [{},{},{}]

// For of loooooooooooooop


const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}



const greetings = "Nitesh Jaiswar"


for (const greet of greetings) {
    if (greet != ' ') {
        // console.log(greet)
        
    }
    // console.log(`Each char is ${greet}`)
    
}

// const myString = "Hello world";

// for (const char of myString) {
//   if (char !== ' ') {
//     // console.log(char);
//   }
// }


// MAPS


const map = new Map()
map.set('IN', 'india')
map.set('US', 'USA')
map.set('IT', 'ITALY')
map.set('NZ', 'NEZ')

// console.log(map)

for (const [key, value] of map) {
    // console.log(key,value)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'GTA',
    game4: 'valorant'
}

for (const [key, value] of myObject) {
    console.log(key , value)
    
}