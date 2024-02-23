import { useStore } from '../../store';
import { Number } from '../Number';

export const Point = () => {
	const store = useStore();
	return (
		<div>
			<p>Point</p>
			<Number number={store.point} />
		</div>
	);
};
