//@tabler icons
import { IconTrendingDown2 } from "@tabler/icons-react";
// Components
import { Button } from "../mainBoard/mainboard";
// React
import { useState } from "react";

// loanRequestViewModel
import loanRequestViewModel from "./loanRequestViewModel";

const LoanRequest = ({
	tValue,
	curAccount,
	allAccounts,
	onAllAccounts,
	isSorted,
}) => {
	const [loanAmount, setLoanAmount] = useState("");
	const { handleSubmit } = loanRequestViewModel();
	return (
		<div>
			<p>Loan</p>
			<div className="funtion__input--form">
				<div className="function__input-container">
					<input
						className="function__input"
						value={loanAmount}
						onChange={(e) => setLoanAmount(+e.target.value)}
						type="number"
					/>
					<p>Amount</p>
				</div>
				<Button
					onClick={() =>
						handleSubmit(
							loanAmount,
							setLoanAmount,
							tValue,
							curAccount,
							allAccounts,
							onAllAccounts,
							isSorted
						)
					}
				>
					<IconTrendingDown2 />
				</Button>
			</div>
		</div>
	);
};

export default LoanRequest;
