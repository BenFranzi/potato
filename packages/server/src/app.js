const express = require('express')
const path = require('path')
const app = express()


LOG_MESSAGE = process.env.LOG_MESSAGE || 'no env var passed for LOG_MESSAGE'
JSON_TITLE = process.env.JSON_TITLE || 'no env var passed for JSON_TITLE'


console.log(LOG_MESSAGE)

app.use(express.static(path.join(__dirname,'../../frontend/')))

app.get('/api/dummydata', (req, res) => {
    res.json({
        userId: 1,
        id: 1,
        title: JSON_TITLE,
        completed: false
    })
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`running on :${port}`)