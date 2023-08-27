import { AxiosResponse, AxiosError } from 'axios';
import { axios } from '@/lib/axios';
import { AppDispatch } from '@/reducers';
import { exampleActions } from '@/reducers/example';
import * as urls from '@/constants/webapi/example';

interface Example {}

export const GetExamples = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(exampleActions.decrement());
        return axios
            .get(urls.getExamplesUrl())
            .then((response: AxiosResponse<Example>) => {
                dispatch(exampleActions.decrement());
                console.log(response);
            })
            .catch((error: AxiosError<Example>) => {
                dispatch(exampleActions.decrement());
                console.log(error);
            });
    };
};
