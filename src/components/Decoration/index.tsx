import { StyledH1 } from './style';

import { BorderDecoration } from './View/BorderDecoration';
import { ContentView } from './View/DecorationView';

export const Decoration = () => {
	return (
		<>
			<BorderDecoration />
			<StyledH1>React Tetris</StyledH1>

			<ContentView className='r' />
			<ContentView className='l' />
		</>
	);
};
