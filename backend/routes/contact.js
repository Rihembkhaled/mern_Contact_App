const express = require ('express')

const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/ajouter' , contactController.ajouterContact )
router.post('/contact/:id/modifier', contactController.modifierContact)
router.get('/contact/:id/supprimer', contactController.supprimerContact )
router.get('/afficher',contactController.afficherContact )
module.exports = router;
