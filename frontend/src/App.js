// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
const { io } = require("socket.io-client");
// const socket = io("http://localhost:5000");

// const socket = io("http://localhost:5000");
function App() {
	const [cumImg, setCumImg] = useState(false);
	const [socketId, setSocketId] = useState("");
	const [accountAddress, setAccountAddress] = useState("");
	const [balance, setBalance] = useState("");
	const [result, setResult] = useState("");
	const connectWallet = async () => {
		// console.log("Nice");
		const getImg = await axios.get(`http://localhost:5000/connect-xumm/${socketId}`);
		console.log(getImg.data);
		setCumImg(getImg.data.message);
	};
	const getBalance = async () => {
		const myBalance = await axios.get(`http://localhost:5000/get-balance/${accountAddress}`);
		setBalance(myBalance.data.response);
	};
	// useEffect(() => {
	// 	socket.on("wow", (data) => {
	// 		console.log(data);
	// 	});
	// 	return () => {};
	// }, []);
	useEffect(() => {
		// const socket = io(baseURL);
		const socket = io("http://localhost:5000");

		socket.on("connect", function (data) {
			console.log("connected", socket.id);
			setSocketId(socket.id);
			console.log(socket.id);
		});
		socket.on("liveXum", (data) => {
			console.log(data);
		});
		socket.on("result", (data) => {
			setResult(data);
			setAccountAddress(data.response.account);
			// token dbe22deb-bc6c-4e35-ac0a-fe9cd3305a04
			// account ry8ydKHUJP4vna4V7kuAGmDAX9Xzd4oxf
		});

		socket.on("disconnect", function (message) {
			console.log("Socket disconnected from server: ", message);
		});

		return () => {
			socket.close();
		};
		// eslint-disable-next-line
	}, []);

	return (
		<div style={{ margin: "20px" }}>
			<h1>Frontend</h1>
			<button onClick={connectWallet}>Connect Wallet</button>
			{cumImg && (
				<>
					<h6>Scan This Png</h6>
					<img src={cumImg} alt="png" />
				</>
			)}
			<h4>Balance</h4>
			{balance}
			<button onClick={getBalance}>Get Balance</button>
			<h4>Result</h4>
			<div>{JSON.stringify(result)}</div>
		</div>
		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	);
}

export default App;
