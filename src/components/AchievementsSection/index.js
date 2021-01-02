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
						Semi-Finalist in TD Case Competition
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjTwo);
						}}
					>
						Contract film maker for Clarendon Trading Company
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjThree);
						}}
					>
						Volunteer at St John's Chrysostom Church
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjFour);
						}}
					>
						Wilfrid Laurier University Scholarship
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjFive);
						}}
					>
						Academic Distinction
					</ModalButton>
					<ModalButton
						onClick={() => {
							openModal();
							setModalType(modalObjSix);
						}}
					>
						Ultimate Frisbee Team Captain
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
