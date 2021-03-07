import { ShippingProvider } from './shipping';

export const AppProvider: React.FC = ({ children }) => (
    <ShippingProvider>
        {children}
    </ShippingProvider>
)