import { type StoreApi } from 'zustand';
import { TetrisState } from '.';
export interface KeyboardSlice {
	isKeyUpActive: boolean;
	isKeyDownActive: boolean;
	isKeyLeftActive: boolean;
	isKeyRightActive: boolean;
	isKeyPauseActive: boolean;
	isKeySoundActive: boolean;
	isKeyResetActive: boolean;
	isKeyDropActive: boolean;
	isKeyHoldActive: boolean;
	setKey: StoreApi<TetrisState>['setState'];
}

export function createKeyboardSlice(set: StoreApi<TetrisState>['setState']): KeyboardSlice {
	return {
		isKeyUpActive: false,
		isKeyDownActive: false,
		isKeyLeftActive: false,
		isKeyRightActive: false,
		isKeyPauseActive: false,
		isKeySoundActive: false,
		isKeyResetActive: false,
		isKeyDropActive: false,
		isKeyHoldActive: false,
		setKey: set,
	};
}
