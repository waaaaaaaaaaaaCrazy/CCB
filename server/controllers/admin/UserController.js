const userModel=require("../../models/userModel");
const UserService = require("../../services/admin/UserService");


const UserController = {
    login: async (req, res) => {
        await UserService.login(req.body);
    }
};

const login = async (req, res) => {
    const { username } = req.query;
    try {
        const result = await userModel.getPassword(username);
        if (result.length > 0) {
            res.json({ password: result[0].password });
        } else {
            res.status(404).json({ message: '用户未找到' });
        }
    } catch (error) {
        res.status(500).json({ message: '服务器错误', error: error.message });
    }
};
module.exports = {
    login
};