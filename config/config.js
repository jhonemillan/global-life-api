module.exports = {
    development: {
        username: "root",
        password: "admin",
        database: "bdatenciongl",
        host: "jhonemillan",
        dialect: 'mysql',
    },    
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mysql',
    }
  };