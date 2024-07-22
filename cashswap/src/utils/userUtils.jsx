const utils = () => {
	const dataMods = (userData) => {
		return userData.map((el) => {
			const updatedUser = {
				...el,
				movements: [...el.movements].reverse(),
				movementsDates: [...el.movementsDates].reverse(),
			};

			updatedUser.username = el.owner
				.split(" ")
				.map((name) => name[0].toLowerCase())
				.join("");

			return updatedUser;
		});
	};

	const formatCurrency = (locale, currency, number) => {
		const intlNumber = new Intl.NumberFormat(locale, {
			style: "currency",
			currency: currency,
		}).format(number.toFixed(2));

		return intlNumber;
	};

	const formatDate = (dateString, locale) => {
		const calcDaysPassed = (date1, date2) => {
			return Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
		};
		const daysPassed = calcDaysPassed(new Date(), new Date(dateString));

		if (daysPassed === 0) return "Today";
		if (daysPassed === 1) return "Yesterday";
		if (daysPassed <= 7) return `${daysPassed} days ago`;
		return new Intl.DateTimeFormat(locale).format(new Date(dateString));
	};

	return {
		dataMods,
		formatDate,
		formatCurrency,
	};
};

export default utils;
