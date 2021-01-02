import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
	Background,
	ModalWrapper,
	ModalImg,
	ModalContent,
	CloseModalButton,
} from "./modalElements";

const Modal = ({ showModal, setShowModal, modalType }) => {
	const modalRef = useRef();

	//modal animation
	const animation = useSpring({
		config: {
			duration: 200,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});

	//close modal on background click
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	//close modal on esc key press
	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<>
			{showModal ? (
				<Background ref={modalRef} onClick={closeModal}>
					<animated.div style={animation}>
						<ModalWrapper showModal={showModal}>
							<ModalImg src={modalType.img} alt={modalType.alt} />
							<ModalContent>
								<h1>{modalType.header}</h1>
								<p>{modalType.text}</p>
								{modalType.button ? (
									<a href={modalType.buttonLink} target={modalType.buttonLink}>
										{modalType.button}
									</a>
								) : null}
							</ModalContent>
							<CloseModalButton
								aria-label="Close Modal"
								onClick={() => setShowModal((prev) => !prev)}
							/>
						</ModalWrapper>
					</animated.div>
				</Background>
			) : null}
		</>
	);
};

export default Modal;
