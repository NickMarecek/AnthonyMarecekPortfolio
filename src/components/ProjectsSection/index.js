import React from "react";
import Card from "./card";

import {
	Cards,
	CardsHeader,
	CardsContainer,
	CardsWrapper,
	CardsItems,
} from "./ProjectsElements";

function ProjectsSection() {
	return (
		<>
			<Cards id="projects">
				<CardsHeader>Multimedia Projects</CardsHeader>
				<CardsContainer>
					<CardsWrapper>
						<CardsItems>
							<Card
								img={require("../../images/projects/img1.JPG")}
								text="Superwoman: A Mother's Life"
								label="Video"
								link="https://www.youtube.com/watch?v=wYLRvNm7tvo&ab_channel=AnthonyMarecek"
							/>
							<Card
								img={require("../../images/projects/img2.jpg")}
								text="TORONTO November 15th, 2019"
								label="Video"
								link="https://www.youtube.com/watch?v=qvwbdm5KOLI&ab_channel=AnthonyMarecek"
							/>
						</CardsItems>
						<CardsItems>
							<Card
								img={require("../../images/projects/img6.jpg")}
								text="A New Chapter: A Highschool Graduates View of COVID-19"
								label="Video"
								link="https://www.youtube.com/watch?v=aK4AYs1_SUg&t=107s&ab_channel=AnthonyMarecek"
							/>
							<Card
								img={require("../../images/projects/img4.JPG")}
								text="April Ambivalence: The art of B-roll"
								label="Video"
								link="https://www.youtube.com/watch?v=3sBznFsqiA8&ab_channel=AnthonyMarecek"
							/>
						</CardsItems>
						<CardsItems>
							<Card
								img={require("../../images/projects/img8.png")}
								text="Clarendon Trading Co. The Boutique: Ep 1"
								label="Video"
								link="https://www.instagram.com/tv/CC6tZtGgBWv/"
							/>
							<Card
								img={require("../../images/projects/img7.JPG")}
								text="Clarendon Trading Co. Hidden Gems: Ep 57"
								label="Video"
								link="https://www.instagram.com/tv/CFszkl-pdCH/"
							/>
							<Card
								img={require("../../images/projects/img3.JPG")}
								text="Original Music Project"
								label="Music"
								link="https://soundcloud.com/anthony-marecek/demons-in-your-bed"
							/>
							<Card
								img={require("../../images/projects/img5.JPG")}
								text="Value Vintage: Clothing Restoration and Repurposing"
								label="Account"
							/>
						</CardsItems>
					</CardsWrapper>
				</CardsContainer>
			</Cards>
		</>
	);
}

export default ProjectsSection;
