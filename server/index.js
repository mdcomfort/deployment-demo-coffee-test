require('dotenv').config() // process (below) doesn't exist until we run this line - config is the method
const express = require('express') // how we import from node 
const app = express() // express called


app.use(express.static('client')) // specifies that if I ever give you the name of a file I want you to look in this folder "client"- will use for html, css, etc. in client folder

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

const port = process.env.PORT || process.env.SERVER_PORT // creates a port variable with the OR statement for either port option

app.listen(port, () => console.log(`Server running on port ${port}`)) // use a template literal

