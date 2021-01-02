import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AboutSection from "../components/AboutSection";
import { homeObjOne } from "../components/AboutSection/data";

import MediaSection from "../components/MediaSection";
import Footer from "../components/Footer";

import ProjectsSection from "../components/ProjectsSection";
import AchievementsSection from "../components/AchievementsSection";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{window.innerWidth < 768 && isOpen ? (
				<Sidebar isOpen={isOpen} toggle={toggle} onHide={isOpen} />
			) : (
				""
			)}

			<Navbar toggle={toggle} />
			<HeroSection />
			<AboutSection {...homeObjOne} />
			<MediaSection />
			<ProjectsSection />
			<AchievementsSection />
			<Footer />
		</>
	);
};

export default Home;
