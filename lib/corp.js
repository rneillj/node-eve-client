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
var get = function(resource, params, callback) {
    var payload = '?keyID=' + this.keyId + '&vCode=' + this.vCode + params;
    var url = this.endpoint + resources[resource] + payload;
    return request.get(url, callback);
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
Corp.prototype.accountBalance = function(characterId, callback) {
    params = '&characterID=' + characterId;
    return get.call(this, 'accountBalance', params, callback);
};

Corp.prototype.assetList = function(callback) {
    params = '&characterID=' + characterId;
    return get.call(this, 'assetList', params, callback);
};

Corp.prototype.contactList = function(callback) {
    params = '&characterID=' + characterId;
    return get.call(this, 'contactList', params, callback);
};

Corp.prototype.containerLog = function(callback) {
    params = '&characterID=' + characterId;
    return get.call(this, 'containerLog', params, callback);
};

Corp.prototype.contracts = function(characterId, contractId, callback) {
    params = '&characterID=' + characterId;
    if(contractId) {
        params = params + '&contractID=' + contractId;
    }
    return get.call(this, 'contracts', params, callback);
};

Corp.prototype.contractItems = function(characterId, contractId, callback) {
    var params = '&characterID=' + characterId + '&contractID=' + contractId;
    return get.call(this, 'contractItems', params, callback);
};

Corp.prototype.contractBids = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'contractBids', params, callback);
};

Corp.prototype.corporationSheet = function(callback) {
    return get.call(this, 'corporationSheet', '', callback);
};

Corp.prototype.factionalWarfareStats = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'factionalWarfareStats', params, callback);
};

Corp.prototype.industryJobs = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'industryJobs', params, callback);
};

Corp.prototype.killMails = function(beforeKillId) {
    var params = '';
    if(beforeKillId) {
        params = params + '&beforeKillID=' + beforeKillId;
    }
    return get.call(this, 'killMails', params, callback);
};

Corp.prototype.locations = function(characterId, itemIds) {
    // itemIds should be a comma separated list of valid item IDs
    var params = '&characterID=' + characterId;
    if(itemIds) {
        params = params + '&IDs=' + itemIds;
    }
    return get.call(this, 'locations', params, callback);
};

Corp.prototype.marketOrders = function(characterId, orderId) {
    var params = '&characterID=' + characterId;
    if(orderId) {
        params = params + '&orderID=' + orderId;
    }
    return get.call(this, 'marketOrders', params, callback);
};

Corp.prototype.medals = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'medals', params, callback);
};

Corp.prototype.memberMedals = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'memberMedals', params, callback);
};

Corp.prototype.memberSecurity = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'memberSecurity', params, callback);
};

Corp.prototype.memberSecurityLog = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'memberSecurityLog', params, callback);
};

Corp.prototype.memberTracking = function(extended, callback) {
    /**
    * extended should be 1 here if the requester wants the extended
    * version of the API call, otherwise an empty string or null
    */

    var params = '';
    if(extended) {
        params = params + '&extended=' + extended;
    }
    return get.call(this, 'memberTracking', params, callback);
};

Corp.prototype.outpostList = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'outpostList', params, callback);
};

Corp.prototype.outpostServiceDetail = function(characterId, itemId, callback) {
    var params = '&characterID=' + characterId + '&itemID=' + itemId;
    return get.call(this, 'outpostServiceDetail', params, callback);
};

Corp.prototype.shareholders = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'shareholders', params, callback);
};

Corp.prototype.standingsNpc = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'standingsNpc', params, callback);
};

Corp.prototype.starbaseDetail = function(characterId, itemId, callback) {
    var params = '&characterID=' + characterId + '&itemID=' + itemId;
    return get.call(this, 'starbaseDetail', params, callback);
};

Corp.prototype.starbaseList = function(callback) {
    return get.call(this, 'starbaseList', '', callback);
};

Corp.prototype.titles = function(characterId, callback) {
    var params = '&characterID=' + characterId;
    return get.call(this, 'titles', params, callback);
};

Corp.prototype.walletJournal = function(characterId, accountKey, fromId, rowCount, callback) {
    return get.call(this, 'walletJournal', walletParams(characterId, accountKey, fromId, rowCount), callback);
};

Corp.prototype.walletTransactions = function(characterId, accountKey, fromId, rowCount, callback) {
    return get.call(this, 'walletTransactions', walletParams(characterId, accountKey, fromId, rowCount), callback);
};

module.exports = Corp;

