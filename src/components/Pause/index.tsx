import classNames from 'classnames';
import { useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../../store';
import useInterval from '../../hooks/useInterval';
import { GameStatus } from '../../models/gameStatus';

const PauseContainer = styled.div`
	width: 20px;
	height: 18px;
	background-position: -100px -75px;
	position: absolute;
	top: 3px;
	left: 18px;
	&.c {
		background-position: -75px -75px;
	}
`;

export const Pause = () => {
	const store = useStore();
	const [visible, setVisible] = useState<boolean>();

	useInterval(() => {
		setVisible((prev) => !prev);
	}, 500);

	return (
		<PauseContainer
			className={classNames({
				bg: true,
				c: visible && store.status === GameStatus.Paused,
			})}
		/>
	);
};
