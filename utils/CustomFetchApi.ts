import {BASE_URL} from "./ApiConfig";
import {FetchError, FetchOptions} from "ofetch";
import {ApiResponse} from "~/models/ApiResponse";


export async function FetchApi<T>(
    url: string,
    config: FetchOptions = {}
): Promise<ApiResponse<T>> {
    config = {
        baseURL: BASE_URL,
        ...config,
    };

    //@ts-ignore
    return $fetch<ApiResponse<T>>(url, config)
        .then((res) => {
            return res;
        })
        .catch((e: FetchError) => {
            return {
                data: null,
                isSuccess: false,
            };
        });
}