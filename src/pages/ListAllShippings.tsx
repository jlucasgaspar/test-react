import { useCallback, useEffect, useState } from 'react';

import { IShipping } from '../models/IShipping';
import { useShipping } from '../hooks/shipping';
import { ShippingsTable } from '../components/table/ShippingsTable';
import { LoadingComponent } from '../components/loading/LoadingComponent';
import { MapsModal } from '../components/map/MapsModal';
import { ModalComponent } from '../components/modal/Modal';
import { ErrorMessage } from '../components/errorMessage/ErrorMessage';

export const ListAllShippings = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [shippings, setShippings] = useState<IShipping[]>([]);

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [currentShippingInMaps, setCurrentShippingInMaps] = useState<IShipping>({} as IShipping);

    const { listShippings } = useShipping();

    const handleCurrentShippingInMaps = useCallback((shipping: IShipping) => {
        setModalIsOpen(true);
        setCurrentShippingInMaps(shipping);
    }, []);

    useEffect(() => {
        const populateTable = async () => {
            setLoading(true);

            const response = await listShippings();
            
            if (response.statusCode === 500) {
                setShippings([]);
                return setLoading(false);
            }

            setShippings(response.body);
            return setLoading(false);
        }

        populateTable();
    }, [listShippings]);

    if (loading) return <LoadingComponent text="Carregando entregas..." />;
    if (!loading && !shippings.length) return <ErrorMessage />;
    return (
        <>
            <ShippingsTable
                shippings={shippings}
                loading={loading}
                handleCurrentShippingInMaps={handleCurrentShippingInMaps}
            />

            <ModalComponent modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
                <MapsModal currentShippingInMaps={currentShippingInMaps} />
            </ModalComponent>
        </>
    );
}