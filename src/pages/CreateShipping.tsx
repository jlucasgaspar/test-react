import { ChangeEvent, FormEvent, SyntheticEvent, useCallback, useState } from 'react';
import { DropdownProps, InputOnChangeData } from 'semantic-ui-react';
import { useToasts } from 'react-toast-notifications'

import { useShipping } from '../hooks/shipping';
import { ShippingForm } from '../components/form/ShippingForm';
import { IShippingRequest } from '../models/IShipping';

export const CreateShipping = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [values, setValues] = useState<IShippingRequest>();

    const { addToast } = useToasts();
    const { createShipping } = useShipping();

    const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!values?.departureAddressState) {
            return addToast('Estado de saída é obrigatório.', { appearance: 'warning' });
        }

        if (!values?.arrivalAddressState) {
            return addToast('Estado de destino é obrigatório.', { appearance: 'warning' });
        }

        setLoading(true);

        const response = await createShipping(values);

        setLoading(false);

        if (response.statusCode === 200) {
            return addToast(response.body, { appearance: 'success' });
        } else {
            return addToast(response.body, { appearance: 'error' });
        }
    }, [values, createShipping, addToast]);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
        const newValues = Object.assign({}, values, { [data.name]: data.value });
        setValues(newValues)
    }, [values]);

    const handleSelectChange = useCallback((e: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
        const newValues = Object.assign({}, values, { [data.name]: data.value });
        setValues(newValues);
    }, [values]);

    return (
        <ShippingForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
            values={values}
            loading={loading}
        />
    );
}