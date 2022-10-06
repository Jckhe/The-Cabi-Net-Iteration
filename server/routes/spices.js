const express = require('express');
const spiceController = require('../controllers/spiceController');
const router = express.Router();


// get request for spices
router.get('/:user', spiceController.getSpices, (req, res) => {
    console.log('sending spices');
    res.status(200).json(res.locals.spices);
})

// post request for spices
router.post('/:user', spiceController.createSpice, (req, res) => {
    console.log('creating spice');
    // may need to send created spice to front-end?
    res.status(200).json(res.locals.newSpice);
})

// patch request for spices
router.patch('/update', spiceController.updateSpice, (req,res) => {
    console.log('updating spice');
    res.status(200).json();
})

// delete request for spices
router.delete('/', spiceController.deleteSpice, (req,res)=> {
    console.log('deleting spice');
    res.status(200).json();
})



module.exports = router;