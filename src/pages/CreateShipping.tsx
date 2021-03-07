import { ChangeEvent, FormEvent, SyntheticEvent, useCallback, useState } from 'react';
import { DropdownProps, FormProps, InputOnChangeData } from 'semantic-ui-react';
import { ShippingForm } from '../components/form/ShippingForm';
import { IShippingRequest } from '../models/IShipping';

export const CreateShipping = () => {
    const [values, setValues] = useState<IShippingRequest>();

    const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>, data: FormProps) => {
        event.preventDefault();
        console.log(values);
    }, [values]);

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
        />
    );
}