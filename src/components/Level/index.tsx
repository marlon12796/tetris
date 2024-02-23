import { Number } from '../Number';
import { useStore } from '../../store';

export const Level= () => {
	const store = useStore();
	return (
		<>
			<p>Level</p>
			<Number number={store.initNumberOfLines} length={1} />
		</>
	);
};
