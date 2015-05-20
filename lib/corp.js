var request = request("request");

var Corp = function(endpoint, keyId, vCode) {
    this.endpoint = endpoint + "/corp";
    this.keyId = keyId;
    this.vCode = vCode;
};

var resources = {
    accountBalance: "/AccountBalance.xml.aspx",
    assetList: "/AssetList.xml.aspx",
    contactList: "/ContactList.xml.aspx",
    containerLog: "/ContainerLog.xml.aspx",
    contracts: "/Contracts.xml.aspx",
    contractItems: "/ContractItems.xml.aspx",
    contractBids: "/ContractBids.xml.aspx",
    corporationSheet: "/CorporationSheet.xml.aspx",
    factionalWarfareStats: "/FacWarStats.xml.aspx",
    industryJobs: "/IndustryJobs.xml.aspx",
    killMails: "/Killlog.xml.aspx",
    locations: "/Locations.xml.aspx",
    marketOrders: "/MarketOrders.xml.aspx",
    medals: "/Medals.xml.aspx",
    memberMedals: "/MemberMedals.xml.aspx",
    memberSecurity: "/MemberSecurity.xml.aspx",
    memberSecurityLog: "/MemberSecurityLog.xml.aspx",
    memberTracking: "/MemberTracking.xml.aspx",
    outpostList: "/OutpostList.xml.aspx",
    outpostServiceDetail: "/OutpostServiceDetail.xml.aspx",
    shareholders: "/Shareholders.xml.aspx",
    standings: "/Standings.xml.aspx",
    starbaseDetail: "/StarbaseDetail.xml.aspx",
    starbaseList: "/StarbaseList.xml.aspx",
    titles: "/Titles.xml.aspx",
    walletJournal: "WalletJournal.xml.aspx",
    walletTransactions: "WalletTransactions.xml.aspx"
};

var get = function(resource, params, callback) {
    var payload = "?keyID=" + this.keyId + "&vCode=" + this.vCode + params;
    var url = this.endpoint + resources.resource;
    return request.get(url)
};

Corp.prototype.accountBalance = function(characterId, callback) {
    params = "&characterID=" + characterId;
    return get(accountBalance, params);
};

Corp.prototype.assetList = function(callback) {
    params = "&characterID=" + characterId;
    return get(assetList, params);
};

Corp.prototype.contactList = function(callback) {
    params = "&characterID=" + characterId;
    return get(contactList, params);
};

Corp.prototype.containerLog = function(callback) {
    params = "&characterID=" + characterId;
    return get(containerLog, params);
};

Corp.prototype.contracts = function(characterId, contractId, callback) {
    params = "&characterID=" + characterId;
    if(contractId) {
        params = params + "&contractID=" + contractId;
    }
    return get(contracts, params);
};

Corp.prototype.contractItems = function(characterId, contractId, callback) {
    var params = "&characterID=" + characterId + "&contractID=" + contractId;
    return get(contractItems, params);
};

Corp.prototype.contractBids = function(characterId, callback) {
    var params = "&characterID=" + characterId;
    return get(contractBids, params);
};

Corp.prototype.corporationSheet = function(callback) {
    return get(corporationSheet, "");
};

Corp.prototype.factionalWarfareStats = function(characterId, callback) {
    var params = "&characterID=" + characterId;
    return get(factionalWarfareStats, params);
};

Corp.prototype.industryJobs = function(characterId, callback) {
    var params = "&characterID=" + characterId;
    return get(industryJobs, params);
};

Corp.prototype.killMails = function(beforeKillId, callback) {
    var params = ""
    if(beforeKillId) {
        params = params + "&beforeKillID=" + beforeKillId;
    }
    return get(killMails, params);
};

Corp.prototype.locations = function(callback) {
};

Corp.prototype.marketOrders = function(callback) {
};

Corp.prototype.medals = function(callback) {
};

Corp.prototype.memberMedals = function(callback) {
};

Corp.prototype.memberSecurity = function(callback) {
};

Corp.prototype.memberSecurityLog = function(callback) {
};

Corp.prototype.memberTracking = function(callback) {
};

Corp.prototype.outpostList = function(callback) {
};

Corp.prototype.outpostServiceDetail = function(callback) {
};

Corp.prototype.shareholders = function(callback) {
};

Corp.prototype.standingsNpc = function(callback) {
};

Corp.prototype.starbaseDetails = function(itemId, callback) {
};

Corp.prototype.starbaseList = function(callback) {
};

Corp.prototype.titles = function(callback) {
};

Corp.prototype.walletJournal = function(callback) {
};

Corp.prototype.walletTransactions = function(callback) {
};

