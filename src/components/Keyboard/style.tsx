import styled from 'styled-components';

export const KeyboardContainer = styled.div`
	width: 92%;
	margin-inline: auto;
	height: 330px;
	position: relative;
	display: grid;
	margin-block-start: 1em;
`;
export const ArrowsContainer = styled.div`
	width: 230px;
	background-image: linear-gradient(rgba(0, 0, 0, 0.1) -10%, rgba(0, 0, 0, 0.004) 130%);
	display: grid;
	padding: 20px;
	position: relative;
	inset-block-start: 8%;
	aspect-ratio: 1/1;
	border-radius: 50%;
	background-color: #f7f7f7;
	margin-inline-start: auto;
	grid-template-areas:
		'. up .'
		'left center right'
		'. down .';
`;
