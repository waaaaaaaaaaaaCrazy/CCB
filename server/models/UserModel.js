const connection = require('../libs/db');
const {db: params} = require("../libs/config");

//查询密码
const getPassword = (param) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT password FROM users where username=?", [param], (err, result) => {
            if (err) {
                // 处理错误
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

//登录请求
const UserModel = {
    login: async (req, res) => {

    }
}

module.exports = {
    getPassword
}