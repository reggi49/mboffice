if (process.env.NODE_ENV === 'production'){
  module.exports = {
    googleClientID  : process.env.GOOGLE_CLIENT_ID,
    mongoClientSecret : process.env.GOOGLE_CLIENT_SECRET,
    mongoURI  : process.env.MONGO_URI,
    cookieKey : process.env.COOKIE_KEY
  };
  console.log('production');
}else{
  module.exports = require('./dev');
}