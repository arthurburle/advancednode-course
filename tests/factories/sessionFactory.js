const Buffer = require('safe-buffer').Buffer;
const Keygrip = require('Keygrip');
// const keys = require('../../config/keys');
const keygrip = new Keygrip(['123123123']);

module.exports = user => {
  const sessionObject = {
    passport: {
      user: user._id.toString(),
    },
  };

  const session = Buffer.from(JSON.stringify(sessionObject)).toString('base64');

  sig = keygrip.sign('session=' + session);

  return { session, sig };
};
