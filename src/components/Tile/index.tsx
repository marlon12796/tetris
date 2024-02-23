import classNames from 'classnames';
import { StyledTile } from './style';
interface TileProps {
	isFilled?: boolean;
	isSolid?: boolean;
	isAnimated?: boolean;
}

export const Tile = ({ isAnimated = false, isFilled = false, isSolid = false }: TileProps) => {
	return (
		<StyledTile
			className={classNames({
				filled: isFilled || isSolid,
				animated: isAnimated,
			})}
		/>
	);
};
