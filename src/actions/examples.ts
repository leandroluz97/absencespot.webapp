import { AppDispatch } from '@/reducers';
import { exampleActions } from '@/reducers/example';

export const GetExamples = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(exampleActions.decrement());
        // return axios
        //     .get('url')
        //     .then((response) => {
        //         dispatch(exampleActions.decrement());
        //     })
        //     .catch((error) => {
        //         dispatch(exampleActions.decrement());
        //     });
    };
};
