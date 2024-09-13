const express = require('express')
const app = express();

const user = require('./routes/user');
app.use(user);

app.get('/' , (req , res)=>{
    res.send('hello from simple server :)')
})

app.listen(3000,(e)=>{
    if (e) {
        console.log("error");
        
    } else {
        console.log("me chal raha hu");
        
    }
})
