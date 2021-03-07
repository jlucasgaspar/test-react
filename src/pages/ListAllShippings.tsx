import { useCallback, useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import { IShipping } from '../models/IShipping';
import { useShipping } from '../hooks/shipping';
import { ShippingsTable } from '../components/table/ShippingsTable';
import { LoadingComponent } from '../components/loading/LoadingComponent';
import { MapsModal } from '../components/map/MapsModal';

export const ListAllShippings = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [shippings, setShippings] = useState<IShipping[]>([]);

    const [mapIsOpen, setMapIsOpen] = useState<boolean>(false);
    const [currentShippingInMaps, setCurrentShippingInMaps] = useState<IShipping>({} as IShipping);

    const { listShippings } = useShipping();
    const { addToast } = useToasts();

    const handleCurrentShippingInMaps = useCallback((shipping: IShipping) => {
        setMapIsOpen(true);
        setCurrentShippingInMaps(shipping);
    }, [])

    useEffect(() => {
        const populateTable = async () => {
            setLoading(true);

            const response = await listShippings();
            
            if (response.statusCode !== 200) {
                addToast(response.body, { appearance: 'error' });
                setShippings([]);
                return setLoading(false);
            }

            setShippings(response.body);
            return setLoading(false);
        }

        populateTable();
    }, [addToast, listShippings]);

    if (!loading && !shippings) {
        return (
            <>
                <h1>Não há entregas cadastradas.</h1>
                <button>Clique aqui para cadastrar sua primeira entrega</button>
                {/* FIXME */}
            </>
        )
    }

    if (loading) {
        return (
            <LoadingComponent text="Carregando entregas..." />
        )
    }

    return (
        <>
            <ShippingsTable
                shippings={shippings}
                loading={loading}
                handleCurrentShippingInMaps={handleCurrentShippingInMaps}
            />
            
            <MapsModal
                mapIsOpen={mapIsOpen}
                setMapIsOpen={setMapIsOpen}
                currentShippingInMaps={currentShippingInMaps}
            />
        </>
    );
}