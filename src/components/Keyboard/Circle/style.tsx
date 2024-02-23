import styled from 'styled-components';

export const StyledButton = styled.div`
	border-width: 1px 1px 0px 0px;
	border-top-style: solid;
	border-right-style: solid;
	border-top-color: rgb(17, 17, 17);
	border-right-color: rgb(17, 17, 17);
	background: conic-gradient(
		rgba(255, 255, 255, 0.01) 0deg,
		rgba(255, 255, 255, 0.01) 30%,
		rgba(255, 255, 255, 0.4) 40%,
		rgba(255, 255, 255, 0.4) 60%,
		rgba(255, 255, 255, 0.02) 70%
	);
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border-left-style: initial;
	border-left-color: initial;
	border-bottom-style: initial;
	border-bottom-color: initial;
	border-image: initial;
`;
export const ContainerCircle = styled.div`
	background: rgb(4, 3, 8);
	border: 3px solid rgb(4, 3, 8);
	box-shadow: rgba(0, 0, 0, 0.6) 2px 4px 3px;
	display: flex;
	grid-area: center;
`;
