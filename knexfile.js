module.exports = {
  
  development: {
    client: 'pg',
    connection: {
      hostname: 'localhost',
      port: '5432',
      user: 'development',
      password: 'development',
      database: 'thecodingbull',
      ssl: true
    }
  }
};
 