import { type StoreApi } from 'zustand';
import { PieceUtil } from '../helpers';
import { TetrisState } from '.';
import { Piece } from '../models/piece/piece';

const pieceUtil = new PieceUtil();

export interface PieceSlice {
	pieceUtil: PieceUtil;
	currentPiece: Piece | null;
	nextPiece: Piece;
	hold: Piece;
	setCurrentPiece: (newPiece: Piece | null) => void;
	setNextPiece: (newPiece: Piece) => void;
	setPieceUtil: (pieceUtil: PieceUtil) => void;
}

export function createPieceSlice(set: StoreApi<TetrisState>['setState']) {
	return {
		pieceUtil,
		currentPiece: null,
		nextPiece: pieceUtil.getRandomPiece(),
		hold: pieceUtil.getNonePiece(),
		setCurrentPiece: (newPiece: Piece | null) => {
			set({ currentPiece: newPiece });
		},
		setNextPiece: (newPiece: Piece) => {
			set({ nextPiece: newPiece });
		},
		setPieceUtil: (pieceUtil: PieceUtil) => {
			set({ pieceUtil });
		},
	};
}
