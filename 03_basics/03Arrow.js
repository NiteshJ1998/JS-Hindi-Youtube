const users ={
    username: "nitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) /// this keyword refer to current context 
        console.log(this)
    }
}

// users.welcomeMessage()
// users.username = 'vicky'
// users.welcomeMessage()

// console.log(this)

// function one(){
//     let username = 'vinayak'
//     console.log(this)
// }

// one()


const chai = () => {
    let username = 'vinayak'
    console.log(this)
}

chai()

// const addTwo = (num1, num2) => (num1 + num2)// implicit return

// const addTwwo = (num1, num2) =>{  ///Explict retrun
//     return num1+ num2
// }
