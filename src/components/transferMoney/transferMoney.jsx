import { IconTrendingDown2 } from "@tabler/icons-react";
import { Button } from "../mainBoard/mainboard";
import { useState } from "react";

import transferMoneyViewModel from "./transferMoneyViewModel";

const TransferMoney = ({
	tValue,
	allAccounts,
	onAllAccounts,
	curAccount,
	isSorted,
}) => {
	const [recipientAcc, setRecipientAcc] = useState("");
	const [transferredAmount, setTransferredAmount] = useState("");
	const { handleSubmit } = transferMoneyViewModel();

	return (
		<div>
			<p>Transfer money</p>
			<div className="funtion__input--form">
				<div className="function__input-container">
					<input
						className="function__input"
						type="text"
						value={recipientAcc}
						onChange={(e) => setRecipientAcc(e.target.value)}
					/>
					<p>Transfer to</p>
				</div>
				<div className="function__input-container">
					<input
						className="function__input"
						type="number"
						value={transferredAmount}
						onChange={(e) => setTransferredAmount(+e.target.value)}
					/>
					<p>Amount</p>
				</div>
				<Button
					onClick={() =>
						handleSubmit(
							recipientAcc,
							setRecipientAcc,
							transferredAmount,
							setTransferredAmount,
							tValue,
							allAccounts,
							onAllAccounts,
							curAccount,
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

export default TransferMoney;
