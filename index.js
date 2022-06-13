const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("./config/db");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const routes = require("./routes");
const xumSdkTut = require("./routes/xumm-sdk-tutorial");
const connectXumWallet = require("./routes/xumm-sdk-tutorial/connectWallet");
const app = express();
// Xrpl
// Socket
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const xrplClient = require("./routes/xumm-sdk-tutorial/getBalance");
const io = new Server(server, { cors: { origin: "*", methods: "*" } });

// * Database connection
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("db connected!");
});

// * Cors
app.use(
	cors({
		origin: true,
		credentials: true
	})
);

// * Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("short"));
// This library is derepecatd to xrpl-client
// rippled-ws-client
// const client = require("rippled-ws-client");
// const callFunc = async () => {
// 	try {
// 		const data = await new client("wss://fh.xrpl.ws");
// 		// console.log("connected");
// 		console.log({ data });
// 		const getAccountBalance = await data.send({
// 			command: "account_info",
// 			account: "rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn"
// 			// account: "rLLUZL2QVsqE71PjQ1SmRPy9Rqkd4MU5SR"
// 		});
// 		console.log(getAccountBalance);
// 		const balance = parseInt(getAccountBalance.account_data.Balance) / 1000000;
// 		console.log("Your balance is", balance, "XRP");
// 		data.close();
// 	} catch (e) {
// 		console.log(e);
// 	}
// };
// callFunc();

// * Api routes
app.use(
	"/api/v1",
	(req, res, next) => {
		req.io = io;
		next();
	},
	routes
);
// app.get("/get-balance/:account", xrplClient);
// xumSdkTut();
// app.get(
// 	"/connect-xumm",
// 	(req, res, next) => {
// 		req.io = io;
// 		next();
// 	},
// 	connectXumWallet
// );
// connectXumWallet();
// app.use("/xum-sginIn", () => {
// 	console.log("user", req);
// });
// app.post("/xum-sginIn", () => {
// 	console.log("post", req);
// });
// app.get("/xum-sginIn", () => {
// 	console.log("get", req);
// });
app.get("/", (req, res) => {
	// console.log("hello");
	res.send("hello");
	// res.sendFile(path.join(__dirname, "./frontend/index.html"));
});
// app.get("/check", (req, res) => {
// 	// console.log("hello");
// 	res.send("hello");
// 	// res.sendFile(path.join(__dirname, "./frontend/index.html"));
// });

// app.get(
// 	"/connect-xumm/:id",
// 	(req, res, next) => {
// 		req.io = io;
// 		next();
// 	},
// 	connectXumWallet
// );
// Socket Connection
io.on("connection", (socket) => {
	//when connect
	console.log("New client connected with id: ", socket.id);

	//when disconnect
	socket.on("disconnect", () => {
		console.log("a user disconnected!", socket.id);
	});
});

app.use("*", (req, res) => {
	res.send("Route not found");
});

let PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on PORT http://localhost:${PORT}`));
