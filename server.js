const express = require('express');
const { size } = require('lodash');
const app = express();

app.use(express.json());

app.get('/' , (req , res) => {
    res.send('Welcome to my Hotel... How can i help you ? ');
})

app.get('/chicken' , (req , res) => {
    res.send('Sure Sir , I would love to serve chicken ');
})

app.get('/idli' , (req , res) => {
    var customizedIdli = {
        name : "ravaIdli" , 
        size : "10 cm Diameter" ,
        is_sambhar : true,
        is_chutney : false
    }
    res.send(customizedIdli);
})


// port
const PORT = 3000 ;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});