import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import { StyledButton } from './style';

export type ButtonProps = HTMLAttributes<HTMLDivElement> & {
	color: 'red' | 'green' | 'blue';
	size: 'btn-lg' | 'btn-sm' | 'btn-md';
	top: number;
	left: number;
	active: boolean;
	label: string;
	arrow?: string;
	isPositionAbsolute?: boolean;
};
export const Button = ({ color, size, top, left, label, active, isPositionAbsolute, arrow, ...props }: ButtonProps) => {
	return (
		<StyledButton
			className={classNames({ button: true, [color]: true, [size]: true })}
			style={{ top: `${top}px`, left: `${left}px` }}
			{...props}
		>
			<i className={classNames({ active })} />
			{size === 'btn-md' ? <em style={{ transform: `${arrow} scale(1, 2)` }} /> : null}
			<span className={classNames({ absolute: isPositionAbsolute })}>{label}</span>
		</StyledButton>
	);
};
