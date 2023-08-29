<template>
  <DefaultLayout>
    <div class="deps-page">
      <div id="hero" class="content">
        <h2 class="title">Компоненты из Nuxt проекта</h2>
        <ul class="list">
          <li v-for="title in targetDeps">
            <BLink :href="`#${title}`">
              {{ title }}
            </BLink>
          </li>
        </ul>
      </div>

      <div id="@nuxt/http" class="content">
        <h3>@nuxt/http</h3>
        <div class="components">
          assdaads
        </div>
      </div>


    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "~/layouts/default.vue";
import {
  BLink,
} from "bootstrap-vue-next";


const targetDeps = [
  "@nuxt/http",
  "@nuxtjs/composition-api",
  "@nuxtjs/google-analytics",
  "@nuxtjs/pwa",
  "@pinia/nuxt",
  "@rkaliev/nuxtjs-yandex-metrika",
  "@sentry/integrations",
  "@vueuse/core",
  "@vueuse/nuxt",
  "apexcharts",
  "body-parser",
  "bootstrap",
  "bootstrap-vue",
  "core-js",
  "dayjs",
  "express",
  "maska",
  "mixpanel-browser",
  "nuxt",
  "pinia",
  "pinia-plugin-persistedstate",
  "portal-vue",
  "primeicons",
  "primevue",
  "vue",
  "vue-apexcharts",
  "vue-feather-icons",
  "vue-meta",
  "vue-router",
  "vue-server-renderer",
  "vue-template-compiler",
  "webpack",
]

</script>

<style lang="scss" scoped>

.deps-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-row-gap: 50px;

  .list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 15px;


    & > .components {
      width: 100%;
      padding: 15px;
      border-radius: 12px;
      border: 1px solid gray;
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-row-gap: 15px;
    }
  }

}
</style>
