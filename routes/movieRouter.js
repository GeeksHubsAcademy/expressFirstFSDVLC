
const router = require('express').Router();
const movieController = require('../controllers/movieController');

// API routes

//GET - Return all Films in the DB
router.get('/', async (req, res) => {
    try {
        res.json(await movieController.findAllFilms())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/toprated', async (req, res) => {
    try {
        res.json(await movieController.topRatedFilms());

    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
})


//GET - Return a Film with specified Title ?query=
router.get('/:titulo',async (req, res) => {
    try {
        const titulo = req.params.titulo;
        res.json(await movieController.findByTitle(titulo));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});



module.exports = router;