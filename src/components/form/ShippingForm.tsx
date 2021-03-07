import { ChangeEvent, FormEvent, ReactElement, SyntheticEvent } from 'react'
import { Form, FormProps, Button, InputOnChangeData, DropdownProps, Icon, Divider, Select } from 'semantic-ui-react'
import { states } from '../../constants/states';
import { IShippingRequest } from '../../models/IShipping';
import '../../styles/shippingForm.css';

interface IShippingFormProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>, data: FormProps) => void;
    handleChange: (event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
    handleSelectChange: (event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void;
    values: IShippingRequest | undefined;
    loading: boolean;
}

export const ShippingForm = (props: IShippingFormProps): ReactElement => (
    <Form onSubmit={props.handleSubmit} className="shipping-form">
        <Form.Group>
            <Form.Input
                name="customerName"
                label="Nome do cliente"
                placeholder="Nome do cliente"
                onChange={props.handleChange}
                value={props.values?.customerName}
                width={10}
                //required
                loading={props.loading}
                disabled={props.loading}
                // FIXME: ver se é disabled ou readonly
            />
            <Form.Input
                type="date"
                name="date"
                label="Data da entrega"
                placeholder="Data da entrega"
                onChange={props.handleChange}
                style={{ height: 40 }}
                value={props.values?.date}
                width={6}
                required
                loading={props.loading}
                disabled={props.loading}
            />
        </Form.Group>

        <h2>Endereço de Saída</h2>
        <Divider />

        <Form.Group>
            <Form.Input
                name="departureAddressStreet"
                label="Endereço da saída"
                placeholder="Endereço da saída"
                onChange={props.handleChange}
                width={8}
                value={props.values?.departureAddressStreet}
                required
                loading={props.loading}
                disabled={props.loading}
            />
            <Form.Input
                type="number"
                name="departureAddressNumber"
                label="Número"
                placeholder="Número"
                onChange={props.handleChange}
                width={3}
                value={props.values?.departureAddressNumber}
                required
                loading={props.loading}
                disabled={props.loading}
            />
            <Form.Input
                name="departureAddressNeighborhood"
                label="Bairro"
                placeholder="Bairro"
                onChange={props.handleChange}
                width={5}
                value={props.values?.departureAddressNeighborhood}
                required
            />
        </Form.Group>

        <Form.Group>
            <Form.Input
                name="departureAddressAdditionalInfo"
                onChange={props.handleChange}
                label="Complemento (Opcional)"
                placeholder="Complemento (Opcional)"
                width={5}
                value={props.values?.departureAddressAdditionalInfo}
                loading={props.loading}
            />
            <Form.Select
                fluid
                label="Estado"
                placeholder="Estado"
                options={states}
                onChange={props.handleSelectChange}
                required
                name="departureAddressState"
                width={5}
                value={props.values?.departureAddressState}
                loading={props.loading}
            />
            <Form.Input
                name="departureAddressCity"
                onChange={props.handleChange}
                label="Município"
                placeholder="Município"
                width={6}
                value={props.values?.departureAddressCity}
                required
                loading={props.loading}
            />
        </Form.Group>

        <h2>Endereço de Destino</h2>
        <Divider />

        <Form.Group>
            <Form.Input
                name="arrivalAddressStreet"
                label="Endereço de Destino"
                placeholder="Endereço de Destino"
                onChange={props.handleChange}
                width={8}
                value={props.values?.arrivalAddressStreet}
                required
                loading={props.loading}
            />
            <Form.Input
                type="number"
                name="arrivalAddressNumber"
                label="Número"
                placeholder="Número"
                onChange={props.handleChange}
                width={3}
                value={props.values?.arrivalAddressNumber}
                required
                loading={props.loading}
            />
            <Form.Input
                name="arrivalAddressNeighborhood"
                label="Bairro"
                placeholder="Bairro"
                onChange={props.handleChange}
                width={5}
                value={props.values?.arrivalAddressNeighborhood}
                required
                loading={props.loading}
            />
        </Form.Group>

        <Form.Group>
            <Form.Input
                name="arrivalAddressAdditionalInfo"
                onChange={props.handleChange}
                label="Complemento (Opcional)"
                placeholder="Complemento (Opcional)"
                width={5}
                loading={props.loading}
                value={props.values?.arrivalAddressAdditionalInfo}
            />
            <Form.Field
                fluid
                control={Select}
                label="Estado"
                placeholder="Estado"
                name="arrivalAddressAdditionalState"
                options={states}
                onChange={props.handleSelectChange}
                required
                loading={props.loading}
                width={5}
                value={props.values?.arrivalAddressState}
            />
            <Form.Input
                name="arrivalAddressCity"
                onChange={props.handleChange}
                label="Município"
                placeholder="Município"
                width={6}
                value={props.values?.arrivalAddressCity}
                required
                loading={props.loading}
            />
        </Form.Group>

        <Button fluid primary className="submit-button" loading={props.loading}>
            <Icon name="shipping fast" />
            Adicionar entrega
        </Button>
    </Form>
);