const loginPageViewModel = () => {
	const handleSubmit = (e, allAccounts, onCurAccount, user, password) => {
		e.preventDefault();
		const accessedIndex = allAccounts.findIndex((el) => el.username === user);

		if (allAccounts[accessedIndex]?.pin === +password) {
			onCurAccount(allAccounts[accessedIndex]);
		} else {
			alert("Incorrect username or password");
		}
	};

	return {
		handleSubmit,
	};
};

export default loginPageViewModel;
