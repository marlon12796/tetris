import { MatrixUtil } from '../helpers';
import { type TetrisState } from '../store';

export const doesCollideBottom = (state: TetrisState) => {
	if (state.currentPiece && state.currentPiece.bottomRow >= MatrixUtil.HEIGHT) return true;
	return doesCollide(state);
};

export const doesCollideLeft = (state: TetrisState) => {
	if (state.currentPiece && state.currentPiece.leftCol < 0) return true;
	return doesCollide(state);
};

export const doesCollideRight = (state: TetrisState) => {
	if (state.currentPiece && state.currentPiece.rightCol >= MatrixUtil.WIDTH) return true;
	return doesCollide(state);
};

export const doesCollide = (state: TetrisState) => {
	return state.currentPiece?.positionOnGrid.some((position) => state.matrix[position].isSolid) ?? false;
};
