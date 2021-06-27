const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// fonction enregistrement des nouveaux utilisateur
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                name: req.body.name,
                last_name: req.body.last_name,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' , data: user}))
                .catch(error => res.status(401).json({ error: 'Adresse email deja utilisé!' }));
        })
        .catch(error => res.status(500).json({ error }));
};
// fontcion connecter utilisateur
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(User => {
            if (!User) {
                return  res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, User.password)
                .then(valid => {
                    if (!valid) {
                        return  res.status(401).json({ error: 'Mots de passe incorrect !' })
                    }
                    res.status(200).json({
                        token: jwt.sign({ userId: User._id },
                            process.env.token, { expiresIn: '168h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

// recuperer info de l'utilisateur connecter
exports.findOne = (req, res, next) => {
    let token =(req.body.userid)
    let decodeToken = jwt.verify(token, process.env.token);
    let id = decodeToken.userId;
    User.findOne({ _id: id },(err, data) => {
      if (err)res.status(500).send({message:err.message || "Some error occurred while retrieving post."});
     else res.send(data);
      });
  };

   //telecharger photo de profil

   exports.photo = (req, res, next) => {
    let token = (req.body.userid);
    let decodeToken = jwt.verify(token, process.env.token);
    let id = decodeToken.userId;
    const userPicture = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
     User.updateOne({ _id: id }, {...userPicture, picture: userPicture})
         .then(() => res.status(200).json({ message: 'Objet modifié !' }))
         .catch(error => res.status(400).json({ error }));  
      };
// exports.photo = (req,res, next) => {
//     let token = req.body.userid;
//     let decodeToken = jwt.verify(token, process.env.token);
//     let id = decodeToken.id;
//     const photoNew = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`; 
//     User.findOne(id, (err, data) => {
//       console.log(data[0].picture)
//       if(data[0].picture){
//         const photoUrl = data[0].picture.replace("http://localhost:3000/images","");
//         console.log(photoUrl)
//         fs.unlink(photoUrl, () => {
//           User.photo(photoNew,id,(err, data) => {
//             if (err)
//              res.status(500).send({message: err.message || "utilisateur non trouvé"});
//              else  res.status(200).json(data)
//              console.log(data)
//           })
//         })
//       }else{
//         User.photo(photoNew,id,(err, data) => {
//             if (err)
//              res.status(500).send({message: err.message || "utilisateur non trouvé"});
//              else  res.status(200).json(data)
//              console.log(data)
//           })
//       }
    
  
//     })
//   };

  // Supprimer un client avec le usersId spécifié dans la demande
exports.deleteOne = (req, res, next) => {
    let token = req.body.userid;
    let decodeToken = jwt.verify(token, process.env.token);
    let _id = decodeToken.id;
    User.deleteOne(_id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ce port n'existe pas."
        });
      else res.send(data);
    });
  };