const transferMoneyViewModel = () => {
	const handleSubmit = (
		recipientAcc,
		setRecipientAcc,
		transferredAmount,
		setTransferredAmount,
		tValue,
		allAccounts,
		onAllAccounts,
		curAccount,
		isSorted
	) => {
		//Invalid Input
		if (
			recipientAcc === "" ||
			transferredAmount === "" ||
			transferredAmount < 1
		) {
			alert("Invalid Input");
			return;
		}

		// Invalid amounts
		if (transferredAmount > tValue) {
			alert("Invalid Amount");
			return;
		}

		//Finding recipient account
		const accExist = allAccounts.find((acc) => acc?.username === recipientAcc);

		if (accExist && recipientAcc !== curAccount.username) {
			onAllAccounts(
				allAccounts.map((acc) => {
					if (acc.username === recipientAcc) {
						return {
							...acc,
							movements: [transferredAmount, ...acc.movements],
							movementsDates: [new Date(), ...acc.movementsDates],
						};
					}
					if (acc.username === curAccount.username) {
						return !isSorted
							? {
									...acc,
									movements: [-transferredAmount, ...acc.movements],
									movementsDates: [new Date(), ...acc.movementsDates],
							  }
							: {
									...acc,
									movements: [...acc.movements, -transferredAmount],
									movementsDates: [...acc.movementsDates, new Date()],
							  };
					}
					return acc;
				})
			);
			setRecipientAcc("");
			setTransferredAmount("");
		} else {
			alert("Invalid Account");
		}
	};

	return {
		handleSubmit,
	};
};

export default transferMoneyViewModel;
