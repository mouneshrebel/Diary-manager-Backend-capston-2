const express = require("express");
const app = express();
const cors = require("cors");
const bodyPaser = require('body-parser');
const booksRoute = require ("./routes/books");
const mongoose = require('mongoose');


app.use(cors());
app.use (bodyPaser.json());

app.use('/books', booksRoute);


mongoose.connect("mongodb+srv://mouneshrebel60:rebelrkm@arkmdairy.suciopu.mongodb.net/?retryWrites=true&w=majority&appName=ArkmDairy");

const con = mongoose.connection;

try{
    con.on("open", () =>{
        console.log("MongoDB connected!!!!!!!!")
    });
} catch(error){
    console.log("Error" + error);
}

app.get ('/',(req,res) => {
    res.send("<h1>Welcome to Diary Manager !!!!</h1> <h2> Diary management is the process of planning, organising, and maintaining a schedule of appointments, tasks, and events. It involves keeping track of deadlines, meetings, and other commitments in a way that ensures nothing is overlooked or forgotten.</h2>");
})

app.listen(8000);