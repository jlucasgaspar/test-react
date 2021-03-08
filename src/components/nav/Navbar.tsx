import { Dispatch, SetStateAction } from 'react';
import { Menu } from 'semantic-ui-react';

interface INavbarProps {
    activeItem: string;
    setActiveItem: Dispatch<SetStateAction<string>>;
}

export const Navbar = (props: INavbarProps) => (
    <Menu pointing secondary>
        <Menu.Item
            icon="shipping fast"
            name='createShipping'
            active={props.activeItem === 'createShipping'}
            onClick={() => props.setActiveItem('createShipping')}
            content="Adicionar entrega"
        />
        <Menu.Item
            icon="list"
            name='listShippings'
            active={props.activeItem === 'listShippings'}
            onClick={() => props.setActiveItem('listShippings')}
            content="Lista de entregas"
        />
    </Menu>
);