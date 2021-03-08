import { useState } from 'react';
import { Navbar } from '../components/nav/Navbar';
import { CreateShipping } from './CreateShipping';
import { ListAllShippings } from './ListAllShippings';

export const Home = () => {
    const [activeItem, setActiveItem] = useState<string>('');

    return (
        <>
            <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />

            {activeItem === 'createShipping' &&
                <CreateShipping />
            }

            {activeItem === 'listShippings' &&
                <ListAllShippings />
            }
        </>
    );
}