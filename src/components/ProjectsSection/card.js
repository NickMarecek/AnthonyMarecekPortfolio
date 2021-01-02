import React from "react";
import {
	CardItem,
	CardItemLink,
	CardItemPicWrap,
	CardItemImage,
	CardItemInfo,
	CardItemText,
} from "./ProjectsElements";
function Card({ img, alt, label, text, link }) {
	return (
		<>
			<CardItem>
				<CardItemLink href={link} target={link}>
					<CardItemPicWrap data-category={label}>
						<CardItemImage src={img} alt={alt} />
					</CardItemPicWrap>
					<CardItemInfo>
						<CardItemText>{text}</CardItemText>
					</CardItemInfo>
				</CardItemLink>
			</CardItem>
		</>
	);
}

export default Card;
