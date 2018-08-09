if (process.env.NODE_ENV === 'production'){
  module.exports = {
    googleClientID  : process.env.GOOGLE_CLIENT_ID,
    mongoClientSecret : process.env.GOOGLE_CLIENT_SECRET,
    MongoURI  : process.env.MONGO_URI,
    cookieKey : prosess.env.COOKIE_KEY
  };
}else{
  module.exports = require('./dev');
}