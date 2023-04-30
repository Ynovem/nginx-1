const express = require('express')
const app = express()
const port = 3000

app.get('/api/a', (req, res) => {
	res.send('Hello World! - A')
})

app.get('/api/b', (req, res) => {
	res.send('Hello World! - B')
})
app.get('/api/a/a1', (req, res) => {
	res.send('Hello World! - A/A1')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
