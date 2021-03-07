import { Dispatch, SetStateAction } from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { IShipping } from '../../models/IShipping';
import '../../styles/shippingsTable.css';

interface IShippingsTableProps {
    shippings?: IShipping[];
    loading: boolean;
    handleCurrentShippingInMaps: (shipping: IShipping) => void;
}

export const ShippingsTable = (props: IShippingsTableProps): React.ReactElement => (
    <Table singleLine id="shippings-table">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Nome do cliente</Table.HeaderCell>
                <Table.HeaderCell>Data da entrega</Table.HeaderCell>
                <Table.HeaderCell>Endereço da partida</Table.HeaderCell>
                <Table.HeaderCell>Endereço de destino</Table.HeaderCell>
                <Table.HeaderCell>Ver no mapa</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {props.shippings && props.shippings.map(shipping => (
                <Table.Row>
                    <Table.Cell>
                        {shipping.customerName}
                    </Table.Cell>
                    <Table.Cell>
                        {shipping.date}
                    </Table.Cell>
                    <Table.Cell>
                        {`
                            ${shipping.departureAddress.neighborhood} -
                            ${shipping.departureAddress.city},
                            ${shipping.departureAddress.state}
                        `}
                    </Table.Cell>
                    <Table.Cell>
                        {`
                            ${shipping.arrivalAddress.neighborhood} -
                            ${shipping.arrivalAddress.city},
                            ${shipping.arrivalAddress.state}
                        `}
                    </Table.Cell>
                    <Table.Cell>
                        <Button
                            fluid
                            primary
                            className="submit-button"
                            loading={props.loading}
                            type="button"
                            onClick={() => props.handleCurrentShippingInMaps(shipping)}
                        >
                            <Icon name="map marker alternate" /> Visualizar
                        </Button>
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    </Table>
);