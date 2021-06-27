const jwt = require('jsonwebtoken');

// middleware securite verification mdp et email
module.exports = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        const message = "Vous n'avez pas fourni un JWT valide.";
        return res.status(401).json({ message });
    }

    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.token, (error, decodedToken) => {
        if (error) {
            const message = "L'utilisateur n'est pas autorisé à accéder à cette ressource.";
            return res.status(401).json({ message, data: error });
        }

        else {
            req.token = decodedToken;
            next();
        }
    })
}