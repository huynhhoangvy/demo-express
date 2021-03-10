const express = require('express');
const app = express();
// const birds = require('./basic-guide');

// GET Method
// app.get('/', (req, res) => {
// res.send('GET request to the homepage');
// });

// POST Method
app.post('/post', (req, res) => {
	res.send('POST request to the page');
});

// Support all methods
app.all('/secret', (req, res, next) => {
	console.log('Accessing secret route');
	res.send('Secret request to the page');
	next(); // pass control to the next handler
});

// TODO: ROUTE PATHS
// Match request the root route /
app.get('/', (req, res) => {
	res.send('root');
});

// Match acd and abcd
app.get('/ab?cd', (req, res) => {
	res.send('ab?cd');
});

// Match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', (req, res) => {
	res.send('ab+cd');
});

// Match abcd, abXcd, abRANDOMcd, etc
app.get('/ab*cd', (req, res) => {
	res.send('ab*cd');
});

// Match abe or abcde
app.get('/ab(cd)?e', (req, res) => {
	res.send('ab(cd)?e');
});

// Path with REGEX
// Match anything with a inside
// app.get(/a/, (req, res) => {
// 	res.send('/a/');
// });

// Match anything with fly in the end
app.get(/.*fly$/, (req, res) => {
	res.send('/.*fly$/');
});


// TODO: ROUTE PARAMETER
// Normal route param
app.get('/users/:userId/books/:bookId', (req, res) => {
	res.send(req.params);
});

// Route params with hyphen - and dot .
app.get('/flights/:from-:to', (req, res) => {
	res.send(req.params);
});
app.get('/plants/:gene.:species', (req, res) => {
	res.send(req.params);
});
// With REGEX
app.get('/guests/:guestId(\\d+)', (req, res) => {
	res.send(req.params);
});

// TODO: ROUTE HANDLERS
// A single callback function
app.get('/example/single', (req, res) => {
	res.send('Example with a single callback');
});

// More than one callback function
app.get('/example/multiple', (req, res, next) => {
	console.log('The response will be sent by the next function');
	next();
	}, (req, res) => {
		res.send('Hello from the next callback');
	},
);

// Array of functions
const func1 = (res, req, next) => {
	console.log('func1');
	next();
};

const func2 = (res, req, next) => {
	console.log('func2');
	next();
};

const func3 = (req, res) => {
	console.log('func3');
	res.send('Hello from array');
};

app.get('/example/array', [func1, func2, func3]);

// Combination of independent functions and arrays of functions
const f1 = (req, res, next) => {
	console.log('f1');
	next();
};

const f2 = (req, res, next) => {
	console.log('f2');
	next();
};

app.get('/example/combination', [f1, f2], (req, res, next) => {
	console.log('The response will be sent by the next function');
	next();
}, (req, res) => {
	res.send('Hello from combination');
});

// TODO: AVAILABLE RESPOND METHODS: download(), end(), json(), jsonp(), redirect(), render(), send(), sendFile(), sendStatus()

// TODO: APP.ROUTE()
// Create chained route handlers using app.route()
app.route('/book')
   .get((req, res) => {
	   res.send('Get a random book');
   })
   .post((req, res) => {
	   res.send('Add a book');
   })
   .put((req, res) => {
	   res.send('Update a book');
   });

// TODO: EXPRESS.ROUTE()
// Create a modular, mountable route handlers with express.route()
// Create a router as a module, loads a middleware function in it, defines some routes and mouts the router module on a path in the main app
// app.use('/birds', birds);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
