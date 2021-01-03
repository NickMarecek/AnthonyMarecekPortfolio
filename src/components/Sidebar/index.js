import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						to="about"
						smooth={true}
						duration={500}
						spy={true}
						exact={true}
						offset={-80}
						onClick={toggle}
					>
						About
					</SidebarLink>
					<SidebarLink
						to="media"
						smooth={true}
						duration={500}
						spy={true}
						exact={true}
						offset={-80}
						onClick={toggle}
					>
						Media
					</SidebarLink>
					<SidebarLink
						to="projects"
						smooth={true}
						duration={500}
						spy={true}
						exact={true}
						offset={-80}
						onClick={toggle}
					>
						Projects
					</SidebarLink>
					<SidebarLink
						to="achievements"
						smooth={true}
						duration={500}
						spy={true}
						exact={true}
						offset={-80}
						onClick={toggle}
					>
						Achievements
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarRoute
						href="mailto:josefmarecek02@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contact Me
					</SidebarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
