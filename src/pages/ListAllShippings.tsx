import { useEffect, useState } from 'react';
import { IShipping } from '../models/IShipping';
import { useShipping } from '../hooks/shipping';
import { useToasts } from 'react-toast-notifications';
import { ShippingsTable } from '../components/table/ShippingsTable';
import { LoadingComponent } from '../components/loading/LoadingComponent';

export const ListAllShippings = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [shippings, setShippings] = useState<IShipping[]>([]);

    const { listShippings } = useShipping();
    const { addToast } = useToasts();

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
        <ShippingsTable shippings={shippings} loading={loading} />
    );
}