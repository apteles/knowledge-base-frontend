import React from 'react';
import PropType from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../components/_layouts/default';
import AuthLayout from '../components/_layouts/auth';

export default function RouteWrapper({ component: Component, guard, ...rest }) {
    const signed = true;
    if (!signed && guard) {
        return <Redirect to="/" />;
    }

    if (signed && !guard) {
        return <Redirect to="/dashboard" />;
    }

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    isPrivate: PropType.bool,
    component: PropType.oneOfType([PropType.element, PropType.func]).isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
