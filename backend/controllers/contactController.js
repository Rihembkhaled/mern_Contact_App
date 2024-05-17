const ContactModel = require('../models/contact');
 //// fonction ajouter contact 

  exports.ajouterContact =  async (req, res) => {

    console.log(req.body);
 
   try {
     const contactObj = {
       nom: req.body.nom,
       numero: req.body.numero
     }
 
     const contact = new ContactModel(contactObj);
 
     // insert data in database using async/await
     const createContact = await contact.save();
     res.status(200).json({ createContact });
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 }


 // fonction modifier 

 exports.modifierContact = async  (req, res) => {
    // Database logic to modify a contact goes here
    try {
        const param = req.params.id; 
        const modifiedObj = {
           nom: req.body.nom,
           numero:req.body.numero 
        }
        const Contactupdated= await ContactModel.findByIdAndUpdate(param ,modifiedObj ).exec() ;
        res.status(200).json({"message": "contact modifié avec succes  "}); 
       } catch (error) {
           console.error(error);
           res.status (400).json({error});
       }
  }



  // fonction supprimer 

  exports.supprimerContact = async (req, res) => {
    // Database logic to delete a contact goes here
    try {
     const param = req.params.id; 
     const ContactDeleted= await ContactModel.findByIdAndDelete(param).exec() ;
     res.status(200).json({"message": "contact supprimé "}); 
    } catch (error) {
        console.error(error);
        res.status (400).json({error: 'Error fetching contacts'});
    }

     
  }


  /// fonction afficher 


  exports.afficherContact = async (req, res) => {
    try {
        // Database logic to display contacts
        const contactList = await ContactModel.find({}).exec();
        res.status(200).json({ contactList });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error fetching contacts' });
    }
}