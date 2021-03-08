import { Dispatch, SetStateAction } from 'react';
import { Modal } from 'semantic-ui-react';

interface IModalProps {
    modalIsOpen: boolean;
    setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalComponent: React.FC<IModalProps> = (props) => (
    <Modal
        onClose={() => props.setModalIsOpen(false)}
        onOpen={() => props.setModalIsOpen(true)}
        open={props.modalIsOpen}
        style={{ maxWidth: '90%', height: 500 }}
    >
        {props.children}
    </Modal>
);