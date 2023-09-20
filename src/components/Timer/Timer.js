import styles from './Timer.module.scss';

const Timer = ({ time }) => {
	return <p className={styles.timer}>{time}</p>;
};

export default Timer;
