const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    }
}, { timestamps: true });// elle nous donne la date de creation et la date d'ajout 

module.exports = mongoose.model('contacts', ContactSchema);
