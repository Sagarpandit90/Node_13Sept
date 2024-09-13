const users = require('../users.json')

function getAllUser(req,res) {
    try {
        res.json(users);
    } catch (error) {
        
    }
}

function getUser(req,res){
    try {
        let id = parseInt(re.params.id);
        let user = users.find((user)=> user.id == id);
    } catch (err) {
        
    }
}

module.exports = {
    getAllUser
}