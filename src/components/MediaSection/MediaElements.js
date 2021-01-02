import styled from "styled-components";

export const MediaContainer = styled.div`
	color: #fff;
	display: grid;
	/* grid-auto-columns: minmax(auto, 1fr); */
	align-items: column;
	/* grid-template-areas: "title" "slider"; */

	background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
	/* @media screen and (max-width: 768px) {
		padding: 100px 0;
	} */
`;

export const MediaWrapper = styled.div`
	display: flex;
	height: 20px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;
	margin-bottom: 15px;
	padding-bottom: 15px;
	/* grid-area: title; */
`;

export const HeaderSection = styled.h1`
	margin-top: 40px;
	font-size: 25px;

	@media screen and (max-width: 480px) {
		font-size: 15px;
	}
	@media screen and (max-width: 290px) {
		font-size: 12px;
	}
`;

export const SliderWrapper = styled.div`
	display: flex;
	height: 889px;
	width: 90vw;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;
`;
