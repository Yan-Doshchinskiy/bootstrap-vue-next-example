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

      <div id="@nuxt/http" class="content -partial">
        <h3>@nuxt/http</h3>
        <div class="components">
          нет для nuxt v3. Рекомендуется использовать внутренний изоморфный useFetch
          <br/>
          <a href="https://nuxt.com/docs/getting-started/data-fetching#isomorphic-fetch-and-fetch" target="_blank">
            Nuxt3 Data fetching Docs
          </a>
          <button @click="fetchExamplePost">Отправить запрос</button>
          <div v-if="examplePost">
            <h4>title: {{ examplePost.title }}</h4>
            <p>id: {{ examplePost.id }}</p>
            <p>userId: {{ examplePost.userId }}</p>
            <p>description: {{ examplePost.body }}</p>
          </div>
        </div>
      </div>

      <div id="@nuxtjs/composition-api" class="content -success">
        <h3>@nuxtjs/composition-api</h3>
        <div class="components">
          Composition api уже входит в Vue 3 и Nuxt 3
        </div>
      </div>

      <div id="@nuxtjs/google-analytics" class="content -research">
        <h3>@nuxtjs/google-analytics</h3>
        <div class="components">
          Такого пакета нет. Нужно разобраться можно ли его заменить пакетом @nuxtjs/gtm
        </div>
      </div>

      <div id="@nuxtjs/pwa" class="content -partial">
        <h3>@nuxtjs/pwa</h3>
        <div class="components">
          Возможная замена:
          <br/>
          <p>Пакет с достаточно большим количеством звезд: <a href="https://github.com/kevinmarrec/nuxt-pwa-module" target="_blank">https://github.com/kevinmarrec/nuxt-pwa-module</a></p>
          <p>Разработчик - член команды Nuxt: <a href="https://github.com/vite-pwa/nuxt" target="_blank">https://github.com/vite-pwa/nuxt</a></p>
        </div>
      </div>

      <div id="@pinia/nuxt" class="content -success">
        <h3>@pinia/nuxt</h3>
        <div class="components">
          Дефолтный пакет для Nuxt 3
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

interface ExamplePost {
  id: number,
  userId: number,
  title: string,
  body: string,
}

const examplePost = ref<null | ExamplePost>(null)

async function fetchExamplePost() {
  try {
    const {data} = await useFetch<ExamplePost>('https://jsonplaceholder.typicode.com/posts/1')
    examplePost.value = data.value
  } catch (e) {
    console.error('fetchExamplePost error', e)
  }
}


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

    &.-success {
      > h3 {
        background-color: #8eff8e;
      }
    }

    &.-failure {
      > h3 {
        background-color: #ffb0b0;
      }
    }

    &.-partial {
      > h3 {
        background-color: #ffff9f;
      }
    }

    &.-research {
      > h3 {
        background-color: #c789ff;
      }
    }


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
