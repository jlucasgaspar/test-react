import { Message } from 'semantic-ui-react';

interface IErrorMsgProps {
    title: string;
    bodyMsg?: string;
    bodyMsgHref?: string;
}

export const ErrorMessage = (props: IErrorMsgProps) => (
    <Message negative>
        <Message.Header>{props.title}</Message.Header>
        {props.bodyMsg &&
            <p>
                {props.bodyMsgHref
                    ? <a href={props.bodyMsgHref} style={{ color: 'red' }}>{props.bodyMsg}</a>
                    : <>{props.bodyMsg}</>
                }
            </p>
        }
    </Message>
);