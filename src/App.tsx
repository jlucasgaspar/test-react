import { ToastProvider } from 'react-toast-notifications';
import { CreateShipping } from './pages/CreateShipping';
import { AppProvider } from './hooks';
import 'semantic-ui-css/semantic.min.css';
import './styles/global.css';
import { ListAllShippings } from './pages/ListAllShippings';

export const App = () => (
    <ToastProvider placement="top-right" autoDismiss>
        <AppProvider>
            {/* <CreateShipping /> */}
            <ListAllShippings />
        </AppProvider>
    </ToastProvider>
);

export default App;
