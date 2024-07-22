// @tabler/icons
import {
	IconLogout,
	IconQuestionMark,
	IconSortAscending,
	IconSortDescending,
} from "@tabler/icons-react";
//Components
import Movement from "../movement/movement";
import TransactionTotals from "../transactionTotals/transactionTotals";
import TransferMoney from "../transferMoney/transferMoney";
import LoanRequest from "../loan/loanRequest";
import Pocket from "../pockets/pocket";
import countdownTimer from "../countdownTimer/countdownTimer";
//mainboardViewModel
import mainboardViewModel from "./mainboardViewModel";
import CountdownTimer from "../countdownTimer/countdownTimer";

const Mainboard = ({
	allAccounts,
	onAllAccounts,
	curAccount,
	onCurAccount,
}) => {
	const { isSorted, sortMovements, calcTotals, curDate } = mainboardViewModel();
	const { tValue, inValue, outValue, interest } = calcTotals(curAccount);
	return (
		<div className="container">
			<div className="mainBoard_header">
				<div>
					<div className="avatar_container">
						<img src={curAccount.avatar} alt="avatar" />
					</div>
					<div>
						<p className="userName">
							Hello{" "}
							<span>
								{curAccount.owner.slice(0, curAccount.owner.indexOf(" "))}
							</span>
						</p>
						<p>As of {curDate(curAccount)}</p>
					</div>
				</div>
				<div className="header__icons">
					<div>
						<div className="display_inline">
							<IconQuestionMark className="icons" />
						</div>
						<div
							className="display_inline"
							onClick={() => onCurAccount((el) => (el = null))}
						>
							<IconLogout className="icons" />
						</div>
					</div>
					<div className="countdownTimer">
						<CountdownTimer onCurAccount={onCurAccount} />
					</div>
				</div>
			</div>
			<div>
				<TransactionTotals
					curAccount={curAccount}
					totals={[tValue, inValue, outValue, interest]}
				/>
			</div>

			<div className="dashboard_layout">
				<div className="cards overflow">
					<div
						className="display_inline"
						onClick={() =>
							sortMovements(onAllAccounts, allAccounts, curAccount)
						}
					>
						{!isSorted ? <IconSortDescending /> : <IconSortAscending />}
					</div>
					<div>
						{curAccount.movements.map((el, i) => (
							<Movement curAccount={curAccount} i={i} key={i} />
						))}
					</div>
				</div>
				<div className="dashboard_container">
					<div className="cards">
						<TransferMoney
							tValue={tValue}
							allAccounts={allAccounts}
							onAllAccounts={onAllAccounts}
							curAccount={curAccount}
							isSorted={isSorted}
						/>
					</div>
					<div className="cards">
						<LoanRequest
							tValue={tValue}
							curAccount={curAccount}
							allAccounts={allAccounts}
							onAllAccounts={onAllAccounts}
							isSorted={isSorted}
						/>
					</div>
					<div className="cards">
						<Pocket />
					</div>
				</div>
			</div>
		</div>
	);
};

export const Button = ({ children, onClick }) => {
	return (
		<button className="funtion__btn" onClick={() => onClick()}>
			{children}
		</button>
	);
};
export default Mainboard;
