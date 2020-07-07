import createContext from '../../../../context/createContext';
import reducer from './reducers';
import * as Actions from './actions';

const INITIAL_STATE = {
    menu: {
        isActive: false,
    },
};

export const { Provider, Context } = createContext(
    reducer,
    { ...Actions },
    INITIAL_STATE
);
