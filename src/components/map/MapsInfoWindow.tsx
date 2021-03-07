import { InfoWindow } from '@react-google-maps/api';

interface IInfoWindowProps {
    address: {
        street: string;
        number: number;
        additionalInfo?: string | undefined;
        neighborhood: string;
        city: string;
        state: string;
        lat: number;
        lng: number;
    }
    customerName: string;
    date: Date;
};

export const MapsInfoWindow = (props: IInfoWindowProps) => (
    <InfoWindow position={{ lat: props.address.lat, lng: props.address.lng }}>
        <div>
            <strong>Nome do cliente: </strong>
            {props.customerName}
            <br />

            <strong>Data da entrega: </strong>
            {props.date}
            <br />

            <strong>Endereço: </strong>
            {`${props.address.street}, ${props.address.number} -
            ${props.address.neighborhood}, ${props.address.city}`}
            <br />
        </div>
    </InfoWindow>
);