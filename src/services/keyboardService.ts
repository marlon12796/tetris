import { GameStatus } from '../models/gameStatus';
import { type TetrisState } from '../store';
import { AudioService } from './audioService';
import { drop, moveDown, moveLeft, moveRight, pause, reset, resume, rotate, start } from './tetrisService';

export const spaceButtonClickHandler = (store: TetrisState) => {
	store.setKey({ isKeyDropActive: true });
	if (store.currentPiece) {
		drop(store);
		AudioService.fall(store.isSoundOn);
		return;
	}
	start(store);
	AudioService.start(store.isSoundOn);
};

export const arrowDownButtonClickHandler = (store: TetrisState) => {
	if (store.status === GameStatus.Started) {
		store.setKey({ isKeyDownActive: true });
		moveDown(store);
	} else if (store.status === GameStatus.Loading) {
		store.decreaseInitNumberOfLines();
	}
	AudioService.move(store.isSoundOn);
};

export const arrowLeftButtonClickHandler = (store: TetrisState) => {
	store.setKey({ isKeyLeftActive: true });
	moveLeft(store);
	AudioService.move(store.isSoundOn);
};

export const arrowRightButtonClickHandler = (store: TetrisState) => {
	store.setKey({ isKeyRightActive: true });
	moveRight(store);
	AudioService.move(store.isSoundOn);
};

export const arrowUpButtonClickHandler = (store: TetrisState) => {
	if (store.status === GameStatus.Started) {
		store.setKey({ isKeyUpActive: true });
		rotate(store);
		AudioService.rotate(store.isSoundOn);
	} else if (store.status === GameStatus.Loading) {
		store.increaseInitNumberOfLines();
	}
};

export const resetButtonClickHandler = (store: TetrisState) => {
	store.setKey({ isKeyResetActive: true });
	reset(store);
};

export const pauseButtonClickHandler = (store: TetrisState) => {
	store.setKey({ isKeyPauseActive: true });
	store.status !== GameStatus.Started ? resume(store) : pause(store);
};

export const soundButtonClickHandler = (store: TetrisState) => {
	store.setKey({ isKeySoundActive: true });
	store.toggleSoundOn();
};

export const keyDownEventHandler = (key: string, store: TetrisState) => {
	if (key === ' ') {
		spaceButtonClickHandler(store);
	} else if (key === 'ArrowDown') {
		arrowDownButtonClickHandler(store);
	} else if (key === 'ArrowLeft') {
		arrowLeftButtonClickHandler(store);
	} else if (key === 'ArrowRight') {
		arrowRightButtonClickHandler(store);
	} else if (key === 'ArrowUp') {
		arrowUpButtonClickHandler(store);
	} else if (key === 'r') {
		resetButtonClickHandler(store);
	} else if (key === 'p') {
		pauseButtonClickHandler(store);
	} else if (key === 's') {
		soundButtonClickHandler(store);
	}
};

export const keyUpEventHandler = (key: string, store: TetrisState) => {
	if (key === ' ') {
		store.setKey({ isKeyDropActive: false });
	} else if (key === 'ArrowDown') {
		store.setKey({ isKeyDownActive: false });
	} else if (key === 'ArrowLeft') {
		store.setKey({ isKeyLeftActive: false });
	} else if (key === 'ArrowRight') {
		store.setKey({ isKeyRightActive: false });
	} else if (key === 'ArrowUp') {
		store.setKey({ isKeyUpActive: false });
	} else if (key === 'r') {
		store.setKey({ isKeyResetActive: false });
	} else if (key === 'p') {
		store.setKey({ isKeyPauseActive: false });
	} else if (key === 's') {
		store.setKey({ isKeySoundActive: false });
	}
};
