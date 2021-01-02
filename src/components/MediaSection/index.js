import React from "react";
import ImageSlider from "./imageSlider/imageSlider";
import { sliderData } from "./imageSlider/sliderData";
import {
	MediaContainer,
	SliderWrapper,
	MediaWrapper,
	HeaderSection,
} from "./MediaElements";

const MediaSection = () => {
	return (
		<>
			<MediaContainer id={"media"}>
				<MediaWrapper>
					<HeaderSection>Browse Some Of My Photography</HeaderSection>
				</MediaWrapper>
				<SliderWrapper>
					<ImageSlider slides={sliderData} />
				</SliderWrapper>
			</MediaContainer>
		</>
	);
};

export default MediaSection;
