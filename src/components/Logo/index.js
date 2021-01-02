import React from "react";

import { GlitchContainer, Glitch } from "./LogoElements";

const Logo = () => {
	return (
		<>
			<GlitchContainer>
				<Glitch>
					<span aria-hidden="true">Anthony Marecek</span>Anthony Marecek
					<span aria-hidden="true">Anthony Marecek</span>
				</Glitch>
			</GlitchContainer>
		</>
	);
};

export default Logo;
