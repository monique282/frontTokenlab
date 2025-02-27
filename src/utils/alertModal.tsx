import React from "react";
import { Button, ModalContainer, Overlay } from "../assets/styled/alertModalStyled";

type AlertModalProps = {
    message: string;
    onClose: () => void;
};

export function AlertModal({ message, onClose }: AlertModalProps) {
    return (
        <Overlay>
            <ModalContainer>
                <p>{message}</p>
                <Button onClick={onClose}>OK</Button>
            </ModalContainer>
        </Overlay>
    );
}
