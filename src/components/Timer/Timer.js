import styles from './Timer.module.scss';
import { useState } from 'react';

const Timer = () => {
	const [time, setTime] = useState('00:00:00.0');

	return <p className={styles.timer}>{time}</p>;
};

export default Timer;
