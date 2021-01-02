import React from "react";
import {
	AboutContainer,
	AboutWrapper,
	AboutRow,
	Column1,
	Column2,
	TextWrapper,
	Heading,
	Subtitle,
	ImgWrap,
	Img,
} from "./AboutElements";

const AboutSection = ({
	lightBg,
	imgStart,
	lightText,
	headline,
	lightTextDesc,
	description,
	id,
	img,
	alt,
}) => {
	return (
		<>
			<AboutContainer lightBg={lightBg} id={id}>
				<AboutWrapper>
					<AboutRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</AboutRow>
				</AboutWrapper>
			</AboutContainer>
		</>
	);
};

export default AboutSection;
