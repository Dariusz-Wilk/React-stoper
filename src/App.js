import './styles/global.scss';
import './styles/typography.scss';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';
import { useEffect, useState } from 'react';

const App = () => {
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(false);

	useEffect(() => {
		//code on start
		if (timer) {
			const intervalTimer = setInterval(() => {
				setTime(prevTime => prevTime + 100);
			}, 100);

			return () => {
				//code on the end
				clearInterval(intervalTimer);
			};
		}
	});

	const handleStart = () => {
		setTimer(true);
	};

	const handleStop = () => {
		setTimer(false);
	};

	const handleReset = () => {
		setTimer(false);
		setTime(0);
	};

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
