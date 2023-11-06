const users ={
    username: "nitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) /// this keyword refer to current context 
    }
}

