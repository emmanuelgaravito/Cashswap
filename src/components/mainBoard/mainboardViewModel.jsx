import React, { useState } from "react";
const mainboardViewModel = () => {
	const [isSorted, setIsSorted] = useState(false);

	const sortMovements = (onAllAccounts, allAccounts, curAccount) => {
		onAllAccounts(
			allAccounts.map((acc) => {
				if (acc.username === curAccount.username) {
					return {
						...acc,
						movements: [...acc.movements].reverse(),
						movementsDates: [...acc.movementsDates].reverse(),
					};
				}
				return acc;
			})
		);
		setIsSorted(!isSorted);
	};

	// Amounts
	const calcTotals = (curAccount) => {
		return {
			tValue: curAccount.movements.reduce((acc, mov) => acc + mov, 0),
			inValue: curAccount.movements.reduce((acc, el) => {
				return el > 0 ? acc + el : acc;
			}, 0),
			outValue: curAccount.movements.reduce((acc, el) => {
				return el < 0 ? acc + el : acc;
			}, 0),
			interest: curAccount.movements
				.filter((val) => val > 0)
				.map((val) => (val * curAccount.interestRate) / 100)
				.filter((val) => val >= 1)
				.reduce((acc, el) => {
					return acc + el;
				}, 0),
		};
	};

	const curDate = (curAccount) => {
		const options = {
			hour: "numeric",
			minute: "numeric",
			day: "numeric",
			month: "numeric",
			year: "numeric",
		};
		return new Intl.DateTimeFormat(curAccount.locale, options).format(
			new Date()
		);
	};

	return {
		isSorted,
		sortMovements,
		calcTotals,
		curDate,
	};
};

export default mainboardViewModel;
