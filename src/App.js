import logo from "./logo.svg";
import "./App.css";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { useState } from "react";

function App() {
	GoogleAuth.initialize({
		clientId:
			"426738143380-n76sjua1ilsg3qsdd74c3kio79treh40.apps.googleusercontent.com",
		scopes: ["profile", "email"],
		grantOfflineAccess: true,
	});

	const [user, setUser] = useState(null);
	const signIn = async () => {
		try {
			const user = await GoogleAuth.signIn();
			console.log(user.email);
			setUser(user.email);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<button onClick={signIn}>Sign In with Google</button>
				{user ? <p>{user}</p> : null}
			</header>
		</div>
	);
}

export default App;
