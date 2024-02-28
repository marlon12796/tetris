import { type StoreApi } from 'zustand';
import { Speed } from '../models/speed';
import { GameStatus } from '../models/gameStatus';
import { TetrisState } from '.';

export interface GameSlice {
	status: GameStatus;
	setGameStatus: (status: GameStatus) => void;
	speed: Speed;
	initSpeed: Speed;
	setSpeed: (speed: Speed) => void;
	isSoundOn: boolean;
	toggleSoundOn: () => void;
	numberOfClearedLines: number;
	setNumberOfClearedLines: (lines: number) => void;
	point: number;
	setPoint: (point: number) => void;
	initNumberOfLines: number;
	increaseInitNumberOfLines: () => void;
	decreaseInitNumberOfLines: () => void;
	paused: boolean;
	setPaused: (paused: boolean) => void;
	isResetting: boolean;
	setIsResetting: (isResetting: boolean) => void;
}

export function createGameSlice(set: StoreApi<TetrisState>['setState']): GameSlice {
	return {
		setGameStatus: (status) => set({ status }),
		status: GameStatus.Loading,
		speed: 1,
		initSpeed: 1,
		setSpeed: (speed) => set({ speed }),
		isSoundOn: true,
		toggleSoundOn: () => set((state: GameSlice) => ({ isSoundOn: !state.isSoundOn })),
		numberOfClearedLines: 0,
		setNumberOfClearedLines: (lines) =>
			set(() => ({
				numberOfClearedLines: lines,
			})),
		point: 0,
		setPoint: (addedPoints) => set((state: GameSlice) => ({ point: state.point + addedPoints })),
		initNumberOfLines: 0,
		increaseInitNumberOfLines: () => set((state: GameSlice) => ({ initNumberOfLines: state.initNumberOfLines + 1 })),
		decreaseInitNumberOfLines: () => set((state: GameSlice) => ({ initNumberOfLines: state.initNumberOfLines - 1 })),
		paused: false,
		setPaused: (paused) => set({ paused }),
		isResetting: true,
		setIsResetting: (isResetting) => set({ isResetting }),
	};
}
