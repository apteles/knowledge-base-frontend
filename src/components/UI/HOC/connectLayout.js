import React, { useContext } from 'react';
import { Context } from '../state/layout/layoutContext';
export default function (Component) {
    return (props) => {
        const { ...data } = useContext(Context);
        return <Component {...props} context={data} />;
    };
}
