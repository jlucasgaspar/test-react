import { Segment, Dimmer, Loader } from 'semantic-ui-react'

interface IComponentProps {
    text: string;
}

export const LoadingComponent = (props: IComponentProps) => (
    <Segment style={{ height: '100vh' }}>
        <Dimmer active inverted>
            <Loader inverted content={props.text} />
        </Dimmer>
    </Segment>
)