import { HTMLAttributes } from 'react';
import { StyledButton } from './style';
import classNames from 'classnames';

export type ButtonProps = HTMLAttributes<HTMLDivElement> & {
	direction: 'up' | 'left' | 'right' | 'down';
	active: 'true' | 'false';
};
export const ButtonSquare = (props: ButtonProps) => {
	const { direction, active } = props;
	return <StyledButton className={classNames(direction, { active: active === 'true' })} {...props}></StyledButton>;
};
