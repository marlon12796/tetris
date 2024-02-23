import classNames from 'classnames';
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useStore } from '../../store';

const PauseContainer = styled.div`
	width: 25px;
	height: 21px;
	background-position: -175px -75px;
	position: absolute;
	top: 2px;
	left: -12px;
	&.c {
		background-position: -150px -75px;
	}
`;

export const Music: FunctionComponent = () => {
	const store = useStore();

	return (
		<PauseContainer
			className={classNames({
				bg: true,
				c: !store.isSoundOn,
			})}
		/>
	);
};
