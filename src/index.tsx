import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import Providers from './providers';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <Providers />
        </Provider>
    </StrictMode>
    ,
    document.getElementById('root')
);
