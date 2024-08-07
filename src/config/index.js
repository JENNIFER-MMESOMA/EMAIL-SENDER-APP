const dotenv = require("dotenv");
// environmental variable configuration
dotenv.config();

const envVariable={
    PORT: process.env.PORT,
    CLIENT_SECRET:  process.env.CLENT_SECRET,
    CLIENT_ID:  process.env.CLENT_ID,
    ACCESS_TOKEN:  process.env.ACCESS_TOKEN,
    REFRESH_TOKEN:  process.env.REFRESH_TOKEN,
    EMAIL_USER:process.env.EMAIL_USER,
};

module.exports = envVariable;