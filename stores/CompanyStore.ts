import { defineStore } from "pinia";
import { Ref } from "vue";
import {GetAllCompany} from "~/services/Main";

export const useUtilStore = defineStore("util", () => {
  const companies: Ref<CompanyDTO[]> = ref([]);

  const setCompanies = async () => {
    if (companies.value.length == 0) {

      let res = await GetAllCompany();


      companies.value = res.data;


    }
  };

  return { companies, setCompanies };
});
