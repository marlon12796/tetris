import { StyledSpanL, TopBorder } from '../style';

export const BorderDecoration = () => (
	<TopBorder>
		{[...Array(5)].map((_, index) => (
			<StyledSpanL className='mr-10' key={index} />
		))}
		{[...Array(5)].map((_, index) => (
			<span className='r ml-10' key={`r-${index}`}></span>
		))}
	</TopBorder>
);
