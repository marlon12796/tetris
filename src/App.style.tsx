import styled from 'styled-components';
import { Colors } from './helpers';

export const Container = styled.div`
	width: 640px;
	padding-top: 40px;
	background-image: linear-gradient(transparent 93%, rgba(0, 0, 0, 0.2) 99%, rgba(0, 0, 0, 0.4) 88%);
	box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px, rgba(0, 0, 0, 0.25) 0px 0px 25px inset,
		rgba(0, 0, 0, 0.8) -2px -2px 10px inset, rgba(0, 0, 0, 0.75) 0px 0px 15px inset;
	border-radius: 12px 12px 75px;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -480px 0 0 -320px;
	background-color: ${Colors.main};
`;

export const Rect = styled.div`
	width: 480px;
	padding: 45px 0 35px;
	border: ${Colors.black} solid;
	background-color: rgb(118, 113, 137);
	box-shadow: rgb(81, 76, 101) 0px 0px 2px;
	border-radius: 10px 10px 35px;
	border-width: 0 10px 10px;
	margin: 0 auto;
	position: relative;
	&.drop {
		-webkit-transform: translateY(5px);
		transform: translateY(5px);
	}
`;

export const ScreenContainer = styled.div`
	width: 390px;
	height: 478px;
	border: solid 5px;
	border-color: #f7f7f7b3;
	margin: 0 auto;
	position: relative;
`;

export const Panel = styled.div`
	width: 380px;
	height: 468px;
	margin: 0 auto;
	background: #9ead86;
	padding: 8px;
	border: 2px solid #494536;
`;

export const StateContainer = styled.div`
	width: 108px;
	position: absolute;
	top: 0;
	right: 15px;
	p {
		line-height: 47px;
		height: 57px;
		padding: 10px 0 0;
		white-space: nowrap;
		clear: both;
	}
	.bottom {
		position: absolute;
		width: 114px;
		top: 426px;
		left: 0;
	}
`;
