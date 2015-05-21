var request = require('request');

function Corp(endpoint, keyId, vCode) {
    this.endpoint = endpoint + '/corp';
    this.keyId = keyId;
    this.vCode = vCode;
}

var resources = {
    accountBalance: '/AccountBalance.xml.aspx',
    assetList: '/AssetList.xml.aspx',
    contactList: '/ContactList.xml.aspx',
    containerLog: '/ContainerLog.xml.aspx',
    contracts: '/Contracts.xml.aspx',
    contractItems: '/ContractItems.xml.aspx',
    contractBids: '/ContractBids.xml.aspx',
    corporationSheet: '/CorporationSheet.xml.aspx',
    factionalWarfareStats: '/FacWarStats.xml.aspx',
    industryJobs: '/IndustryJobs.xml.aspx',
    killMails: '/Killlog.xml.aspx',
    locations: '/Locations.xml.aspx',
    marketOrders: '/MarketOrders.xml.aspx',
    medals: '/Medals.xml.aspx',
    memberMedals: '/MemberMedals.xml.aspx',
    memberSecurity: '/MemberSecurity.xml.aspx',
    memberSecurityLog: '/MemberSecurityLog.xml.aspx',
    memberTracking: '/MemberTracking.xml.aspx',
    outpostList: '/OutpostList.xml.aspx',
    outpostServiceDetail: '/OutpostServiceDetail.xml.aspx',
    shareholders: '/Shareholders.xml.aspx',
    standingsNpc: '/Standings.xml.aspx',
    starbaseDetail: '/StarbaseDetail.xml.aspx',
    starbaseList: '/StarbaseList.xml.aspx',
    titles: '/Titles.xml.aspx',
    walletJournal: 'WalletJournal.xml.aspx',
    walletTransactions: 'WalletTransactions.xml.aspx'
};

// Helper Functions
var get = function(resource, params) {
    var payload = '?keyID=' + this.keyId + '&vCode=' + this.vCode + params;
    var url = this.endpoint + resources[resource] + payload;
    return request.get(url);
};

var walletParams = function(characterId, accountKey, fromId, rowCount) {
    /**
    * accountKey - Determines which corporate wallet will be accessed.
    *              A number between 1000 and 1006 should be passed.
    *
    * fromId - Otional. Used for walking the journal backwards. See documentation
    *          provided here: http://wiki.eve-id.net/APIv2_Char_JournalEntries_XML
    *
    * rowCount - Optional. Used for specifying the amount of rows to return.
    *            Default is 50. Maximum is 2560.
    */

    var params = '&characterID=' + characterId + '&accountKey=' + accountKey;
    if(fromId) {
        params = params + '&fromID=' + fromId;
    }
    if(rowCount) {
        params = params + '&rowCount=' + rowCount;
    }
    return params;
};

// API Functions
Corp.prototype.accountBalance = function(characterId) {
    params = '&characterID=' + characterId;
    return get.call(this, 'accountBalance', params);
};

Corp.prototype.assetList = function() {
    params = '&characterID=' + characterId;
    return get(assetList, params);
};

Corp.prototype.contactList = function() {
    params = '&characterID=' + characterId;
    return get(contactList, params);
};

Corp.prototype.containerLog = function() {
    params = '&characterID=' + characterId;
    return get(containerLog, params);
};

Corp.prototype.contracts = function(characterId, contractId) {
    params = '&characterID=' + characterId;
    if(contractId) {
        params = params + '&contractID=' + contractId;
    }
    return get(contracts, params);
};

Corp.prototype.contractItems = function(characterId, contractId) {
    var params = '&characterID=' + characterId + '&contractID=' + contractId;
    return get(contractItems, params);
};

Corp.prototype.contractBids = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(contractBids, params);
};

Corp.prototype.corporationSheet = function() {
    return get(corporationSheet, '');
};

Corp.prototype.factionalWarfareStats = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(factionalWarfareStats, params);
};

Corp.prototype.industryJobs = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(industryJobs, params);
};

Corp.prototype.killMails = function(beforeKillId) {
    var params = '';
    if(beforeKillId) {
        params = params + '&beforeKillID=' + beforeKillId;
    }
    return get(killMails, params);
};

Corp.prototype.locations = function(characterId, itemIds) {
    // itemIds should be a comma separated list of valid item IDs
    var params = '&characterID=' + characterId;
    if(itemIds) {
        params = params + '&IDs=' + itemIds;
    }
    return get(locations, params);
};

Corp.prototype.marketOrders = function(characterId, orderId) {
    var params = '&characterID=' + characterId;
    if(orderId) {
        params = params + '&orderID=' + orderId;
    }
    return get(marketOrders, params);
};

Corp.prototype.medals = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(medals, params);
};

Corp.prototype.memberMedals = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(memberMedals, params);
};

Corp.prototype.memberSecurity = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(memberSecurity, params);
};

Corp.prototype.memberSecurityLog = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(memberSecurityLog, params);
};

Corp.prototype.memberTracking = function(extended) {
    /**
    * extended should be 1 here if the requester wants the extended
    * version of the API call, otherwise an empty string or null
    */

    var params = '';
    if(extended) {
        params = params + '&extended=' + extended;
    }
    return get(memberTracking, params);
};

Corp.prototype.outpostList = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(outpostList, params);
};

Corp.prototype.outpostServiceDetail = function(characterId, itemId) {
    var params = '&characterID=' + characterId + '&itemID=' + itemId;
    return get(outpostServiceDetail, params);
};

Corp.prototype.shareholders = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(shareholders, params);
};

Corp.prototype.standingsNpc = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(standingsNpc, params);
};

Corp.prototype.starbaseDetail = function(characterId, itemId) {
    var params = '&characterID=' + characterId + '&itemID=' + itemId;
    return get(starbaseDetail, params);
};

Corp.prototype.starbaseList = function() {
    return get(starbaseList, '');
};

Corp.prototype.titles = function(characterId) {
    var params = '&characterID=' + characterId;
    return get(titles, params);
};

Corp.prototype.walletJournal = function(characterId, accountKey, fromId, rowCount) {
    return get(walletJournal, walletParams(characterId, accountKey, fromId, rowCount));
};

Corp.prototype.walletTransactions = function(characterId, accountKey, fromId, rowCount) {
    return get(walletTransactions, walletParams(characterId, accountKey, fromId, rowCount));
};

module.exports = Corp;

