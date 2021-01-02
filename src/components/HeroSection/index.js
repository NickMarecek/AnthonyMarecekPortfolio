import React, { useState } from "react";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElement";
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowDown,
	ArrowFillDown,
} from "./HeroElements";

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Forward Thinking. Design Focused.</HeroH1>
				<HeroP>Lets create something amazing</HeroP>
				<HeroBtnWrapper>
					<Button
						to="about"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="true"
						dark="true"
						smooth={true}
						duration={500}
						spy={true}
						offset={-80}
					>
						About Me {hover ? <ArrowFillDown /> : <ArrowDown />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
