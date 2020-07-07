import React from 'react';
import GlobalStyles from './styles/global';

import DefaultLayout from './components/_layouts/default';

function App() {
    return (
        <>
            <GlobalStyles />
            <DefaultLayout>Hello</DefaultLayout>
        </>
    );
}

export default App;
