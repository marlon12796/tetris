import { StyledEM, StyledP, View } from '../style';
import { TilesRow } from './TilesRow';

export const ContentView = ({ className }: { className: string }) => (
	<View className={className}>
		<TilesRow count={1} isFilled />
		<TilesRow count={2} isFilled />
		<StyledEM />
		<TilesRow count={1} isFilled />
		<StyledP />
		<StyledEM />
		<TilesRow count={1} isFilled />
		<TilesRow count={2} isFilled />
		<StyledEM />
		<TilesRow count={1} isFilled />
		<StyledP />
		<TilesRow count={4} isFilled />
		<StyledP />
		<TilesRow count={1} isFilled />
		<TilesRow count={2} isFilled />
		<TilesRow count={1} isFilled />
		<StyledP />
		<TilesRow count={2} isFilled />
		<TilesRow count={1} isFilled />
		<TilesRow count={1} isFilled />
		<StyledP />
		<StyledEM />
		<TilesRow count={1} isFilled />
		<StyledEM />
		<TilesRow count={1} isFilled />
		<StyledEM />
		<TilesRow count={1} isFilled />
		<StyledEM />
		<TilesRow count={1} isFilled />
	</View>
);
