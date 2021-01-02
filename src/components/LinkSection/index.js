import React from "react";
import { GrLinkedin, GrYoutube, GrInstagram, GrTwitter } from "react-icons/gr";
import {
	LinkContainer,
	LinkWrapper,
	LinkHeader,
	IconContainer,
	Icon1,
	Icon2,
	Icon3,
	Icon4,
} from "./LinkElements";

const LinkSection = () => {
	return (
		<>
			<LinkContainer id={"links"}>
				<LinkWrapper>
					<LinkHeader>Check out some of my links</LinkHeader>
					<IconContainer>
						<Icon1>
							<a
								href="https://www.linkedin.com/in/anthony-marecek-b95555201/"
								target="https://www.linkedin.com/in/anthony-marecek-b95555201/"
							>
								<GrLinkedin size={56} color={"white"} />
							</a>
						</Icon1>
						<Icon2>
							<a
								href="https://www.instagram.com/_valuevintage_/"
								target="https://www.instagram.com/_valuevintage_/"
							>
								<GrInstagram size={56} color={"white"} />
							</a>
						</Icon2>
						<Icon3>
							<a
								href="https://www.youtube.com/channel/UCrymMqa7o_W22ykTV5ghXFg"
								target="https://www.youtube.com/channel/UCrymMqa7o_W22ykTV5ghXFg"
							>
								<GrYoutube size={56} color={"white"} />
							</a>
						</Icon3>
						<Icon4>
							<a
								href="https://www.linkedin.com/in/anthony-marecek-b95555201/"
								target="https://www.linkedin.com/in/anthony-marecek-b95555201/"
							>
								<GrTwitter size={56} color={"white"} />
							</a>
						</Icon4>
					</IconContainer>
				</LinkWrapper>
			</LinkContainer>
		</>
	);
};

export default LinkSection;
