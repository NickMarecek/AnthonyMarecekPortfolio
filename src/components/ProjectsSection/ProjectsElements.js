import styled from "styled-components";

// ----------------------CARD OBJECT----------------------
export const CardItem = styled.li`
	display: flex;
	flex: 1;
	margin: 0 1rem;
	border-radius: 10px;

	@media only screen and (max-width: 1024px) {
		margin-bottom: 2rem;
	}
`;

export const CardItemLink = styled.a`
	display: flex;
	flex-flow: column;
	width: 100%;
	box-shadow: 0 6px 20px rgba(57, 253, 155, 0.17);
	-webkit-filter: drop-shadow(0 6px 20px rgba(57, 253, 155, 0.017));
	filter: drop-shadow(0 6px 20px rgba(57, 253, 155, 0.017));
	border-radius: 10px;
	overflow: hidden;
	text-decoration: none;
`;

export const CardItemPicWrap = styled.figure`
	position: relative;
	width: 100%;
	padding-top: 67%;
	overflow: hidden;

	&::after {
		content: attr(data-category);
		position: absolute;
		bottom: 0;
		margin-left: 10px;
		padding: 6px 8px;
		max-width: calc((100%) - 60px);
		font-size: 12px;
		font-weight: 700;
		color: #010606;
		border-radius: 4px;
		background-color: #39fd9b;
		box-sizing: border-box;
	}
`;

export const CardItemImage = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: block;
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	object-fit: cover;
	transition: all 0.2s linear;

	&:hover {
		transform: scale(1.1);
	}
`;

export const CardItemInfo = styled.div`
	padding: 20px 30px 30px;
`;

export const CardItemText = styled.h5`
	color: #fff;
	font-size: 18px;
	line-height: 24px;
`;

//----------------------CARDS CONTAINER OBJECT----------------------
export const Cards = styled.div`
	padding: 2.5rem;
	background: #010606;
`;

export const CardsHeader = styled.h1`
	text-align: center;
	color: #fff;
`;

export const CardsContainer = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	max-width: 1120px;
	width: 90%;
	margin: 0 auto;
`;

export const CardsWrapper = styled.div`
	position: relative;
	margin: 50px 0 45px;
`;

export const CardsItems = styled.ul`
	margin-bottom: 24px;

	@media only screen and (min-width: 1024px) {
		display: flex;
	}
`;
