import React, { useState } from "react";
import Modal from "./modal/modal";
import {
	Container,
	AchievementHeader,
	ModalGrid,
	ModalButton,
} from "./AchievementElements";
import {
	modalObjOne,
	modalObjTwo,
	modalObjThree,
	modalObjFour,
	modalObjFive,
	modalObjSix,
	modalObjSeven,
} from "./modal/data";

const AchievementsSection = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState(null);

	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<>
			<Container id="achievements">
				<AchievementHeader>Achievements & Awards</AchievementHeader>
				<ModalGrid>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjOne);
						}}
					>
						Finalist in Laurier Enactus Problem Pitch
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjTwo);
						}}
					>
						Semi-Finalist in TD Case Competition
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjThree);
						}}
					>
						Contract filmmaker for Clarendon Trading Company
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjFour);
						}}
					>
						Graphic Designer & VP of Marketing for Laurier Economics Club
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjFive);
						}}
					>
						Wilfrid Laurier University Scholarship
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjSix);
						}}
					>
						Academic Distinction
					</ModalButton>
				</ModalGrid>
				<Modal
					showModal={showModal}
					setShowModal={setShowModal}
					modalType={modalType}
				/>
			</Container>
		</>
	);
};

export default AchievementsSection;
