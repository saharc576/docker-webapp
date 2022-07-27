const express = require('express')

const app = express();

app.get("/", (req, res) => {
    console.log(req.baseUrl)
    res.write(
        "<div><h1>Hello from docker!</h1></div>"
    )
})

const port = 8080
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

