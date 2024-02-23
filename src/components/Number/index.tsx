import classNames from 'classnames';
import { StyledNumber } from './style';

interface NumberProps {
	number: number;
	length?: number;
}

export const Number = ({ number, length = 6 }: NumberProps) => {
	return (
		<StyledNumber className='number'>
			{number
				.toString()
				.padStart(length, 'n')
				.split('')
				.map((sequence, index) => (
					<span
						key={index}
						className={classNames({
							bg: true,
							num: true,
							[`num-${sequence}`]: true,
						})}
					/>
				))}
		</StyledNumber>
	);
};
