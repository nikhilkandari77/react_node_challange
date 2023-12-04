const user = require('../entity/User')

class UserService {

    async getAll() {
        try {
            const users = await user.findAll();
            return users;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error; // You might want to handle or log the error appropriately
        }
    }

    async getByUsername(username) {
        try {
            const users = await user.findOne({
                where: {
                  username: username,
                },
              });
            return users;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error; // You might want to handle or log the error appropriately
        }
    }

}

module.exports = UserService;
//   const userList=[{name:"nikhil",contact:"124"},{name:"nikky",contact:"222"}];
