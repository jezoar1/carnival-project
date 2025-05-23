const express = require('express')

const bodyparser = require("body-parser")
const app = express()



const route=require('./routes')
const cors =require('cors')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use(cors())
// app.use('/upload', express.static(path.join(__dirname, 'upload')));
app.use('/upload',express.static(`${__dirname}/upload`)); 
const db=require('./database')



app.use(route)


app.listen(4001,() =>{
    console.log("server started")
}
)
