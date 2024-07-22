// React
import { useState, useEffect } from "react";

const CountdownTimer = ({ onCurAccount }) => {
	const [time, setTime] = useState(600); // 600 seconds = 10 minutes

	useEffect(() => {
		if (time > 0) {
			const timerId = setTimeout(() => setTime(time - 1), 1000);
			return () => clearTimeout(timerId); // Cleanup function to clear the timeout
		}
	}, [time]);

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	};

	if (time === 0) onCurAccount(null);

	return (
		<div>
			<p>
				<span>logged out in </span>
				{formatTime(time)}
			</p>
		</div>
	);
};

export default CountdownTimer;
