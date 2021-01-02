import React, { useState } from "react";
import { sliderData } from "./sliderData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./imageSlider.css";

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		//if at end, traceback to first image, else display next
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		//if at beginning, display last image, else display previous
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	//null check
	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<>
			<section className="slider">
				<FaAngleLeft
					className="left-arrow"
					onClick={prevSlide}
					color={"white"}
				/>
				<FaAngleRight
					className="right-arrow"
					onClick={nextSlide}
					color={"white"}
				/>
				{sliderData.map((slide, index) => {
					return (
						<div
							className={index === current ? "slide active" : "slide"}
							key={index}
						>
							{index === current && (
								<img
									src={slide.image}
									alt="photos"
									className="image"
									key={index}
								/>
							)}
						</div>
					);
				})}
			</section>
		</>
	);
};

export default ImageSlider;
