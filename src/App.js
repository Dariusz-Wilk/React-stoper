import './styles/global.scss';
import './styles/typography.scss';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';

function App() {
	return (
		<div>
			<h1 className="header1">Stoper App</h1>
			<Timer />
			<section className="center">
				<Button type="button">Start</Button>
				<Button type="button">Stop</Button>
				<Button type="button">Reset</Button>
			</section>
		</div>
	);
}

export default App;
