import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Background = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	position: absolute;
	top: auto;
	left: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalWrapper = styled.div`
	width: 800px;
	height: 500px;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	background: #101522;
	color: #000;
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	z-index: 10;
	border-radius: 10px;
	@media screen and (max-width: 800px) {
		width: 80vw;
		height: 50vh;
	}
	@media screen and (max-width: 545px) {
		height: auto;
	}
`;

export const ModalImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px 0px 0px 10px;
	background: #fff;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	line-height: 1.8;
	color: #fff;

	@media screen and (max-width: 545px) {
		height: auto;
	}

	p {
		margin-bottom: 1rem;
		white-space: pre-line;
	}

	a {
		padding: 3px 24px;
		border-radius: 30px;
		background: #39fd9b;
		color: #010606;
		border: none;
		white-space: pre-line;

		&:hover {
			transition: all 0.2s ease-in-out;
			transform: scale(1.1);
			background: #fff;
		}
		@media screen and (max-width: 545px) {
			transform: scale(0.75);
		}
	}
`;
export const CloseModalButton = styled(FaTimes)`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
	color: #fff;
	@media screen and (max-width: 545px) {
		transform: scale(0.75);
	}
`;
