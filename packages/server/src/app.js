const express = require('express')
const path = require('path')
const app = express()

console.log('this is the development branch... hi!')

app.use(express.static(path.join(__dirname,'../../frontend/dist/')))

app.get('/api/dummydata', (req, res) => {
    res.json({
        userId: 1,
        id: 1,
        title: "hello world",
        completed: false
    })
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`running on :${port}`)