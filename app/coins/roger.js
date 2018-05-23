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
	genesisBlockHash: "12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2",
	genesisCoinbaseTransactionId: "97ddfbbae6be97fd6cdf3e7ca13232a3afff2353e29badfab7f73011edd4ced9",
	genesisCoinbaseTransaction: {
		"txid":"97ddfbbae6be97fd6cdf3e7ca13232a3afff2353e29badfab7f73011edd4ced9",
		"hash":"97ddfbbae6be97fd6cdf3e7ca13232a3afff2353e29badfab7f73011edd4ced9",
		"blockhash":"12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2",
		"version":1,
		"locktime":0,
		"size":199,
		"vsize":199,
		"time":1317972665,
		"blocktime":1317972665,
		"vin":[
			{
				"prev_out":{
					"hash":"0000000000000000000000000000000000000000000000000000000000000000",
					"n":4294967295
				},
				"coinbase":"04ffff001d0104404e592054696d65732030352f4f63742f32303131205374657665204a6f62732c204170706c65e280997320566973696f6e6172792c2044696573206174203536"
			}
		],
		"vout":[
			{
				"value":"50.00000000",
				"n":0,
				"scriptPubKey":{
					"hex":"040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d3eb4b10f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9 OP_CHECKSIG",
					"type":"pubkey",
					"reqSigs":1,
					"addresses":[
						"Ler4HNAEfwYhBmGXcFP2Po1NpRUEiK8km2"
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
			date: "2011-10-07",
			blockHash: "12a765e31ffd4059bada1e25190f6e98c99d9714d334efa41a195a7e7e04bfe2",
			note: "The Holy Roger Coin genesis block.",
			referenceUrl: "https://medium.com/@SatoshiLite/satoshilite-1e2dad89a017"
		},
		{
			type: "tx",
			date: "2017-05-10",
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