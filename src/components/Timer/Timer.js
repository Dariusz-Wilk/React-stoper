import styles from './Timer.module.scss';

const Timer = ({ time }) => {
	Math.floor();
	const hours = Math.floor((time / 1000 / 60 / 60) % 60)
		.toString()
		.padStart(2, '0');
	const mins = Math.floor((time / 1000 / 60) % 60)
		.toString()
		.padStart(2, '0');
	const secs = Math.floor((time / 1000) % 60)
		.toString()
		.padStart(2, '0');
	const msec = Math.floor((time / 100) % 10);

	return (
		<p className={styles.timer}>
			{hours}:{mins}:{secs}.{msec}
		</p>
	);
};

export default Timer;
