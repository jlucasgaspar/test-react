import { Message } from 'semantic-ui-react';

export const ErrorMessage = () => (
    <Message negative>
        <Message.Header>Não existe nenhuma entrega cadastrada</Message.Header>
        <p>
            <a href="/" style={{ color: 'red' }}>
                Cadastre sua primeira entrega
            </a>
        </p>
    </Message>
);