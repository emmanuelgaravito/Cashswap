// Helpers
import utils from "../../utils/userUtils";

const TransactionTotals = ({ curAccount, totals }) => {
	const { formatCurrency } = utils();
	const { locale, currency } = curAccount;
	const [tValue, inValue, outValue, interest] = totals;

	return (
		<>
			<div className="totals_mainContainer">
				<div className="totals_stats">
					<p>
						<span>In </span>
						{formatCurrency(locale, currency, inValue)}
					</p>
					<p>
						<span>Out </span>
						{formatCurrency(locale, currency, Math.abs(outValue))}
					</p>
					<p>
						<span>Interest </span>
						{formatCurrency(locale, currency, interest)}
					</p>
				</div>
				<div>
					<p className="totalAmount">
						{formatCurrency(locale, currency, tValue)}
					</p>
				</div>
			</div>
		</>
	);
};

export default TransactionTotals;
