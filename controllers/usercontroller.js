const users = require('../users.json')

function getAllUser(req,res) {
    try {
        res.json(users);
    } catch (error) {
        
    }
}

module.exports = {
    getAllUser
}