//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    
    // console.log(element)
    
} 

// console.log(element)

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`) 
    for (let j = 0; j <= 10; j++) {
    //   console.log(`inner loop value ${j} and inner loop ${i}`)
        
    }
    
    
}

let myArray = ["flash", "Iron-man","Super-man"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}


//break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`)
//         break
        
//     }
//     console.log(`value of i is ${i}`)
    
// }

// CONTINUE 


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        continue
        
    }
    console.log(`value of i is ${i}`)
    
}