const { XummSdk } = require("xumm-sdk");
const { XUM_KEY, XUM_SECRET } = require("../../config");
const { TxData } = require("xrpl-txdata");
// const Sdk = new XummSdk("dadad", "Adadad");

const Sdk = new XummSdk(XUM_KEY, XUM_SECRET);
const Verify = new TxData();

const xumSdkTut = async (req, res) => {
	try {
		const appInfo = await Sdk.ping();
		// console.log(appInfo);
		console.log(appInfo.application.name);
		// const curatedAssets = await Sdk.getCuratedAssets();
		// console.log(curatedAssets);
		// 1
		// Signing Transaction
		// // console.log(`Hi! This is where we'll be writing some code`);
		// // Transaction Api
		const hex = Buffer.from("😎 Tanveer").toString("hex").toUpperCase();
		// const request = {
		// 	TransactionType: "Payment",
		// 	Destination: "rwietsevLFg8XSmG3bEZzFein1g8RBqWDZ",
		// 	Amount: "10000",
		// 	Memos: [
		// 		{
		// 			Memo: {
		// 				MemoData: hex
		// 			}
		// 		}
		// 	]
		// };

		// const payload = await Sdk.payload.create(request, true);
		// console.log(payload);
		// res.send(payload.next.always);

		// // 2
		// // Signing Transaction with subscription
		// const request = {
		// 	TransactionType: "Payment",
		// 	Destination: "rwietsevLFg8XSmG3bEZzFein1g8RBqWDZ",
		// 	Amount: "10000",
		// 	Memos: [
		// 		{
		// 			Memo: {
		// 				MemoData: hex
		// 			}
		// 		}
		// 	]
		// };

		// const subscription = await Sdk.payload.createAndSubscribe(request, (event) => {
		// 	console.log("New payload event:", event.data);

		// 	if (event.data.signed === true) {
		// 		console.log("Woohoo! The sign request was signed :)");
		// 		console.log("data", event.data);
		// 		return event.data;
		// 	}

		// 	if (event.data.signed === false) {
		// 		console.log("The sign request was rejected :(");
		// 		return false;
		// 	}
		// });

		// console.log("created:", subscription.created);

		// 3
		// Signing Transaction with subscription  getting User Token
		// const request = {
		// 	TransactionType: "Payment",
		// 	Destination: "rwietsevLFg8XSmG3bEZzFein1g8RBqWDZ",
		// 	Amount: "10000",
		// 	Memos: [
		// 		{
		// 			Memo: {
		// 				MemoData: hex
		// 			}
		// 		}
		// 	]
		// };

		// const subscription = await Sdk.payload.createAndSubscribe(request, (event) => {
		// 	console.log("New payload event:", event.data);

		// 	if (event.data.signed === true) {
		// 		// console.log("Woohoo! The sign request was signed :)");
		// 		// console.log("data", event.data);
		// 		return event.data;
		// 	}

		// 	if (event.data.signed === false) {
		// 		// console.log("The sign request was rejected :(");
		// 		return false;
		// 	}
		// });

		// console.log("created:", subscription.created);
		// /**
		//  * Now let's wait until the subscription resolved (by returning something)
		//  * in the callback function.
		//  */
		// const resolveData = await subscription.resolved;

		// if (resolveData.signed === false) {
		// 	console.log("The sign request was rejected :(");
		// }

		// if (resolveData.signed === true) {
		// 	console.log("Woohoo! The sign request was signed :)");

		// 	/**
		// 	 * Let's fetch the full payload end result, and get the issued
		// 	 * user token, we can use to send our next payload per Push notification
		// 	 */
		// 	const result = await Sdk.payload.get(resolveData.payload_uuidv4);
		// 	console.log("User token:", result.application.issued_user_token);
		// }

		// 4
		// push notification for transaction
		// 1865167e-a61b-49b5-8bff-5e4582b752e1

		// const request = {
		// 	txjson: {
		// 		TransactionType: "Payment",
		// 		Destination: "rwietsevLFg8XSmG3bEZzFein1g8RBqWDZ",
		// 		Amount: "10000"
		// 	},
		// 	user_token: "1865167e-a61b-49b5-8bff-5e4582b752e1"
		// };

		// const subscription = await Sdk.payload.createAndSubscribe(request, (event) => {
		// 	console.log("New payload event:", event.data);

		// 	// The event data contains a property 'signed' (true or false), return :)
		// 	if (Object.keys(event.data).indexOf("signed") > -1) {
		// 		return event.data;
		// 	}
		// });

		// console.log("New payload created, URL:", subscription.created.next.always);
		// console.log("  > Pushed:", subscription.created.pushed ? "yes" : "no");

		// const resolveData = await subscription.resolved;

		// if (resolveData.signed === false) {
		// 	console.log("The sign request was rejected :(");
		// } else {
		// 	console.log("Woohoo! The sign request was signed :)");
		// 	/**
		// 	 * Let's fetch the full payload end result and check for
		// 	 * a transaction hash, to verify the transaction on ledger later.
		// 	 */
		// 	const result = await Sdk.payload.get(resolveData.payload_uuidv4);
		// 	console.log("On ledger TX hash:", result.response.txid);
		// 	// On ledger TX hash: 3B4716127201BCDF6B83F1F32D104C5D8D7B00A52B58EA1493F9EBE5F7FDCDA6
		// 	// verify the transaction from XRP-Ledger
		// 	const verifiedResult = await Verify.getOne(result.response.txid);
		// 	console.log("On ledger balance changes:", verifiedResult);
		// }
	} catch (e) {
		console.log("Error ocurred in xumSdkTut", e);
	}
};

module.exports = xumSdkTut;
