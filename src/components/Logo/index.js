import React from "react";

import { GlitchContainer, Glitch } from "./LogoElements";

const Logo = () => {
	return (
		<>
			<GlitchContainer>
				<Glitch>
					<span aria-hidden="true">Josef Marecek</span>Josef Marecek
					<span aria-hidden="true">Josef Marecek</span>
				</Glitch>
			</GlitchContainer>
		</>
	);
};

export default Logo;
