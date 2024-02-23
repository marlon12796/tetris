import styled from 'styled-components';
import { Tile } from '../Tile';
import { useStore } from '../../store';

const Row = styled.div`
	height: 22px;
	width: 88px;
	float: right;
`;

export const NextPiece = () => {
	const store = useStore();
	return (
		<>
			<p>Next</p>
			{store.nextPiece.next.map((row, index) => (
				<Row key={index}>
					{row.map((cell, i2) => (
						<Tile key={i2} isFilled={Boolean(cell)} />
					))}
				</Row>
			))}
		</>
	);
};
