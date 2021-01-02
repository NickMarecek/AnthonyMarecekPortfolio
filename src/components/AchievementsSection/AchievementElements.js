import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	height: 80vh;
	background: #010606;
	@media screen and (max-width: 495px) {
		height: auto;
	}
`;

export const AchievementHeader = styled.h1`
	margin-top: 40px;
	margin-bottom: 20px;
	text-align: center;
	color: #fff;
`;

export const ModalButton = styled.button`
	border-radius: 5px;
	width: 60vw;
	text-align: center;
	background: #39fd9b;
	white-space: pre-line;
	padding: 10px 22px;
	margin-top: 20px;
	margin-bottom: 20px;
	color: #010606;
	font-size: 18px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.025);
		background: #fff;
		color: #010606;
	}
`;

export const ModalGrid = styled.div`
	display: grid;
`;
