import { ToastProvider } from 'react-toast-notifications';
import { CreateShipping } from './pages/CreateShipping';
import { AppProvider } from './hooks';
import 'semantic-ui-css/semantic.min.css';
import './styles/global.css';

export const App = () => (
    <ToastProvider placement="top-right">
        <AppProvider>
            <CreateShipping />
        </AppProvider>
    </ToastProvider>
);

export default App;
