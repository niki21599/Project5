// Setup empty JS object to act as endpoint for all routes
cards = [];


// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
const port = 8000;

const server = app.listen(port, () => {
    console.log(`Wohoo, the server is running on Port ${port}`);
    
});



// Get Route
app.get("/getData", (req, res) => {
    res.send(projectData);
});



const calcDaysLeft = () =>{

}





//Post Route

app.post("/addCard", (req, res) => {
    
    let card = req.body

    cards.push(card)
    
})

