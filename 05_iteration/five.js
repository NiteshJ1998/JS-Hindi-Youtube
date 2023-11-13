const car = ["tesla", "bmw", "porche","tata",'mahindra']

// car.forEach( function(item){
//     console.log(item)
// })


// car.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)

// }

// car.forEach(printMe)



const progLang = [
    {
        languageName:'javascript',
        languageFileName:'js'
    },
    {
        languageName:'java',
        languageFileName:'java'
    },
    {
        languageName:'python',
        languageFileName:'py'
    }

]

progLang.forEach((item)=>{
    console.log(item.languageName)
})