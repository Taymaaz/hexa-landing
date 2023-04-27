

import {ApiResponse} from "~/models/ApiResponse";
import {FetchApi} from "~/utils/CustomFetchApi";

export const GetAllCompany = (): Promise<ApiResponse<CompanyDTO[]>> => {
  return FetchApi("/companies/");
};
