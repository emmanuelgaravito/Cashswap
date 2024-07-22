// @tabler-icons
import { IconEye } from "@tabler/icons-react";
import { IconEyeClosed } from "@tabler/icons-react";
// React
import { useState } from "react";
// Lottie
import Lottie from "react-lottie";
import mainAnimatedLogo from "../../lotties/json_logo.json";
// loginPageViewModel
import loginPageViewModel from "./loginPageViewModel";

const LoginPage = ({ allAccounts, curAccount, onCurAccount }) => {
	const [eyeIsOpen, setEyeIsOpen] = useState(false);
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const { handleSubmit } = loginPageViewModel();

	return (
		<div className="login_container">
			<form
				className="form_container"
				onSubmit={(e) =>
					handleSubmit(e, allAccounts, onCurAccount, user, password)
				}
			>
				<div className="mainLogo">
					<Lottie
						options={{
							loop: true,
							autoplay: true,
							animationData: mainAnimatedLogo,
							rendererSettings: {
								preserveAspectRatio: "xMidYMid slice",
							},
						}}
					/>
					<h2 className="helper_overlap">Cash$wap</h2>
				</div>
				<div>
					<p>Hello.</p>
					<p>Welcome back!</p>
				</div>
				<p>Sign in:</p>
				<div className="form_input--container">
					<label htmlFor="user">Username</label>
					<input
						id="user"
						name="user"
						type="text"
						placeholder="Enter username "
						value={user}
						onChange={(e) => setUser(e.target.value)}
					/>
				</div>
				<div className="form_input--container">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						name="password"
						type={!eyeIsOpen ? "password" : "text"}
						placeholder="********"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div onClick={() => setEyeIsOpen(!eyeIsOpen)} className="eye-icon">
						{!eyeIsOpen ? <IconEyeClosed /> : <IconEye />}
					</div>
				</div>
				<button className="margin-top">Login</button>
			</form>
		</div>
	);
};

export default LoginPage;
