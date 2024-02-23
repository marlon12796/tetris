import { HTMLAttributes } from 'react';
import { StyledButton } from './style';
import classNames from 'classnames';

export type ButtonProps = HTMLAttributes<HTMLDivElement> & {
	direction: 'up' | 'left' | 'right' | 'down';
};
export const ButtonSquare = (props: ButtonProps) => {
	const { direction } = props;
	return <StyledButton className={classNames({ [direction]: true })} {...props}></StyledButton>;
};
