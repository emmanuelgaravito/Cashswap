const account1 = {
	owner: "Michael Newman",
	movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
	interestRate: 1.2, // %
	pin: 1111,

	movementsDates: [
		"2022-11-18T21:31:17.178Z",
		"2022-12-23T07:42:02.383Z",
		"2023-01-28T09:15:04.904Z",
		"2023-04-01T10:17:24.185Z",
		"2023-05-08T14:11:59.604Z",
		"2023-10-05T17:01:17.194Z",
		"2023-11-10T23:36:17.929Z",
		"2023-11-14T10:51:36.790Z",
	],
	currency: "EUR",
	locale: "pt-PT", // de-DE
	avatar:
		"https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,

	movementsDates: [
		"2022-11-01T13:15:33.035Z",
		"2022-11-30T09:48:16.867Z",
		"2022-12-25T06:04:23.907Z",
		"2023-01-25T14:18:46.235Z",
		"2023-02-05T16:33:06.386Z",
		"2023-04-10T14:43:26.374Z",
		"2023-06-25T18:49:59.371Z",
		"2023-07-26T12:01:20.894Z",
	],
	currency: "USD",
	locale: "en-US",
	avatar:
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const accounts = [account1, account2];
