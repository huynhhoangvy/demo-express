const express = require('express');
const router = express.Router();

// const timeLog = (req, res, next) => {
// 	console.log('Time: ', Date.now());
// 	next();
// };

// Middleware that is specific to this router
// router.use(timeLog);
// router.use(function timeLog (req, res, next) {
// 	console.log('Time: ', Date.now());
// 	next();
// });
router.use((req, res, next) => {
	console.log('Time: ', Date.now());
	next()
})

// Define homepage route
router.get('/', (req, res) => {
	res.send('Birds homepage');
});

// Define about route
router.get('/about', (req, res) => {
	res.send('About birds');
});

module.exports = router;
