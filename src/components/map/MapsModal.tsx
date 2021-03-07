import { Dispatch, SetStateAction } from 'react';
import { Modal } from 'semantic-ui-react';
import { IShipping } from '../../models/IShipping';

interface IMapsProps {
    mapIsOpen: boolean;
    setMapIsOpen: Dispatch<SetStateAction<boolean>>;
    currentShippingInMaps: IShipping;
}

export const MapsModal = (props: IMapsProps) => (
    <Modal
        onClose={() => props.setMapIsOpen(false)}
        onOpen={() => props.setMapIsOpen(true)}
        open={props.mapIsOpen}
    >

    </Modal>
);