const bcrypt = require('bcryptjs');
const passport = require('passport');
const helpers = {};

helpers.encryptPassword = async (password) => {
    //const salt = await bcrypt.genSalt(10);
    //const hash = await bcrypt.hash(password, salt);
    const salt = bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    return hash;
};

helpers.matchPassword = async (password, savedPassword) => {
    try {
        //return await bcrypt.compare(password, savedPassword);

        return await bcrypt.compareSync(password, savedPassword);
    } catch (e) {
        console.log(e);
    }
};

module.exports = helpers;