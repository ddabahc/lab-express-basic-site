const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {

	res.sendFile(__dirname + '/views/index.html')
})

app.get('/roster', (req, res, next) => {
	res.sendFile(__dirname + '/views/roster.html')
});

app.get('/superbowl', (req, res, next) => {
	res.sendFile(__dirname + '/views/more-info.html')
});

app.listen(port, () => {
	console.log(`corriendo en el puerto: ${port}`)
})