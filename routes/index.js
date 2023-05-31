const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller')

console.log('route loaded');

router.get('/', homeController.home);
router.use('/users',require('./users'));

// for any further routes, access from here 
// router.use('/routerName',require('./routerfile));

module.exports = router;

//  Users can be accessed by ---> http://localhost:8000/users/profile
// index page can be accessed by ---> http://localhost:8000/ 