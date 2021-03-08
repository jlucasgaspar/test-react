import { useCallback, useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import { IShipping } from '../../models/IShipping';
import { LoadingComponent } from '../loading/LoadingComponent';
import { MapsInfoWindow } from './MapsInfoWindow';
import { ErrorMessage } from '../errorMessage/ErrorMessage';

interface IMapsProps {
    currentShippingInMaps: IShipping;
};

const mapContainerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: -22.927300,
    lng: -43.094640
};

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

export const MapsModal = (props: IMapsProps) => {
    const { arrivalAddress, departureAddress } = props.currentShippingInMaps;
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleMapsApiKey
    });

    const [showArrivalInfo, setShowArrivalInfo] = useState<boolean>(false);
    const [showDepartureInfo, setShowDepartureInfo] = useState<boolean>(false);
    const [response, setResponse] = useState(null);

    const directionsCallback = useCallback((res) => {
        if (res !== null) {
            if (res.status === 'OK') {
                setResponse(res);
            } else {
                console.log('response: ', res);
            }
        }
    }, []);

    const directionsServiceOptions = useMemo(() => {
        return {
            origin: `${departureAddress.street} ${departureAddress.number} - ${departureAddress.neighborhood}, ${departureAddress.city}`,
            destination: `${arrivalAddress.street} ${arrivalAddress.number} - ${arrivalAddress.neighborhood}, ${arrivalAddress.city}`,
            travelMode: 'DRIVING'
        }
    }, [arrivalAddress.city, arrivalAddress.neighborhood, arrivalAddress.number, arrivalAddress.street, departureAddress.city, departureAddress.neighborhood, departureAddress.number, departureAddress.street])

    const directionsRendererOptions = useMemo(() => {
        return { directions: response }
    }, [response]);

    if (!isLoaded) return <LoadingComponent text='Carregando mapa...' />;
    if (loadError) return <ErrorMessage title="Erro ao carregar o mapa" />;
    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
            <DirectionsService
                options={directionsServiceOptions}
                callback={directionsCallback}
            />
            {response !== null && (
                <DirectionsRenderer options={directionsRendererOptions} />
            )}

            <Marker
                position={{ lat: arrivalAddress.lat, lng: arrivalAddress.lng }}
                onClick={() => setShowArrivalInfo(!showArrivalInfo)}
            />
            {showArrivalInfo &&
                <MapsInfoWindow
                    customerName={props.currentShippingInMaps.customerName}
                    date={props.currentShippingInMaps.date}
                    address={arrivalAddress}
                />
            }

            <Marker
                position={{ lat: departureAddress.lat, lng: departureAddress.lng }}
                onClick={() => setShowDepartureInfo(!showDepartureInfo)}
            />
            {showDepartureInfo &&
                <MapsInfoWindow
                    customerName={props.currentShippingInMaps.customerName}
                    date={props.currentShippingInMaps.date}
                    address={departureAddress}
                />
            }
        </GoogleMap>
    );
}