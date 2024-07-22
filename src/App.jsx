//React
import { useState } from "react";
// Components
import LoginPage from "./components/loginPage/loginPage";
import Mainboard from "./components/mainBoard/mainboard";
// data
import { accounts } from "./data/data";
// utils
import utils from "./utils/userUtils";

function App() {
	const { dataMods } = utils();
	const [allAccounts, setAllAccounts] = useState(dataMods(accounts));
	const [curAccount, setCurAccount] = useState(null);
	const accountExist = curAccount !== null;

	return (
		<div className="app_container">
			{!accountExist ? (
				<LoginPage
					allAccounts={allAccounts}
					curAccount={curAccount}
					onCurAccount={setCurAccount}
				/>
			) : (
				<Mainboard
					allAccounts={allAccounts}
					onAllAccounts={setAllAccounts}
					curAccount={allAccounts.find(
						(acc) => acc.username === curAccount.username
					)}
					onCurAccount={setCurAccount}
				/>
			)}
		</div>
	);
}

export default App;
