<template>
    <div>
        <div  class="absolute h-screen w-full flex overflow-hidden md:flex-col">


            <div
                    v-for="item in companies" :key="item.id"
                    class="hover:flex-[3] hover:flex-grow-[2] flex flex-col justify-center items-center flex-1 cursor-pointer transition-all
                    duration-500 ease-out group home
                     bg-[linear-gradient(rgba(0, 0, 0, 0.5)] bg-[rgba(0, 0, 0, 0.5))] "
                    :style="{ backgroundImage: `url(${item.background})` }"
            >
                <div class=" flex flex-col md:flex-row items-center justify-center gap-y-4 transition-all duration-500">
                    <nuxt-link :to="item.slug" class="w-[70%] md:w-[15%]">
                        <img :src="item.logo" alt="" />
                    </nuxt-link>
                    <div class="w-full hidden flex-col md:flex-row justify-center items-center gap-2 px-4  group-hover:flex  ">

                            <nuxt-link :to="item.slug"  class=" w-[95%] md:w-auto bg-slate-700 hover:bg-slate-800 transition-all duration-300 py-2 px-4 rounded-2xl text-white flex items-center justify-center ">
                                {{ item.title_en }}
                            </nuxt-link>

                    </div>

                </div>


            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import {data} from "~/server/api/data";
import {useUtilStore} from "~/stores/CompanyStore";

const utilStore = useUtilStore()
const companies = utilStore.companies
</script>
<style>

$defaultSeconds: 3s;

body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
}


.flex-title {
    color: #f1f1f1;
    position: relative;
    font-size: 6vw;
    margin: auto;
    text-align: center;
    transform: rotate(90deg);
    top: 15%;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    @media screen and (max-width: 768px) {
        transform: rotate(0deg) !important;
    }
}

.flex-about {
    opacity: 0;
    color: #f1f1f1;
    position: relative;
    width: 70%;
    font-size: 2vw;
    padding: 5%;
    top: 20%;
    border: 2px solid #f1f1f1;
    border-radius: 10px;
    line-height: 1.3;
    margin: auto;
    text-align: left;
    transform: rotate(0deg);
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    @media screen and (max-width: 768px) {
        padding: 0%;
        border: 0px solid #f1f1f1;
    }
}


.flex-slide {
    -webkit-flex: 1; /* Safari 6.1+ */
    -ms-flex: 1; /* IE 10 */
    flex: 1;
    cursor: pointer;
    -webkit-transition: all 500ms ease;
    -moz-transition: all 500ms ease;
    -ms-transition: all 500ms ease;
    -o-transition: all 500ms ease;
    transition: all 500ms ease;
    @media screen and (max-width: 768px) {
        overflow: auto;
        overflow-x: hidden;
    }
}

.flex-slide:hover {
    -webkit-flex-grow: 3;
    flex: 4;
}

.home {
    height: 100vh;
    background-size: contain;

    @media screen and (min-width: 768px) {
        animation: aboutFlexSlide $defaultSeconds 1;
        animation-delay: 0s;
    }
}

@keyframes aboutFlexSlide {
    0% {
        -webkit-flex-grow: 1;
        flex-grow: 1;
    }
    50% {
        -webkit-flex-grow: 3;
        flex-grow: 3;
    }
    100% {
        -webkit-flex-grow: 1;
        flex-grow: 1;
    }
}


</style>
