const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');
var port = process.env.PORT || 8080;
//var port = 3005

const app = express()

app.use(cors())
app.use(express.json())

const url = 'mongodb+srv://balaji:balaji2000@cluster0.hwfs7x4.mongodb.net/loanApplication?retryWrites=true&w=majority'

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(url , connectionParams)
    .then(() => {
        console.log('Connected to the database')
    })
    .catch((err) => {
        console.log(`Error connecting to database . n${err}`)
    })

const detailsSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    user_email: String,
    bussiness_name: String,
    address: String,
    gst_no: Number,
    loan_amount: Number,
    interest_rate: Number,
    loan_tenure: Number
})

const Details = mongoose.model('Details' , detailsSchema)

app.get('/details' , async (req , res) => {
    await Details.find()
            .then(details => res.json(details))
            .catch(err => res.status(400).json(`Error: ${err}`))
})

app.post('/details' , async (req , res) => {
    const data = req.body
    const doc = {
        first_name: data.first_name,
        last_name: data.last_name,
        user_email: data.user_email,
        bussiness_name: data.bussiness_name,
        address: data.address,
        gst_no: data.gst_no,
        loan_amount: data.loan_amount,
        interest_rate: data.interest_rate,
        loan_tenure: data.loan_tenure
    }

    Details.create(doc, (err , result) =>{
        if (err) {
            res.status(400).send("Error inserting matches!");
          } else {
            console.log(`Added a new match with id ${result.id}`);
            res.status(204).send();
          }
    })


})

if(process.env.NONE_ENV === 'production'){
    app.use(express.static(path.join(__dirname , 'client' ,'build' )))
    app.get('/' , async (req , res) => {
        console.log('inside server')
        await res.sendFile(path.resolve(__dirname, 'client' , 'build', 'index.html'))
    })
}

app.use(express.static(path.join(__dirname , 'client' ,'build' )))
app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname, 'client' , 'build', 'index.html'))
})

app.listen(port , () =>{
    console.log(`Server running on port ${port}`)
})