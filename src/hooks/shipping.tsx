import { createContext, useCallback, useContext } from 'react';
import { IShipping, IShippingRequest } from '../models/IShipping';

export interface IShippingContext {
    createShipping(data?: IShippingRequest): Promise<IShipping | null>;
    listShippings(): Promise<IShipping[] | null>;
}

export const ShippingCtx = createContext<IShippingContext>({} as IShippingContext);

export const ShippingProvider: React.FC = ({ children }) => {
    const createShipping = useCallback(async (data: IShippingRequest): Promise<IShipping | null> => {
        console.log('hey');

        return null;
    }, []);

    const listShippings = useCallback(async (): Promise<IShipping[] | null> => {
        return null;
    }, []);

    return (
        <ShippingCtx.Provider value={{ createShipping, listShippings }}>
            {children}
        </ShippingCtx.Provider>
    );
}

export const useShipping = (): IShippingContext => {
    return useContext(ShippingCtx);
}