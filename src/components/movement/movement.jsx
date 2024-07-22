import utils from "../../utils/userUtils";

const Movement = ({ curAccount, i }) => {
	const { formatDate, formatCurrency } = utils();
	const { locale, currency, movements, movementsDates } = curAccount;

	return (
		<div className="movement">
			<div className="movement_type">
				<p>{formatDate(movementsDates[i], locale)}</p>
				<p>{movements[i] > 0 ? "Deposit".padStart(8, "") : "Withdraw"}</p>
			</div>
			<p className="movement_amount">
				{formatCurrency(locale, currency, movements[i])}
			</p>
		</div>
	);
};

export default Movement;
