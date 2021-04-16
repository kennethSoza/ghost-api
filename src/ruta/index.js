const { Router } = require('express');
const router = Router();

const { welcome, getGhostPkmn } = require('../controllers/controllers.js')

router.get('/', welcome);
router.get('/ghost-api', getGhostPkmn);

module.exports = router;
