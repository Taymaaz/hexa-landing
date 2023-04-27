<template>
    <div class="flex h-screen items-center justify-center">


        <div v-if="item" class="w-full max-w-[500px] md:max-w-full   border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700 ">
            <div class="flex justify-end ">
                <nuxt-link to="/" class="px-10 py-2  rounded-tl-lg rounded-br-lg bg-sky-700 text-white">
                    برگشت
                </nuxt-link>


            </div>
            <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="item?.logo"
                     alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium text-white "> {{ item?.title_ir }}</h5>
                <h6 class="mb-1 text-xs font-medium text-slate-400 mb-4"> {{ item?.title_en }}</h6>
                <ul class="flex flex-col w-full px-[20%] gap-y-2 ">
                    <li v-for="link in item.links" :key="link.id">
                        <a :href="link?.url"

                           class="hover:-translate-y-0.5 flex items-center gap-x-2  px-6 py-2 rounded-lg  transition-all duration-300"
                          
                           :style="{ backgroundColor: `${link.background_color}` }"
                        >

                            <div>
                                <Icon :name="`${link?.icon}`" :size="`${link.icon_size??'18'}`"  :style="{ color: `${link.title_color}` }"/>
                            </div>
                            <div
                    :style="{ color: `${link.title_color}` }">
                               {{link?.title}}
                            </div>

                        </a>
                    </li>
                </ul>

            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import {Ref} from "vue";
import {useUtilStore} from "~/stores/CompanyStore";
const utilStore = useUtilStore()
const companies = utilStore.companies
const route = useRoute()
const router = useRouter()

const item: Ref<CompanyDTO|null> = ref(null)

onMounted(() => {
    item.value = companies.find(f => f.slug === route.params.slug)
    if (!item.value?.id) {
        router.push('/')
    }
})
</script>

