import styled from "styled-components";

export const LinkContainer = styled.div`
	background: #010606;
	width: 100%;
	max-width: 100vw;
	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const LinkWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 200px;
	width: 100%;
	max-width: 100vw;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const LinkHeader = styled.h1`
	/* margin-bottom: 24px; */
	max-height: 50px;
	font-size: 40px;
	line-height: 1.1;
	font-weight: 600;
	color: #f7f8fa;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const IconContainer = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	width: 100%;
`;

export const Icon1 = styled.li`
	height: 90%;
	/* padding-right: 18%; */
	width: 25%;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.1);
	}
`;
export const Icon2 = styled.li`
	height: 90%;
	/* padding-right: 18%; */
	width: 25%;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.1);
	}
`;
export const Icon3 = styled.li`
	height: 90%;
	/* padding-right: 18%; */
	width: 25%;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.1);
	}
`;
export const Icon4 = styled.li`
	height: 90%;
	width: 25%;

	&:hover {
		transition: all 0.2s ease-in-out;
		transform: scale(1.1);
	}
`;
