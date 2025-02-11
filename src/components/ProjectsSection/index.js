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
								img={require("../../images/projects/clarendon-1.webp")}
								text="Clarendon Trading Co. Portfolio"
								label="Video"
								link="https://drive.google.com/drive/folders/12dDvDcNc1-JfYwuwTiOjV_K31XdN1cy5?usp=sharing"
							/>
							<Card
								img={require("../../images/projects/enactus.jpg")}
								text="Enactus Problem Pitch - Economic Inequality & COVID 19"
								label="Video"
								link="https://youtu.be/5O_ShpvpCqE"
							/>
						</CardsItems>
						<CardsItems>
							<Card
								img={require("../../images/projects/AArotated.jpg")}
								text="Original Band Portfolio: Avro Arrows"
								label="Music"
								link="https://www.instagram.com/avroarrowsband/"
							/>
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
							<Card
								img={require("../../images/projects/img6.jpg")}
								text="A New Chapter: A Highschool Graduates View of COVID-19"
								label="Video"
								link="https://youtu.be/aK4AYs1_SUg"
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
								link="https://linktr.ee/carryon.music?fbclid=PAZXh0bgNhZW0CMTEAAaYfpLQBG0Y8A
								JPunUJXfqbDsFTzcS9tRYktiPeoCCnh-jZd9WTQLEDnX-Y_aem_Vwp5aB36v2j_
								_5kSxLrehA"
							/>
							<Card
								img={require("../../images/projects/img5.JPG")}
								text="Value Vintage: Clothing Restoration and Repurposing"
								label="Account"
							/>
							<Card
								img={require("../../images/projects/img4.JPG")}
								text="April Ambivalence: The art of B-roll"
								label="Video"
								link="https://www.youtube.com/watch?v=3sBznFsqiA8&ab_channel=AnthonyMarecek"
							/>
						</CardsItems>
					</CardsWrapper>
				</CardsContainer>
			</Cards>
		</>
	);
}

export default ProjectsSection;
