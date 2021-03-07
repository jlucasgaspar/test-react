import { createContext, useCallback, useContext } from 'react';
import { IShipping, IShippingRequest, IShippingHttpResponse } from '../models/IShipping';
import { api } from '../services/api';

export interface IShippingContext {
    createShipping(values?: IShippingRequest): Promise<IShippingHttpResponse>;
    listShippings(): Promise<IShipping[] | null>;
}

export const ShippingCtx = createContext<IShippingContext>({} as IShippingContext);

export const ShippingProvider: React.FC = ({ children }) => {
    const createShipping = useCallback(async (values: IShippingRequest): Promise<IShippingHttpResponse> => {
        try {
            const request = {
                customerName: values.customerName,
                date: new Date(values.date),
                departureAddress: {
                    street: values.departureAddressStreet,
                    number: values.departureAddressNumber,
                    additionalInfo: values.departureAddressAdditionalInfo,
                    neighborhood: values.departureAddressNeighborhood,
                    city: values.departureAddressCity,
                    state: values.departureAddressState
                },
                arrivalAddress: {
                    street: values.arrivalAddressStreet,
                    number: values.arrivalAddressNumber,
                    additionalInfo: values.arrivalAddressAdditionalInfo,
                    neighborhood: values.arrivalAddressNeighborhood,
                    city: values.arrivalAddressCity,
                    state: values.arrivalAddressState
                }
            }

            const response = await api.post('/api/shipping', request);

            return {
                statusCode: response.status,
                body: `
                    Entrega para o cliente ${response.data.customerName} adicionada com sucesso.
                `
            };
        } catch (error) {
            //console.error(error);
            return {
                statusCode: 500,
                body: 'Houve algum erro inesperado, por favor tente novamente.'
            };
        };
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