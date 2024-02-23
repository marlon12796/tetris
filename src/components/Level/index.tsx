import { FunctionComponent } from 'react';
import { Number } from '../Number';
import { useStore } from '../../store';

export const Level: FunctionComponent = () => {
	const store = useStore();
	return (
		<>
			<p>Level</p>
			<Number number={store.initNumberOfLines} length={1} />
		</>
	);
};
