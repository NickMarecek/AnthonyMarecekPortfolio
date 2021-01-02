import styled from "styled-components";

export const GlitchContainer = styled.div`
	min-height: 100vh;
	display: grid;
	place-items: center;
	color: white;
	font-family: sans-serif;
`;

export const Glitch = styled.p`
	font-size: 1.2rem;
	font-weight: 700;
	text-transform: uppercase;
	position: relative;
	/* use text shadows to create glitch effect */
	/* use em instead of px to make it scale dynamically with the text size */
	text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
		-0.025em -0.05em 0 rgba(0, 255, 74, 0.75),
		0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

	animation: glitch 500ms infinite;
	&.glitch span {
		position: absolute;
		top: 0;
		left: 0;
	}

	&.glitch span:first-child {
		animation: glitch 650ms infinite;
		clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
		transform: translate(-0.025em, -0.0125em);
		opacity: 0.8;
	}
	&.glitch span:last-child {
		animation: glitch 350ms infinite;
		clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
		transform: translate(0.0125em, 0.025em);
		opacity: 0.8;
	}

	/* add glitch animation */
	/* positions change at each stage of animation from 0-14, 15-49, 50-99 and 100*/
	@keyframes glitch {
		0% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.05em -0.025em 0 rgba(0, 255, 74, 0.75),
				-0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		14% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.05em -0.025em 0 rgba(0, 255, 74, 0.75),
				-0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		15% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 74, 0.75),
				-0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		49% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 74, 0.75),
				-0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		50% {
			text-shadow: 0.025em 0.05 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 74, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		99% {
			text-shadow: 0.025em 0.05 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 74, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		100% {
			text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.025em 0 rgba(0, 255, 74, 0.75),
				-0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
		}
	}
`;
