var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

module.exports = {
	name:"The Holy Roger Coin",
	logoUrl:"/img/logo/roger.svg",
	siteTitle:"The Holy Roger Coin Explorer",
	nodeTitle:"The Holy Roger Coin Full Node",
	nodeUrl:"https://theholyroger.com/",
	demoSiteUrl: "https://explorer.theholyroger.com",
	currencyUnits:[
		{
			name:"ROGER",
			multiplier:1,
			default:true,
			values:["", "roger", "ROGER"],
			decimalPlaces:8
		},
		{
			name:"Rogit",
			multiplier:1000,
			values:["rogit"],
			decimalPlaces:5
		}
	],
	genesisBlockHash: "efdcf5b2eece13c846fad57cef0eb5cbc07076dc90cf125a1b78625bda84b99f",
	genesisCoinbaseTransactionId: "7295c791d735679ec7578c74881458876ac8e696d6683311b482862306879544",
	genesisCoinbaseTransaction: {
		"txid":"7295c791d735679ec7578c74881458876ac8e696d6683311b482862306879544",
		"hash":"7295c791d735679ec7578c74881458876ac8e696d6683311b482862306879544",
		"blockhash":"efdcf5b2eece13c846fad57cef0eb5cbc07076dc90cf125a1b78625bda84b99f",
		"version":1,
		"locktime":0,
		"size":199,
		"vsize":199,
		"time":1527430983,
		"blocktime":1527430983,
		"vin":[
			{
				"prev_out":{
					"hash":"0000000000000000000000000000000000000000000000000000000000000000",
					"n":4294967295
				},
				"coinbase":"04ffff001d01043c552e532e2053757370656e6473204e65772054617269666673206f6e204368696e612c2053746f6b696e6720576869746520466c6167204665617273"
			}
		],
		"vout":[
			{
				"value":"50.00000000",
				"n":0,
				"scriptPubKey":{
					"hex":"04B99291FD5963B92F914F3ADB533605ECE67A9F4A4120CED4D8CB2E68C74AD5150D4EB228AE2103A693D4A4088A49A0526AE873D8EFD8CB84CF86246F9B8CF948 OP_CHECKSIG",
					"type":"pubkey",
					"reqSigs":1,
					"addresses":[
						"RrffPHbMGidU1yo5WguAmAZGEbGherNKjd"
					]
				}
			}
		]
	},
	specialBlocks:{
		"12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2":{
			"noteTitle":"The Holy Roger Coin Genesis Block",
			"noteBodyHtml":"This is the first block in The Holy Roger Coin blockchain."
		}
	},
	specialTransactions:{
	},
	historicalData: [
		{
			type: "block",
			date: "2018-05-27",
			blockHash: "efdcf5b2eece13c846fad57cef0eb5cbc07076dc90cf125a1b78625bda84b99f",
			note: "The Holy Roger Coin genesis block.",
			referenceUrl: "https://medium.com/@SatoshiLite/satoshilite-1e2dad89a017"
		},
		{
			type: "tx",
			date: "2018-05-21",
			txid: "ce385e55fb2a73fa438426145b074f08314812fa3396472dc572b3079e26e0f9",
			note: "First SegWit transaction.",
			referenceUrl: "https://twitter.com/satoshilite/status/862345830082138113"
		}
	],
	exchangeRateData:{
		jsonUrl:"https://api.coinmarketcap.com/v1/ticker/Roger/",
		exchangedCurrencyName:"usd",
		responseBodySelectorFunction:function(responseBody) {
			if (responseBody[0] && responseBody[0].price_usd) {
				return responseBody[0].price_usd;
			}
			
			return -1;
		}
	},
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 840000);

		return eras[index];
	}
};