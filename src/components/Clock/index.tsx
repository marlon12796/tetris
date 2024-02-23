import { useState } from 'react';
import classNames from 'classnames';
import useInterval from '../../hooks/useInterval';

const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0');

const getClockTimeArray = () => {
	const now = new Date();
	const hours = formatTimeUnit(now.getHours());
	const minutes = formatTimeUnit(now.getMinutes());
	const isEvenSecond = now.getSeconds() % 2 === 0;
	return [...hours.split(''), isEvenSecond ? 'colon-solid' : 'colon-faded', ...minutes.split('')];
};

export const Clock = () => {
	const [time, setTime] = useState<string[]>();

	useInterval(() => {
		setTime(getClockTimeArray());
	}, 1000);

	return (
		<div className='number'>
			{time?.map((sequence, index) => (
				<span
					key={index}
					className={classNames({
						bg: true,
						num: true,
						[`num-${sequence}`]: true,
					})}
				/>
			))}
		</div>
	);
};
