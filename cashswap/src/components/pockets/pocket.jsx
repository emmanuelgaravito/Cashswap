import { IconTrendingDown2 } from "@tabler/icons-react";
import { Button } from "../mainBoard/mainboard";

const Pocket = () => {
	const anyFunction = () => {
		alert("Yeah!!!!!!!!!!!!!!");
	};
	return (
		<div>
			<p>Pocket</p>
			<div className="funtion__input--form">
				<div className="function__input-container">
					<input className="function__input" type="text" />
					<p>Pocket</p>
				</div>
				<div className="function__input-container">
					<input className="function__input" type="number" />
					<p>Amount</p>
				</div>
				<Button onClick={anyFunction}>
					<IconTrendingDown2 />
				</Button>
			</div>
		</div>
	);
};

export default Pocket;
