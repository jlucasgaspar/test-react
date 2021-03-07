import { CreateShipping } from './pages/CreateShipping';
import { AppProvider } from './hooks';
import 'semantic-ui-css/semantic.min.css';
import './styles/global.css';

export const App = () => (
    <AppProvider>
        <CreateShipping />
    </AppProvider>
);

export default App;
