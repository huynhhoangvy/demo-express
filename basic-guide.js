const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// METHOD
app.get('/', (req, res) => {
	res.send('Hello Express');
});

app.post('/post', (req, res) => {
	res.send('Got a POST request');
});

app.put('/put', (req, res) => {
	res.send('Got a PUT request');
});

app.delete('/delete', (req, res) => {
	res.send('Got a DELETE request');
});

app.listen(port, () => {
	console.log('App listening at http://localhost: ', port);
});

// Serve static file
app.use(express.static('public'));

// Serve files with virtual path - relative path
app.use('/static', express.static('public'));

// Serve file with virtual path - absolute path
app.use('/static/', express.static(path.join(__dirname, 'public')));