import { type SetState } from 'zustand';
import { MatrixUtil } from '../helpers';
import { Tile } from '../models/tile/tile';
import { TetrisState } from '.';

export interface MatrixSlice {
	matrix: Tile[];
	setMatrix: (matrix: Tile[]) => void;
	locked: boolean;
	setLocked: (locked: boolean) => void;
}

export function createMatrixSlice(set: SetState<TetrisState>): MatrixSlice {
	return {
		matrix: MatrixUtil.getStartBoard(),
		setMatrix: (newMatrix) => set({ matrix: newMatrix }),
		locked: true,
		setLocked: (locked) => set({ locked }),
	};
}
