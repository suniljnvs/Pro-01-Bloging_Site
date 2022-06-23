const jwt = require("jsonwebtoken");


let autherAuth = async function(req, res, next) {      

    try {
        let token = req.headers["x-api-key"];

        if (!token) {
            return res.status(403).send({ status: false, message: "Missing authentication token in request" })
        };

        let decoded = await jwt.verify(token, "Sunil_project_01");

        if (!decoded) {
            return res.status(400).send({ status: false, message: "token is invalid" })
        }

        req.authorId = decoded.authorId

        next();

    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
};




module.exports = { autherAuth }
