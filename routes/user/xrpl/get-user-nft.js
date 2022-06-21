const xrpl = require("xrpl");

const getUserNft = async (req, res) => {
	try {
		const account = req.params.account;
		const client = new xrpl.Client("wss://xls20-sandbox.rippletest.net:51233");
		await client.connect();
		// Get info from the ledger about the address we just funded
		// const response = await client.request({
		// 	command: "account_info",
		// 	account: "sn3nxiW7v8KXzPzAqzyHXbSSKNuN9",
		// 	ledger_index: "validated"
		// });

		// const firstAccount = xrpl.Wallet.fromSeed(getAccount);
		const firstAccount = xrpl.Wallet.fromSeed(account);

		const getNfts = await client.request({
			method: "account_nfts",
			account: firstAccount.classicAddress
		});

		balance = await client.getXrpBalance(firstAccount.classicAddress);

		client.disconnect();
		return res.status(200).send({ status: 200, getNfts, balance });
	} catch (e) {
		console.log(e);
		return res.status(400).send({ status: 400, message: e.message });
	}
};
module.exports = getUserNft;
