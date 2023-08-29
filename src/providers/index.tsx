import React, { ReactNode } from 'react';
import { ReduxRouter, ReduxRouterState } from '@lagunovsky/redux-react-router';
import { store, history } from '../reducers';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './AuthProvider';

interface IPropsAppProvider {
    children: ReactNode;
}

export const AppProvider = ({ children }: IPropsAppProvider) => {
    return (
        <ErrorBoundary FallbackComponent={() => <p>ErrorBoundary</p>}>
            <HelmetProvider>
                <React.Suspense fallback={<p>Loading</p>}>
                    <Provider store={store}>
                        {/* <ReduxRouter history={history}> */}
                        <ToastContainer />
                        <AuthProvider>
                            <Router>{children}</Router>
                        </AuthProvider>
                        {/* </ReduxRouter> */}
                    </Provider>
                </React.Suspense>
            </HelmetProvider>
        </ErrorBoundary>
    );
};
