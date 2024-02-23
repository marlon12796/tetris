import { Tile } from '../../Tile';

interface TilesRowProps {
	count: number;
	isFilled: boolean;
}

export const TilesRow = ({ count, isFilled }: TilesRowProps) => (
	<>
		{new Array(count).fill(null).map((_, index) => (
			<Tile isFilled={isFilled} key={index} />
		))}
		<div className='clear'></div>
	</>
);
