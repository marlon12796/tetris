import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number | null) => {
	const savedCallback = useRef(callback);

	useEffect(() => {
		// Don't schedule if no delay is specified.
		// Note: 0 is a valid value for delay.
		if (!delay && delay !== 0) return;
		const id = setInterval(() => savedCallback.current(), delay);

		return () => {
			clearInterval(id);
		};
	}, [delay]);
};

export default useInterval;
