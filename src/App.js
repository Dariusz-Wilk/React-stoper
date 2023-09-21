import './styles/global.scss';
import './styles/typography.scss';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import { useState } from 'react';
// import { useEffect } from 'react';

const App = () => {
	const [time, setTime] = useState(0);

	// ========================================
	// ===== ver. with no UseEffect ===========
	// ========================================

	const [timer, setTimer] = useState(setInterval(() => {}, 100));
	const [isRunning, setIsRunning] = useState(false);

	const handleStart = () => {
		if (!isRunning) {
			setIsRunning(true);
			setTimer(
				setInterval(() => {
					setTime(prevTime => prevTime + 100);
				}, 100)
			);
		}
	};

	const handleStop = () => {
		clearInterval(timer);
		setIsRunning(false);
	};

	const handleReset = () => {
		clearInterval(timer);
		setTime(0);
		setIsRunning(false);
	};

	// =========================================
	//========== USEEFFECT version =============
	//==========================================

	// const [timer, setTimer] = useState(false);

	// useEffect(() => {
	// 	let intervalTimer;
	// 	//code on start
	// 	if (timer) {
	// 		intervalTimer = setInterval(() => {
	// 			setTime(prevTime => prevTime + 100);
	// 		}, 100);
	// 	}
	// 	return () => {
	// 		//code on the end component live
	// 		if (intervalTimer) {
	// 			clearInterval(intervalTimer);
	// 		}
	// 	};
	// }, [timer]);

	// const handleStart = () => {
	// 	setTimer(true);
	// };

	// const handleStop = () => {
	// 	setTimer(false);
	// };

	// const handleReset = () => {
	// 	setTimer(false);
	// 	setTime(0);
	// };

	return (
		<div>
			<h1 className="header1">Stoper App</h1>
			<Timer time={time} />
			<section className="center">
				<Button type="button" onClick={handleStart}>
					Start
				</Button>
				<Button type="button" onClick={handleStop}>
					Stop
				</Button>
				<Button type="button" onClick={handleReset}>
					Reset
				</Button>
			</section>
		</div>
	);
};

export default App;
