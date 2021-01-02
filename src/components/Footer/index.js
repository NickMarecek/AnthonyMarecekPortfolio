import React from "react";
import {
	GrLinkedin,
	GrYoutube,
	GrInstagram,
	GrSoundcloud,
} from "react-icons/gr";
import { animateScroll } from "react-scroll";
import Logo from "../Logo/Logo";
import {
	FooterContainer,
	FooterWrap,
	FooterLinkContainer,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";

const toggleHome = () => {
	animateScroll.scrollToTop();
};

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinkContainer>
					<SocialMedia>
						<SocialMediaWrap>
							<SocialLogo to="/" onClick={toggleHome}>
								<Logo />
							</SocialLogo>
							<WebRights>
								Copyright © {new Date().getFullYear()} Anthony Marecek, Nicholas
								Marecek. All Rights Reserved.
							</WebRights>
							<SocialIcons>
								<SocialIconLink
									href="https://www.linkedin.com/in/josef-marecek-b95555201/"
									target="https://www.linkedin.com/in/josef-marecek-b95555201/"
									aria-label="Linkedin"
								>
									<GrLinkedin />
								</SocialIconLink>
								<SocialIconLink
									href="https://www.instagram.com/_valuevintage_/"
									target="https://www.instagram.com/_valuevintage_/"
									aria-label="Instagram"
								>
									<GrInstagram />
								</SocialIconLink>
								<SocialIconLink
									href="https://www.youtube.com/channel/UCrymMqa7o_W22ykTV5ghXFg"
									target="https://www.youtube.com/channel/UCrymMqa7o_W22ykTV5ghXFg"
									aria-label="Youtube"
								>
									<GrYoutube />
								</SocialIconLink>
								<SocialIconLink
									href="https://soundcloud.com/anthony-marecek/demons-in-your-bed"
									target="https://soundcloud.com/anthony-marecek/demons-in-your-bed"
									aria-label="Soundcloud"
								>
									<GrSoundcloud />
								</SocialIconLink>
							</SocialIcons>
						</SocialMediaWrap>
					</SocialMedia>
				</FooterLinkContainer>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
