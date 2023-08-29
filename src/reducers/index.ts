import {
    TypedUseSelectorHook,
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
} from 'react-redux';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import example from './example';

export * from 'react-redux';

export const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

export const store = configureStore({
    reducer: {
        example,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: true }).concat(logger, routerMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;
