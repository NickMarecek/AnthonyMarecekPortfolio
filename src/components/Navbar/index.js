import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import Logo from "../Logo/Logo";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	const toggleHome = () => {
		animateScroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to="/" onClick={toggleHome}>
						<Logo />
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavLinks
							to="about"
							smooth={true}
							duration={500}
							spy={true}
							offset={-80}
						>
							About
						</NavLinks>

						<NavItem>
							<NavLinks
								to="media"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
							>
								Media
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="projects"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
							>
								Projects
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="achievements"
								smooth={true}
								duration={500}
								spy={true}
								offset={-80}
							>
								Achievements
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink
							href="mailto:josefmarecek02@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Contact Me
						</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
