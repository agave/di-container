require('module-alias/register');

const container = require('@src/container');

const User = container.getModel('User');

Promise.resolve()
  .then(() => User.sync({ force: true }))
  .then(() => User.add({ name: 'Example' }))
  .then(result => console.log(result.get()))
  .catch(console.log)
  .then(() => {
    const Token = container.getModel('Token');
    const token = new Token();

    console.log('>>>', token instanceof Token, Token.create());
  });