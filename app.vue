<template>
  <div>
        <nuxt-page/>
  </div>
</template>
<script setup lang="ts">
import {useUtilStore} from "~/stores/CompanyStore";

useHead({

    title: 'Hexagon',
    htmlAttrs: {
        lang: 'fa',
        dir: 'rtl',
        class:['bg-slate-950 dark']

    },

})

const utilStore = useUtilStore()
useAsyncData("companies",()=>utilStore.setCompanies())

</script>
<style>

.page-enter-active {
    animation: page-fade-in 0.3s ease-out;
}

.page-leave-active {
    animation: page-fade-out 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

@keyframes page-fade-in {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes page-fade-out {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}

</style>