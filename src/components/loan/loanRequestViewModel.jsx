import { number } from "prop-types";

const loanRequestViewModel = () => {
	const handleSubmit = (
		loanAmount,
		setLoanAmount,
		tValue,
		curAccount,
		allAccounts,
		onAllAccounts,
		isSorted
	) => {
		//Invalid inputs
		if (
			typeof loanAmount !== "number" ||
			loanAmount > tValue ||
			loanAmount < 1
		) {
			alert("Invalid Amount");
			return;
		}

		if (!curAccount.movements.some((val) => val >= (loanAmount * 10) / 100)) {
			alert(
				"Loan request denied: Loan amount exceeds allowable limit based on average balance."
			);
			return;
		}

		setTimeout(() => {
			onAllAccounts(
				allAccounts.map((acc) => {
					if (curAccount.username === acc.username) {
						return !isSorted
							? {
									...acc,
									movements: [loanAmount, ...acc.movements],
									movementsDates: [new Date(), ...acc.movementsDates],
							  }
							: {
									...acc,
									movements: [...acc.movements, loanAmount],
									movementsDates: [...acc.movementsDates, new Date()],
							  };
					}
					return acc;
				})
			);
		}, 4 * 1000);

		setLoanAmount("");
	};

	return {
		handleSubmit,
	};
};

export default loanRequestViewModel;
