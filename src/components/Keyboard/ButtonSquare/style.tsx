import styled from 'styled-components';

export const StyledButton = styled.div`
	background: rgb(4, 3, 8);
	border: 3px solid rgb(4, 3, 8);
	box-shadow: rgba(0, 0, 0, 0.6) 2px 4px 3px;
	display: flex;

	&.up,
	&.left,
	&.right {
		border-top-color: rgb(119, 119, 119);
	}
	&.left {
		grid-area: left;
	}
	&.right {
		grid-area: right;
	}
	&.down {
		grid-area: down;
	}
	&.up {
		grid-area: up;
	}
`;
