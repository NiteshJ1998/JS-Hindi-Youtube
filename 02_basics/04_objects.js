// const tinderUser = new Object() =============>>>>>>>>>> This is singleton object


const tinderUser = {}  /// this is non singleton objects
// there is no internal diff only differnce is that called by diff names

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false



// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Nitesh",
            lastName: "Jaiswar"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1,obj2)


const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id: 1,
        email:"n@gmail.com"

    },
    {
        id: 1,
        email:"n@gmail.com"
        
    
    },
    {
        id: 1,
        email:"n@gmail.com"
        
    
    },
    {
        id: 1,
        email:"n@gmail.com"
        
    
    },
    {
        id: 1,
        email:"n@gmail.com"
        
    
    },
    


]

users[1].email
console.log(tinderUser);

console.log(Object.values(tinderUser))



