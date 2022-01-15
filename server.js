const express = require('express')

const app = express();

app.listen(3000, () => {
    console.log('hello')
})
app.get('/', (req,res) =>{
    res.send('hello')
})
