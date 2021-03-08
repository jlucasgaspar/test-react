import { ToastProvider } from 'react-toast-notifications';
import { AppProvider } from './hooks';
import { Home } from './pages/Home';
import 'semantic-ui-css/semantic.min.css';
import './styles/global.css';

export const App = () => (
    <ToastProvider placement="top-right" autoDismiss>
        <AppProvider>
            <Home />
        </AppProvider>
    </ToastProvider>
);

export default App;
