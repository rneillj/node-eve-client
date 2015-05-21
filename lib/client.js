var Corp = require('./lib/corp.js');

function Client(keyId, vCode) {
    this.endpoint = "https://api.eveonline.com";
    this.keyId = keyId;
    this.vCode = vCode;
    this.corp = new Corp(this.endpoint, this.keyId, this.vCode);
};

module.exports = Client;

