var request = request("request");

var Corp = function(endpoint, keyId, vCode) {
    this.endpoint = endpoint + "/corp";
    this.keyId = keyId;
    this.vCode = vCode;
};

Corp.prototype.accountBalance = function(userId, characterId, apiKey, callback) {
    var payload = "userID=" + userId + "&characterID=" + characterId + "&apiKey=" + apiKey;
    var url = this.endpoint + "/AccountBalance.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.assetList = function(callback) {
    var payload = "keyID=" + this.keyId + "&vCode=" + this.vCode + "&characterID=" + characterId;
    var url = this.endpoint + "/AssetList.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.contactList = function(callback) {
    var payload = "userID=" + userId + "&characterID=" + characterId + "&apiKey=" + apiKey;
    var url = this.endpoint + "/ContactList.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.containerLog = function(callback) {
    var payload = "userID=" + userId + "&characterID=" + characterId + "&apiKey=" + apiKey;
    var url = this.endpoint + "/ContainerLog.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.contracts = function(contractId, callback) {
    var payload = "keyID=" + this.keyId + "&vCode=" + this.vCode + "&characterID=" + characterId;
    if(contractId !== null || contractId !== "") {
        payload = payload + "&contractID=" + contractId;
    }
    var url = this.endpoint + "/Contracts.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.contractItems = function(contractId, callback) {
    var payload = "keyID=" + this.keyId + "&vCode=" + this.vCode + "&characterID=" + characterId + "&contractID=" + contractId;
    var url = this.endpoint + "/ContractItems.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.contractBids = function(callback) {
    var payload = "keyID=" + this.keyId + "&vCode=" + this.vCode + "&characterID=" + characterId;
    var url = this.endpoint + "/ContractBids.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.corporationSheet = function(callback) {
    var payload = "keyID=" + this.keyId + "&vCode=" + this.vCode;
    var url = this.endpoint + "/CorporationSheet.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.factionalWarfareStats = function(callback) {
};

Corp.prototype.industryJobs = function(callback) {
};

Corp.prototype.killMails = function(callback) {
};

Corp.prototype.locations = function(callback) {
};

Corp.prototype.marketOrders = function(callback) {
};

Corp.prototype.medals = function(callback) {};

Corp.prototype.memberMedals = function(callback) {};

Corp.prototype.memberSecurity = function(callback) {};

Corp.prototype.memberSecurityLog = function(callback) {};

Corp.prototype.memberTracking = function(callback) {};

Corp.prototype.outpostList = function(callback) {};

Corp.prototype.outpostServiceDetail = function(callback) {};

Corp.prototype.shareholders = function(callback) {};

Corp.prototype.standingsNpc = function(callback) {};

Corp.prototype.starbaseDetails = function(itemId, callback) {
    var payload = "keyID=" + this.keyId + "&vCode=" + this.vCode + "&itemID=" + itemId;
    var url = this.endpoint + "/StarbaseDetail.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.starbaseList = function(callback) {
    var payload = "keyID=" + this.keyId + "&vCode=" + this.vCode;
    var url = this.endpoint + "/StarbaseList.xml.aspx?" + payload;
    return request.get(url);
};

Corp.prototype.titles = function(callback) {};

Corp.prototype.walletJournal = function(callback) {};

Corp.prototype.walletTransactions = function(callback) {};

